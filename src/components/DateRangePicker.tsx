"use client";

import { useState, useRef, useEffect } from "react";

interface DateRangePickerProps {
  departureDate: string;
  returnDate: string;
  onDepartureDateChange: (date: string) => void;
  onReturnDateChange: (date: string) => void;
  tripType: "roundtrip" | "oneway";
  onTripTypeChange?: (type: "roundtrip" | "oneway") => void;
}

export default function DateRangePicker({
  departureDate,
  returnDate,
  onDepartureDateChange,
  onReturnDateChange,
  tripType,
  onTripTypeChange,
}: DateRangePickerProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [currentMonth, setCurrentMonth] = useState(() => {
    const today = new Date();
    return new Date(today.getFullYear(), today.getMonth(), 1);
  });
  const [selectingReturn, setSelectingReturn] = useState(false);
  const [showReturnPrompt, setShowReturnPrompt] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  // Close on click outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setIsOpen(false);
        setSelectingReturn(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const formatFullDate = (dateStr: string) => {
    if (!dateStr) return "";
    const date = new Date(dateStr + "T00:00:00");
    return date.toLocaleDateString("en-US", { weekday: "short", month: "short", day: "numeric" });
  };

  const getDaysInMonth = (date: Date) => {
    const year = date.getFullYear();
    const month = date.getMonth();
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const daysInMonth = lastDay.getDate();
    const startingDay = firstDay.getDay();
    return { daysInMonth, startingDay, year, month };
  };

  const isDateDisabled = (year: number, month: number, day: number) => {
    const date = new Date(year, month, day);
    date.setHours(0, 0, 0, 0);
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    return date < today;
  };

  const isToday = (year: number, month: number, day: number) => {
    const today = new Date();
    return year === today.getFullYear() && month === today.getMonth() && day === today.getDate();
  };

  const isDateInRange = (year: number, month: number, day: number) => {
    if (!departureDate || !returnDate) return false;
    const date = new Date(year, month, day);
    const start = new Date(departureDate + "T00:00:00");
    const end = new Date(returnDate + "T00:00:00");
    return date > start && date < end;
  };

  const isDepartureDate = (year: number, month: number, day: number) => {
    const dateStr = `${year}-${String(month + 1).padStart(2, "0")}-${String(day).padStart(2, "0")}`;
    return dateStr === departureDate;
  };

  const isReturnDate = (year: number, month: number, day: number) => {
    const dateStr = `${year}-${String(month + 1).padStart(2, "0")}-${String(day).padStart(2, "0")}`;
    return dateStr === returnDate;
  };

  const handleDateClick = (year: number, month: number, day: number) => {
    if (isDateDisabled(year, month, day)) return;
    
    const dateStr = `${year}-${String(month + 1).padStart(2, "0")}-${String(day).padStart(2, "0")}`;
    
    if (tripType === "oneway") {
      onDepartureDateChange(dateStr);
      setShowReturnPrompt(true);
      return;
    }

    if (!selectingReturn || !departureDate) {
      onDepartureDateChange(dateStr);
      onReturnDateChange("");
      setSelectingReturn(true);
    } else {
      const selectedDate = new Date(year, month, day);
      const depDate = new Date(departureDate + "T00:00:00");
      
      if (selectedDate <= depDate) {
        onDepartureDateChange(dateStr);
        onReturnDateChange("");
      } else {
        onReturnDateChange(dateStr);
        setSelectingReturn(false);
        setIsOpen(false);
      }
    }
  };

  const goToPrevMonth = () => {
    const today = new Date();
    const newMonth = new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1, 1);
    if (newMonth.getFullYear() > today.getFullYear() || 
        (newMonth.getFullYear() === today.getFullYear() && newMonth.getMonth() >= today.getMonth())) {
      setCurrentMonth(newMonth);
    }
  };

  const goToNextMonth = () => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1, 1));
  };

  const canGoPrev = () => {
    const today = new Date();
    return currentMonth.getFullYear() > today.getFullYear() || 
           (currentMonth.getFullYear() === today.getFullYear() && currentMonth.getMonth() > today.getMonth());
  };

  const renderMonth = (monthOffset: number) => {
    const displayDate = new Date(currentMonth.getFullYear(), currentMonth.getMonth() + monthOffset, 1);
    const { daysInMonth, startingDay, year, month } = getDaysInMonth(displayDate);
    const monthName = displayDate.toLocaleDateString("en-US", { month: "long", year: "numeric" });

    const days = [];
    // Empty cells for days before the first of the month
    for (let i = 0; i < startingDay; i++) {
      days.push(<div key={`empty-${i}`} className="w-10 h-10" />);
    }
    
    // Actual days
    for (let day = 1; day <= daysInMonth; day++) {
      const disabled = isDateDisabled(year, month, day);
      const inRange = isDateInRange(year, month, day);
      const isDep = isDepartureDate(year, month, day);
      const isRet = isReturnDate(year, month, day);
      const todayDate = isToday(year, month, day);

      // Build class string
      let dayClasses = "w-10 h-10 text-sm font-medium flex items-center justify-center transition-all ";
      
      if (disabled) {
        dayClasses += "text-gray-300 cursor-not-allowed ";
      } else if (isDep || isRet) {
        dayClasses += "bg-[#0f49bd] text-white rounded-full cursor-pointer ";
      } else if (inRange) {
        dayClasses += "bg-[#e8f0fe] text-[#111318] cursor-pointer hover:bg-[#d4e4fc] ";
      } else {
        dayClasses += "text-[#111318] rounded-full cursor-pointer hover:bg-gray-100 ";
      }
      
      days.push(
        <button
          key={day}
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            handleDateClick(year, month, day);
          }}
          disabled={disabled}
          className={dayClasses}
        >
          <span className="relative">
            {day}
            {todayDate && !isDep && !isRet && (
              <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 bg-[#0f49bd] rounded-full" />
            )}
          </span>
        </button>
      );
    }

    return (
      <div className="w-full">
        <div className="text-center font-semibold text-[#111318] mb-4">{monthName}</div>
        <div className="grid grid-cols-7 gap-1 mb-2">
          {["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"].map((d) => (
            <div key={d} className="w-10 h-8 flex items-center justify-center text-xs font-semibold text-gray-400">{d}</div>
          ))}
        </div>
        <div className="grid grid-cols-7 gap-1">{days}</div>
      </div>
    );
  };

  // Determine if we should show the nudge
  const showNudge = selectingReturn && departureDate && !returnDate && tripType === "roundtrip";

  return (
    <div ref={containerRef} className="relative">
      <label className="text-[10px] font-bold text-[#0f49bd] uppercase tracking-widest pl-1 block mb-2">
        {tripType === "roundtrip" ? "Travel Dates" : "Departure Date"}
      </label>
      
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center gap-3 px-4 py-3 rounded-lg border border-gray-200 hover:border-[#0f49bd]/30 focus:border-[#0f49bd]/50 focus:ring-2 focus:ring-[#0f49bd]/20 bg-gray-50/50 transition-all text-left"
      >
        <svg
          className="w-5 h-5 text-[#0f49bd]/60 flex-shrink-0"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
          />
        </svg>
        
        <div className="flex-1 flex items-center gap-2 min-w-0">
          <span className={`text-sm truncate ${departureDate ? "text-[#111318] font-medium" : "text-gray-400"}`}>
            {departureDate ? formatFullDate(departureDate) : "Departure"}
          </span>
          
          {tripType === "roundtrip" && (
            <>
              <svg className="w-4 h-4 text-[#0f49bd] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
              <span className={`text-sm truncate ${returnDate ? "text-[#111318] font-medium" : "text-gray-400"}`}>
                {returnDate ? formatFullDate(returnDate) : "Return"}
              </span>
            </>
          )}
        </div>
      </button>

      {/* Calendar Dropdown */}
      {isOpen && (
        <div 
          className="absolute top-full left-1/2 -translate-x-1/2 mt-2 bg-white rounded-2xl shadow-2xl border border-gray-200 z-50"
          style={{ 
            animation: "fadeIn 0.15s ease-out",
            width: "min(640px, calc(100vw - 32px))",
            maxWidth: "calc(100vw - 32px)"
          }}
        >
          {/* Return date prompt - show when departure selected in one-way mode */}
          {showReturnPrompt && tripType === "oneway" && departureDate && (
            <div className="px-6 py-4 bg-gradient-to-r from-[#0f49bd]/5 via-[#4d8aff]/10 to-[#0f49bd]/5 rounded-t-2xl">
              <p className="text-sm text-[#111318] text-center font-medium mb-3">
                Departure: <span className="font-semibold text-[#0f49bd]">{formatFullDate(departureDate)}</span>
              </p>
              <p className="text-sm text-gray-600 text-center mb-3">
                Would you like to add a return date?
              </p>
              <div className="flex gap-3 justify-center">
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    setShowReturnPrompt(false);
                    if (onTripTypeChange) {
                      onTripTypeChange("roundtrip");
                    }
                    setSelectingReturn(true);
                  }}
                  className="px-4 py-2 text-sm font-semibold text-white bg-[#0f49bd] hover:bg-[#1a5cd9] rounded-lg transition-colors cursor-pointer"
                >
                  Yes, Add Return Date
                </button>
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    setShowReturnPrompt(false);
                    setIsOpen(false);
                  }}
                  className="px-4 py-2 text-sm font-semibold text-gray-600 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors cursor-pointer"
                >
                  No, One-Way Only
                </button>
              </div>
            </div>
          )}

          {/* Nudge message - only show when selecting return in roundtrip mode */}
          {showNudge && !showReturnPrompt && (
            <div className="px-6 py-3 bg-gradient-to-r from-[#0f49bd]/5 via-[#4d8aff]/10 to-[#0f49bd]/5 rounded-t-2xl">
              <p className="text-sm text-[#0f49bd] text-center font-semibold flex items-center justify-center gap-2">
                <span className="text-base">✨</span> 
                Now select your return date
              </p>
            </div>
          )}
          
          {/* Header with navigation */}
          <div className="flex items-center justify-between px-4 md:px-6 py-4 border-b border-gray-100">
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                goToPrevMonth();
              }}
              disabled={!canGoPrev()}
              className={`w-9 h-9 rounded-full flex items-center justify-center transition-all ${
                canGoPrev() 
                  ? "hover:bg-gray-100 cursor-pointer text-gray-700" 
                  : "text-gray-300 cursor-not-allowed"
              }`}
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <span className="text-sm font-medium text-gray-600">
              {showNudge ? "Select return date" : "Select dates"}
            </span>
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                goToNextMonth();
              }}
              className="w-9 h-9 rounded-full flex items-center justify-center hover:bg-gray-100 transition-all cursor-pointer text-gray-700"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>

          {/* Calendars - responsive layout */}
          <div className="p-4 md:p-6 max-h-[60vh] overflow-y-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
              {renderMonth(0)}
              {renderMonth(1)}
            </div>
          </div>

          {/* Footer */}
          <div className="px-4 md:px-6 py-4 border-t border-gray-100 bg-gray-50 rounded-b-2xl flex items-center justify-between">
            <div className="text-sm text-gray-600">
              {departureDate ? (
                <span className="font-medium">
                  {formatFullDate(departureDate)}
                  {returnDate && (
                    <span className="text-[#0f49bd]"> → {formatFullDate(returnDate)}</span>
                  )}
                </span>
              ) : (
                <span className="text-gray-400">No dates selected</span>
              )}
            </div>
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                setIsOpen(false);
                setSelectingReturn(false);
              }}
              className="px-4 py-2 text-sm font-semibold text-white bg-[#0f49bd] hover:bg-[#1a5cd9] rounded-lg transition-colors cursor-pointer"
            >
              Done
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
