"use client";

import { useState } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 text-[#6B2232] bg-[#F8F3EB]/75 backdrop-blur-md border-b border-[#E8DED3]/60">
      <div className="flex items-center justify-between px-6 md:px-14 py-5 md:py-7">
        <a href="/" className="leading-none">
          <p className="font-heading text-xl md:text-2xl tracking-[0.35em]">
            AMOR
          </p>
          <p className="font-heading text-[10px] md:text-xs tracking-[0.45em] mt-2">
            PHOTO CO.
          </p>
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-9 uppercase tracking-[0.32em] text-[10px] text-[#7A8261]">
          <a href="/portfolio" className="hover:text-[#9AA6D3] transition duration-500">
            Portfolio
          </a>
          <a href="/services" className="hover:text-[#9AA6D3] transition duration-500">
            Services
          </a>
          <a href="/about" className="hover:text-[#9AA6D3] transition duration-500">
            About
          </a>
          <a href="/contact" className="hover:text-[#9AA6D3] transition duration-500">
            Contact
          </a>
        </div>

        {/* Desktop Inquire */}
        <a
          href="/contact"
          className="hidden md:inline-block uppercase tracking-[0.4em] text-[10px] text-[#6B2232] border-b border-[#9AA6D3] pb-1 hover:text-[#9AA6D3] transition duration-500"
        >
          Inquire
        </a>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden uppercase tracking-[0.35em] text-[10px] text-[#6B2232] border border-[#9AA6D3]/60 px-4 py-3"
        >
          {menuOpen ? "Close" : "Menu"}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {menuOpen && (
        <div className="md:hidden bg-[#F8F3EB] border-t border-[#E8DED3] px-6 py-8">
          <div className="grid gap-6 uppercase tracking-[0.35em] text-[11px] text-[#7A8261]">
            <a href="/portfolio" onClick={() => setMenuOpen(false)}>
              Portfolio
            </a>
            <a href="/services" onClick={() => setMenuOpen(false)}>
              Services
            </a>
            <a href="/about" onClick={() => setMenuOpen(false)}>
              About
            </a>
            <a href="/contact" onClick={() => setMenuOpen(false)}>
              Contact
            </a>
          </div>

          <a
            href="/contact"
            onClick={() => setMenuOpen(false)}
            className="inline-block mt-8 bg-[#6B2232] text-[#F8F3EB] px-7 py-4 uppercase tracking-[0.35em] text-[10px]"
          >
            Inquire
          </a>
        </div>
      )}
    </nav>
  );
}