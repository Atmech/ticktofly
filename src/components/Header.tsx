"use client";

import { useState } from "react";
import Link from "next/link";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="flex items-center justify-between bg-white/95 backdrop-blur-sm px-6 py-4 lg:px-20 sticky top-0 z-50 border-b border-gray-100/50">
      {/* Logo */}
      <Link href="/" className="flex items-center gap-3 text-[#0f49bd]">
        <div className="size-9">
          <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
            <path
              clipRule="evenodd"
              d="M24 18.4228L42 11.475V34.3663C42 34.7796 41.7457 35.1504 41.3601 35.2992L24 42V18.4228Z"
              fill="currentColor"
              fillRule="evenodd"
            />
            <path
              clipRule="evenodd"
              d="M24 8.18819L33.4123 11.574L24 15.2071L14.5877 11.574L24 8.18819ZM9 15.8487L21 20.4805V37.6263L9 32.9945V15.8487ZM27 37.6263V20.4805L39 15.8487V32.9945L27 37.6263ZM25.354 2.29885C24.4788 1.98402 23.5212 1.98402 22.646 2.29885L4.98454 8.65208C3.7939 9.08038 3 10.2097 3 11.475V34.3663C3 36.0196 4.01719 37.5026 5.55962 38.098L22.9197 44.7987C23.6149 45.0671 24.3851 45.0671 25.0803 44.7987L42.4404 38.098C43.9828 37.5026 45 36.0196 45 34.3663V11.475C45 10.2097 44.2061 9.08038 43.0155 8.65208L25.354 2.29885Z"
              fill="currentColor"
              fillRule="evenodd"
            />
          </svg>
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
        <button className="bg-[#0f49bd]/5 hover:bg-[#0f49bd]/10 text-[#0f49bd] text-sm font-bold h-10 px-6 rounded-lg transition-colors border border-[#0f49bd]/20">
          Client Login
        </button>
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
            <button className="bg-[#0f49bd] text-white text-sm font-bold h-12 px-6 rounded-lg transition-colors mt-2">
              Client Login
            </button>
          </nav>
        </div>
      )}
    </header>
  );
}
