"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { portfolio } from "@/data/portfolio";
import Image from "next/image";

const links = [
  { label: "About", href: "#about" },
  { label: "Work", href: "#projects" },
  { label: "GitHub", href: "#other-projects" },
  { label: "Experience", href: "#experience" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];

export function Navigation() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 24);

      const sectionIds = ["home", ...links.map((link) => link.href.slice(1))];
      const scrollPosition = window.scrollY + window.innerHeight * 0.38;
      let currentSection = "home";

      for (const sectionId of sectionIds) {
        const section = document.getElementById(sectionId);
        if (section && section.offsetTop <= scrollPosition) {
          currentSection = sectionId;
        }
      }

      setActiveSection(currentSection);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`site-header max-w-[100vw] ${scrolled ? "is-scrolled" : ""}`}
    >
      <a className="brand" href="#home" aria-label="Back to top">
        <Image
          className="brand-logo"
          src="/KS.png"
          alt=""
          width={40}
          height={40}
          sizes="(max-width: 720px) 36px, 40px"
          priority
        />
        <p>
          {portfolio.name}
          <small>{portfolio.role}</small>
        </p>
      </a>

      <button
        type="button"
        className="menu-button ml-auto shrink-0"
        onClick={() => setOpen((value) => !value)}
        aria-label={open ? "Close menu" : "Open menu"}
        aria-expanded={open}
      >
        {open ? <X /> : <Menu />}
      </button>

      <nav className={open ? "is-open" : ""} aria-label="Main navigation">
        {links.map((link) => (
          <a
            key={link.href}
            href={link.href}
            className={activeSection === link.href.slice(1) ? "is-active" : ""}
            aria-current={
              activeSection === link.href.slice(1) ? "location" : undefined
            }
            onClick={() => setOpen(false)}
          >
            {link.label}
          </a>
        ))}
      </nav>
    </header>
  );
}
