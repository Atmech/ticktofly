"use client";

import { useState, useRef, useEffect } from "react";

interface TravelersDropdownProps {
  adults: number;
  children: number;
  childAges: number[];
  infants: number;
  onAdultsChange: (count: number) => void;
  onChildrenChange: (count: number, ages: number[]) => void;
  onInfantsChange: (count: number) => void;
}

export default function TravelersDropdown({
  adults,
  children,
  childAges,
  infants,
  onAdultsChange,
  onChildrenChange,
  onInfantsChange,
}: TravelersDropdownProps) {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleChildrenChange = (newCount: number) => {
    if (newCount < 0 || newCount > 6) return;
    
    const newAges = [...childAges];
    if (newCount > childAges.length) {
      while (newAges.length < newCount) {
        newAges.push(5); // Default to age 5
      }
    } else {
      newAges.splice(newCount);
    }
    onChildrenChange(newCount, newAges);
  };

  const handleChildAgeChange = (index: number, age: number) => {
    const newAges = [...childAges];
    newAges[index] = age;
    onChildrenChange(children, newAges);
  };

  const getTravelersSummary = () => {
    const parts = [];
    if (adults > 0) parts.push(`${adults} Adult${adults > 1 ? "s" : ""}`);
    if (children > 0) parts.push(`${children} Child${children > 1 ? "ren" : ""}`);
    if (infants > 0) parts.push(`${infants} Infant${infants > 1 ? "s" : ""}`);
    return parts.join(", ") || "Select travelers";
  };

  const StepperButton = ({
    onClick,
    disabled,
    children: buttonChildren,
  }: {
    onClick: () => void;
    disabled: boolean;
    children: React.ReactNode;
  }) => (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      className={`w-8 h-8 rounded-full border-2 flex items-center justify-center font-bold text-lg transition-all
        ${disabled 
          ? "border-gray-200 text-gray-300 cursor-not-allowed" 
          : "border-[#0f49bd] text-[#0f49bd] hover:bg-[#0f49bd] hover:text-white cursor-pointer"
        }`}
    >
      {buttonChildren}
    </button>
  );

  return (
    <div ref={containerRef} className="relative">
      <label className="text-[10px] font-bold text-[#0f49bd] uppercase tracking-widest pl-1 block mb-2">
        Travelers
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
            d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z"
          />
        </svg>
        <span className="flex-1 text-sm text-[#111318]">{getTravelersSummary()}</span>
        <svg
          className={`w-4 h-4 text-gray-400 transition-transform ${isOpen ? "rotate-180" : ""}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {isOpen && (
        <>
          {/* Mobile: Bottom sheet overlay */}
          <div 
            className="md:hidden fixed inset-0 bg-black/50 z-40 animate-fade-in"
            onClick={() => setIsOpen(false)}
          />
          
          {/* Desktop: Dropdown / Mobile: Bottom sheet */}
          <div className="
            md:absolute md:top-full md:left-0 md:right-0 md:mt-2 md:rounded-xl
            fixed bottom-0 left-0 right-0 md:bottom-auto
            bg-white rounded-t-2xl md:rounded-xl shadow-2xl border border-gray-100 p-5 z-50 animate-fade-in
            max-h-[80vh] overflow-y-auto
          ">
            {/* Mobile header */}
            <div className="md:hidden flex items-center justify-between mb-4 pb-3 border-b border-gray-100">
              <h3 className="font-semibold text-[#111318]">Select Travelers</h3>
              <button
                type="button"
                onClick={() => setIsOpen(false)}
                className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-100 text-gray-500"
              >
                ✕
              </button>
            </div>

            {/* Adults */}
            <div className="flex items-center justify-between py-3 border-b border-gray-100">
              <div>
                <div className="font-semibold text-[#111318]">Adults</div>
                <div className="text-xs text-gray-400">Age 12+</div>
              </div>
              <div className="flex items-center gap-4">
                <StepperButton onClick={() => onAdultsChange(adults - 1)} disabled={adults <= 1}>
                  −
                </StepperButton>
                <span className="w-6 text-center font-semibold text-[#111318]">{adults}</span>
                <StepperButton onClick={() => onAdultsChange(adults + 1)} disabled={adults >= 9}>
                  +
                </StepperButton>
              </div>
            </div>

            {/* Children */}
            <div className="flex items-center justify-between py-3 border-b border-gray-100">
              <div>
                <div className="font-semibold text-[#111318]">Children</div>
                <div className="text-xs text-gray-400">Ages 2-11</div>
              </div>
              <div className="flex items-center gap-4">
                <StepperButton onClick={() => handleChildrenChange(children - 1)} disabled={children <= 0}>
                  −
                </StepperButton>
                <span className="w-6 text-center font-semibold text-[#111318]">{children}</span>
                <StepperButton onClick={() => handleChildrenChange(children + 1)} disabled={children >= 6}>
                  +
                </StepperButton>
              </div>
            </div>

            {/* Child Ages */}
            {children > 0 && (
              <div className="py-3 border-b border-gray-100">
                <div className="text-xs text-gray-500 mb-3">Child ages at time of travel</div>
                <div className="grid grid-cols-3 gap-2">
                  {childAges.map((age, index) => (
                    <div key={index} className="relative">
                      <span className="absolute left-2 top-1/2 -translate-y-1/2 text-xs text-gray-400">
                        #{index + 1}
                      </span>
                      <select
                        value={age}
                        onChange={(e) => handleChildAgeChange(index, parseInt(e.target.value))}
                        className="w-full pl-8 pr-2 py-2 text-sm rounded-lg border border-gray-200 focus:border-[#0f49bd]/50 focus:ring-1 focus:ring-[#0f49bd]/20 bg-gray-50/50 outline-none appearance-none cursor-pointer"
                      >
                        {Array.from({ length: 10 }, (_, i) => i + 2).map((a) => (
                          <option key={a} value={a}>
                            {a} yrs
                          </option>
                        ))}
                      </select>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Infants */}
            <div className="flex items-center justify-between py-3">
              <div>
                <div className="font-semibold text-[#111318]">Infants</div>
                <div className="text-xs text-gray-400">Under 2 (on lap)</div>
              </div>
              <div className="flex items-center gap-4">
                <StepperButton onClick={() => onInfantsChange(infants - 1)} disabled={infants <= 0}>
                  −
                </StepperButton>
                <span className="w-6 text-center font-semibold text-[#111318]">{infants}</span>
                <StepperButton onClick={() => onInfantsChange(infants + 1)} disabled={infants >= adults}>
                  +
                </StepperButton>
              </div>
            </div>
            {infants > 0 && infants >= adults && (
              <div className="text-xs text-amber-600 mt-1">
                Maximum 1 infant per adult
              </div>
            )}

            {/* Done Button */}
            <button
              type="button"
              onClick={() => setIsOpen(false)}
              className="w-full mt-4 py-3 bg-[#0f49bd] hover:bg-[#1a5cd9] text-white font-semibold rounded-lg transition-colors cursor-pointer"
            >
              Done
            </button>
          </div>
        </>
      )}
    </div>
  );
}
