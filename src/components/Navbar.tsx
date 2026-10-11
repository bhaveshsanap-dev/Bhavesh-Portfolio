import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { profile, navLinks } from "@/data/portfolio";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const closeMenu = () => setOpen(false);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${
        scrolled
          ? "bg-ink-50/90 backdrop-blur-sm border-b border-ink-200"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <nav
        className="section-padding mx-auto max-w-content flex items-center justify-between h-16"
        aria-label="Primary"
      >
        <a
          href="#top"
          className="font-mono text-lg font-semibold tracking-tight text-ink-900 transition-opacity hover:opacity-70"
          onClick={closeMenu}
        >
          {profile.monogram}
        </a>

        {/* Desktop nav */}
        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-sm text-ink-600 hover:text-terracotta transition-colors duration-200"
              >
                {link.label}
              </a>
            </li>
          ))}
          <li>
            <a
              href="#contact"
              className="text-sm font-medium text-ink-900 border-b border-ink-300 hover:border-terracotta transition-colors duration-200"
            >
              Get in touch
            </a>
          </li>
        </ul>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-ink-800 p-1 -mr-1"
          onClick={() => setOpen(!open)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls="mobile-menu"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div
          id="mobile-menu"
          className="md:hidden bg-ink-50 border-t border-ink-200"
        >
          <ul className="section-padding py-6 space-y-4">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={closeMenu}
                  className="block text-base text-ink-700 hover:text-terracotta transition-colors"
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href="#contact"
                onClick={closeMenu}
                className="block text-base font-medium text-ink-900"
              >
                Get in touch
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
