"use client";

import { useState, useRef, useEffect } from "react";

// Flexible airport type that works with both US and global airports
interface FlexibleAirport {
  code: string;
  name: string;
  city: string;
  state?: string;
  country?: string;
}

interface AirportAutocompleteProps {
  airports: FlexibleAirport[];
  value: string;
  onChange: (value: string) => void;
  placeholder: string;
  label: string;
  required?: boolean;
}

export default function AirportAutocomplete({
  airports,
  value,
  onChange,
  placeholder,
  label,
  required = false,
}: AirportAutocompleteProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [filteredAirports, setFilteredAirports] = useState<FlexibleAirport[]>([]);
  const [highlightedIndex, setHighlightedIndex] = useState(-1);
  const inputRef = useRef<HTMLInputElement>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Get location text (state for US, country for international)
  const getLocationText = (airport: FlexibleAirport) => {
    return airport.state || airport.country || "";
  };

  useEffect(() => {
    if (value.length > 0) {
      const searchTerm = value.toLowerCase();
      const filtered = airports.filter(
        (airport) =>
          airport.code.toLowerCase().includes(searchTerm) ||
          airport.name.toLowerCase().includes(searchTerm) ||
          airport.city.toLowerCase().includes(searchTerm) ||
          getLocationText(airport).toLowerCase().includes(searchTerm)
      );
      setFilteredAirports(filtered.slice(0, 8)); // Limit to 8 results
    } else {
      setFilteredAirports([]);
    }
  }, [value, airports]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node) &&
        inputRef.current &&
        !inputRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.value);
    setIsOpen(true);
    setHighlightedIndex(-1);
  };

  const handleSelect = (airport: FlexibleAirport) => {
    const location = getLocationText(airport);
    onChange(`${airport.city}, ${location} (${airport.code})`);
    setIsOpen(false);
    setHighlightedIndex(-1);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (!isOpen && filteredAirports.length > 0) {
      setIsOpen(true);
      return;
    }

    switch (e.key) {
      case "ArrowDown":
        e.preventDefault();
        setHighlightedIndex((prev) =>
          prev < filteredAirports.length - 1 ? prev + 1 : prev
        );
        break;
      case "ArrowUp":
        e.preventDefault();
        setHighlightedIndex((prev) => (prev > 0 ? prev - 1 : -1));
        break;
      case "Enter":
        e.preventDefault();
        if (highlightedIndex >= 0 && filteredAirports[highlightedIndex]) {
          handleSelect(filteredAirports[highlightedIndex]);
        }
        break;
      case "Escape":
        setIsOpen(false);
        setHighlightedIndex(-1);
        break;
    }
  };

  return (
    <div className="flex flex-col gap-2 relative">
      <label className="text-[10px] font-bold text-[#0f49bd] uppercase tracking-widest pl-1">
        {label}
      </label>
      <div className="relative">
        <svg
          className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#0f49bd] pointer-events-none"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
          />
        </svg>
        <input
          ref={inputRef}
          type="text"
          value={value}
          onChange={handleInputChange}
          onKeyDown={handleKeyDown}
          onFocus={() => value.length > 0 && setIsOpen(true)}
          className="w-full pl-12 pr-4 py-4 rounded-lg border border-gray-200 focus:border-[#0f49bd]/50 focus:ring-2 focus:ring-[#0f49bd]/20 text-base bg-gray-50/50 text-[#111318] transition-all outline-none placeholder:text-gray-400"
          placeholder={placeholder}
          required={required}
          autoComplete="off"
        />
        {isOpen && filteredAirports.length > 0 && (
          <div
            ref={dropdownRef}
            className="absolute z-50 w-full mt-2 bg-white rounded-lg border border-gray-200 shadow-xl max-h-64 overflow-y-auto"
          >
            {filteredAirports.map((airport, index) => (
              <button
                key={airport.code}
                type="button"
                onClick={() => handleSelect(airport)}
                onMouseEnter={() => setHighlightedIndex(index)}
                className={`w-full text-left px-4 py-3 hover:bg-[#0f49bd]/5 transition-colors border-b border-gray-100 last:border-0 ${
                  index === highlightedIndex ? "bg-[#0f49bd]/10" : ""
                }`}
              >
                <div className="flex items-center justify-between">
                  <div>
                    <div className="font-semibold text-[#111318] text-sm">
                      {airport.city}, {getLocationText(airport)}
                    </div>
                    <div className="text-xs text-gray-500 mt-0.5">
                      {airport.name}
                    </div>
                  </div>
                  <div className="font-bold text-[#0f49bd] text-sm">
                    {airport.code}
                  </div>
                </div>
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
