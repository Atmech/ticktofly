"use client";

import { useState } from "react";
import AirportAutocomplete from "./AirportAutocomplete";
import DateRangePicker from "./DateRangePicker";
import TravelersDropdown from "./TravelersDropdown";
import { GLOBAL_AIRPORTS } from "@/data/globalAirports";

export default function Hero() {
  const [formData, setFormData] = useState({
    name: "",
    origin: "",
    destination: "",
    tripType: "oneway" as "roundtrip" | "oneway",
    departureDate: "",
    returnDate: "",
    adults: 1,
    children: 0,
    childAges: [] as number[],
    infants: 0,
    cabinClass: "economy" as "economy" | "premium" | "business" | "first",
    phone: "",
    callTime: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      const response = await fetch("/api/lead", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitStatus("success");
        setFormData({
          name: "",
          origin: "",
          destination: "",
          tripType: "oneway",
          departureDate: "",
          returnDate: "",
          adults: 1,
          children: 0,
          childAges: [],
          infants: 0,
          cabinClass: "economy",
          phone: "",
          callTime: "",
        });
      } else {
        setSubmitStatus("error");
      }
    } catch {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  const cabinClassLabels = {
    economy: "Economy",
    premium: "Premium Economy",
    business: "Business",
    first: "First Class",
  };

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Full-screen Private Jet Window Background */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1540962351504-03099e0a754b?q=80&w=2574&auto=format&fit=crop')`,
        }}
      />
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#051024]/90 via-[#051024]/70 to-[#051024]/50" />
      
      {/* Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-20 py-16 lg:py-24">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          {/* Left Side - Text */}
          <div className="flex-1 text-center lg:text-left animate-fade-in">
            <h1 className="font-[family-name:var(--font-montserrat)] text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white leading-[1.05] tracking-tight mb-6">
              Elite Travel.
              <br />
              <span className="text-[#4d8aff]">Personal Service.</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-200 font-normal leading-relaxed max-w-lg mx-auto lg:mx-0 mb-8">
              Where Every Journey Becomes a Tailored Adventure. Our US-based
              concierge team handles every detail—securing exclusive rates you
              won&apos;t find online.
            </p>
            <div className="hidden lg:flex items-center gap-6 text-gray-300 text-sm">
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-[#4d8aff]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>24/7 VIP Support</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-[#4d8aff]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>Hand-picked Deals</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-[#4d8aff]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>Expert Consultants</span>
              </div>
            </div>
          </div>

          {/* Right Side - Form */}
          <div className="w-full max-w-md lg:max-w-lg animate-fade-in" style={{ animationDelay: "0.2s" }}>
            <div className="bg-white/95 backdrop-blur-md p-8 rounded-2xl shadow-2xl border border-white/20">
              {/* Online Indicator */}
              <div className="mb-6 flex items-center gap-2">
                <div className="h-2 w-2 rounded-full bg-green-400 animate-pulse-slow" />
                <span className="text-xs font-bold text-gray-400 uppercase tracking-widest">
                  Concierge Online
                </span>
              </div>

              {submitStatus === "success" ? (
                <div className="text-center py-8">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-[#111318] mb-2">Thank You!</h3>
                  <p className="text-gray-500">Our team will contact you shortly to plan your perfect journey.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-4">


                  {/* Name Field */}
                  <div className="flex flex-col gap-2">
                    <label className="text-[10px] font-bold text-[#0f49bd] uppercase tracking-widest pl-1">
                      Your Name
                    </label>
                    <div className="relative">
                      <svg
                        className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#0f49bd]/60 pointer-events-none"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                        />
                      </svg>
                      <input
                        type="text"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full pl-12 pr-4 py-3 rounded-lg border border-gray-200 focus:border-[#0f49bd]/50 focus:ring-2 focus:ring-[#0f49bd]/20 text-sm bg-gray-50/50 text-[#111318] transition-all outline-none placeholder:text-gray-400"
                        placeholder="Enter your full name"
                        required
                      />
                    </div>
                  </div>

                  {/* Origin Field - Global Airports */}
                  <AirportAutocomplete
                    airports={GLOBAL_AIRPORTS}
                    value={formData.origin}
                    onChange={(value) => setFormData({ ...formData, origin: value })}
                    placeholder="City or airport code"
                    label="Flying From"
                    required
                  />

                  {/* Destination Field - Global Airports */}
                  <AirportAutocomplete
                    airports={GLOBAL_AIRPORTS}
                    value={formData.destination}
                    onChange={(value) => setFormData({ ...formData, destination: value })}
                    placeholder="Where do you wish to go?"
                    label="Destination"
                    required
                  />

                  {/* Date Range Picker */}
                  <DateRangePicker
                    departureDate={formData.departureDate}
                    returnDate={formData.returnDate}
                    onDepartureDateChange={(date) => setFormData({ ...formData, departureDate: date })}
                    onReturnDateChange={(date) => setFormData({ ...formData, returnDate: date })}
                    tripType={formData.tripType}
                    onTripTypeChange={(type) => setFormData({ ...formData, tripType: type })}
                  />

                  {/* Travelers & Cabin Class Row */}
                  <div className="grid grid-cols-2 gap-3">
                    {/* Travelers Dropdown */}
                    <TravelersDropdown
                      adults={formData.adults}
                      children={formData.children}
                      childAges={formData.childAges}
                      infants={formData.infants}
                      onAdultsChange={(count) => setFormData({ ...formData, adults: count })}
                      onChildrenChange={(count, ages) => setFormData({ ...formData, children: count, childAges: ages })}
                      onInfantsChange={(count) => setFormData({ ...formData, infants: count })}
                    />

                    {/* Cabin Class */}
                    <div className="flex flex-col gap-2">
                      <label className="text-[10px] font-bold text-[#0f49bd] uppercase tracking-widest pl-1">
                        Cabin Class
                      </label>
                      <div className="relative">
                        <svg
                          className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#0f49bd]/60 pointer-events-none"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
                          />
                        </svg>
                        <select
                          value={formData.cabinClass}
                          onChange={(e) => setFormData({ ...formData, cabinClass: e.target.value as typeof formData.cabinClass })}
                          className="w-full pl-12 pr-4 py-3 rounded-lg border border-gray-200 focus:border-[#0f49bd]/50 focus:ring-2 focus:ring-[#0f49bd]/20 text-sm bg-gray-50/50 text-[#111318] transition-all outline-none appearance-none cursor-pointer"
                          style={{
                            backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='%230f49bd'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M19 9l-7 7-7-7'%3E%3C/path%3E%3C/svg%3E")`,
                            backgroundRepeat: 'no-repeat',
                            backgroundPosition: 'right 0.75rem center',
                            backgroundSize: '1rem'
                          }}
                        >
                          <option value="economy">{cabinClassLabels.economy}</option>
                          <option value="premium">{cabinClassLabels.premium}</option>
                          <option value="business">{cabinClassLabels.business}</option>
                          <option value="first">{cabinClassLabels.first}</option>
                        </select>
                      </div>
                    </div>
                  </div>

                  {/* Phone & Call Time */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="flex flex-col gap-2">
                      <label className="text-[10px] font-bold text-[#0f49bd] uppercase tracking-widest pl-1">
                        Phone Number
                      </label>
                      <div className="relative flex items-center">
                        <svg
                          className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#0f49bd]/60"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                          />
                        </svg>
                        <span className="absolute left-12 top-1/2 -translate-y-1/2 text-base text-[#111318] font-medium">
                          +1
                        </span>
                        <input
                          type="tel"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          className="w-full pl-[4.5rem] pr-4 py-4 rounded-lg border border-gray-200 focus:border-[#0f49bd]/50 focus:ring-2 focus:ring-[#0f49bd]/20 text-base bg-gray-50/50 text-[#111318] transition-all outline-none placeholder:text-gray-400"
                          placeholder="(555) 000-0000"
                          required
                        />
                      </div>
                    </div>
                    <div className="flex flex-col gap-2">
                      <label className="text-[10px] font-bold text-[#0f49bd] uppercase tracking-widest pl-1">
                        Best Time to Call
                      </label>
                      <div className="relative">
                        <svg
                          className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#0f49bd]/60 pointer-events-none z-10"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                          />
                        </svg>
                        <select
                          value={formData.callTime}
                          onChange={(e) => setFormData({ ...formData, callTime: e.target.value })}
                          className="w-full pl-12 pr-4 py-4 rounded-lg border border-gray-200 focus:border-[#0f49bd]/50 focus:ring-2 focus:ring-[#0f49bd]/20 text-base bg-gray-50/50 text-[#111318] transition-all outline-none appearance-none cursor-pointer"
                          style={{
                            backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='%230f49bd'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M19 9l-7 7-7-7'%3E%3C/path%3E%3C/svg%3E")`,
                            backgroundRepeat: 'no-repeat',
                            backgroundPosition: 'right 1rem center',
                            backgroundSize: '1.25rem'
                          }}
                        >
                          <option value="" disabled>
                            Select preference
                          </option>
                          <option value="morning">Morning (9AM - 12PM)</option>
                          <option value="afternoon">Afternoon (12PM - 5PM)</option>
                          <option value="evening">Evening (5PM - 8PM)</option>
                        </select>
                      </div>
                    </div>
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="mt-3 w-full bg-[#0f49bd] hover:bg-[#1a5cd9] disabled:bg-[#0f49bd]/70 text-white font-bold font-[family-name:var(--font-montserrat)] text-lg py-4 rounded-lg shadow-lg shadow-[#0f49bd]/30 hover:shadow-[#0f49bd]/50 transition-all active:scale-[0.99] flex items-center justify-center gap-2 cursor-pointer"
                  >
                    {isSubmitting ? (
                      <>
                        <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                        </svg>
                        <span>Sending...</span>
                      </>
                    ) : (
                      <>
                        <span>Get My Flight Plan</span>
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                      </>
                    )}
                  </button>

                  {submitStatus === "error" && (
                    <p className="text-center text-sm text-red-500 mt-2">
                      Something went wrong. Please try again or call us directly.
                    </p>
                  )}

                  <p className="text-center text-xs text-gray-400 mt-1">
                    No commitment required. We respect your privacy.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
