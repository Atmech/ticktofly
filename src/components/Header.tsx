"use client";

import { useState } from "react";
import Link from "next/link";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="flex items-center justify-between bg-white/95 backdrop-blur-sm px-6 py-4 lg:px-20 sticky top-0 z-50 border-b border-gray-100/50">
      {/* Logo */}
      <Link href="/" className="flex items-center gap-3">
        <div className="relative">
          <img 
            src="/logo.jpeg" 
            alt="TickToFly" 
            className="h-11 w-11 object-cover rounded-full ring-2 ring-[#0f49bd]/20"
          />
        </div>
        <h1 className="text-[#0f49bd] text-xl font-bold font-[family-name:var(--font-montserrat)] leading-tight tracking-tight">
          TickToFly
        </h1>
      </Link>

      {/* Desktop Navigation */}
      <nav className="hidden md:flex items-center gap-10">
        <Link
          href="#services"
          className="text-[#111318] hover:text-[#0f49bd] transition-colors text-sm font-semibold"
        >
          Services
        </Link>
        <Link
          href="#expertise"
          className="text-[#111318] hover:text-[#0f49bd] transition-colors text-sm font-semibold"
        >
          Expertise
        </Link>
        <Link
          href="#destinations"
          className="text-[#111318] hover:text-[#0f49bd] transition-colors text-sm font-semibold"
        >
          Destinations
        </Link>
        <Link
          href="#contact"
          className="text-[#111318] hover:text-[#0f49bd] transition-colors text-sm font-semibold"
        >
          Contact
        </Link>
        {/* <button className="bg-[#0f49bd]/5 hover:bg-[#0f49bd]/10 text-[#0f49bd] text-sm font-bold h-10 px-6 rounded-lg transition-colors border border-[#0f49bd]/20">
          Client Login
        </button> */}
      </nav>

      {/* Mobile Menu Button */}
      <button
        className="md:hidden text-[#0f49bd] p-2"
        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        aria-label="Toggle menu"
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          {mobileMenuOpen ? (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          ) : (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          )}
        </svg>
      </button>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="absolute top-full left-0 right-0 bg-white border-b border-gray-100 shadow-lg md:hidden">
          <nav className="flex flex-col p-6 gap-4">
            <Link
              href="#services"
              className="text-[#111318] hover:text-[#0f49bd] transition-colors text-base font-semibold py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Services
            </Link>
            <Link
              href="#expertise"
              className="text-[#111318] hover:text-[#0f49bd] transition-colors text-base font-semibold py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Expertise
            </Link>
            <Link
              href="#destinations"
              className="text-[#111318] hover:text-[#0f49bd] transition-colors text-base font-semibold py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Destinations
            </Link>
            <Link
              href="#contact"
              className="text-[#111318] hover:text-[#0f49bd] transition-colors text-base font-semibold py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Contact
            </Link>
            {/* <button className="bg-[#0f49bd] text-white text-sm font-bold h-12 px-6 rounded-lg transition-colors mt-2">
              Client Login
            </button> */}
          </nav>
        </div>
      )}
    </header>
  );
}
