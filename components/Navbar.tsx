export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 md:px-14 py-7 text-[#6B2232] bg-[#F8F3EB]/55 backdrop-blur-sm">
      <a href="/" className="leading-none">
        <p className="font-heading text-2xl tracking-[0.35em]">AMOR</p>
        <p className="font-heading text-xs tracking-[0.45em] mt-2">
          PHOTO CO.
        </p>
      </a>

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

      <a
        href="/contact"
        className="uppercase tracking-[0.4em] text-[10px] text-[#6B2232] border-b border-[#9AA6D3] pb-1 hover:text-[#9AA6D3] transition duration-500"
      >
        Inquire
      </a>
    </nav>
  );
}