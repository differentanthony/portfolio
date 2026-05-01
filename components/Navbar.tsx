"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

const links = ["About", "Services", "Skills", "Projects", "Process", "Contact"];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
      <div className="container-custom nav-inner">

        {/* LOGO FIX */}
        <Link href="/" className="nav-logo">
          <Image
            src="/logo.png"
            alt="Altered Logo"
            className="logo-img"
            width={100}
            height={50}
          />
        </Link>

        <ul className="nav-links">
          {links.map((link) => (
            <li key={link}>
              <a href={`#${link.toLowerCase()}`}>{link}</a>
            </li>
          ))}
        </ul>

        <a href="#contact" className="nav-cta">
          Hire Me
        </a>

        <button
          className="nav-mobile-toggle"
          onClick={() => setOpen(!open)}
          aria-label="Menu"
        >
          <svg
            width="22"
            height="22"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            {open ? (
              <>
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </>
            ) : (
              <>
                <line x1="3" y1="6" x2="21" y2="6" />
                <line x1="3" y1="12" x2="21" y2="12" />
                <line x1="3" y1="18" x2="21" y2="18" />
              </>
            )}
          </svg>
        </button>
      </div>

      <div className={`nav-mobile-menu ${open ? "open" : ""}`}>
        {links.map((link) => (
          <a
            key={link}
            href={`#${link.toLowerCase()}`}
            onClick={() => setOpen(false)}
          >
            {link}
          </a>
        ))}
        <a
          href="#contact"
          className="btn-primary"
          style={{ textAlign: "center" }}
          onClick={() => setOpen(false)}
        >
          Hire Me
        </a>
      </div>
    </nav>
  );
}