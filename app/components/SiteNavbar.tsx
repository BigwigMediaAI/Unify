"use client";

import { useState } from "react";

export type NavItem = {
  label: string;
  href: string;
};

type SiteNavbarProps = {
  items: NavItem[];
  onNavigate: (href: string) => void;
};

export default function SiteNavbar({ items, onNavigate }: SiteNavbarProps) {
  const [isOpen, setIsOpen] = useState(false);

  const handleNavigate = (href: string) => {
    onNavigate(href);
    setIsOpen(false);
  };

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 py-4 sm:px-6">
      <nav className="mx-auto max-w-7xl rounded-2xl border border-white/10 bg-[#071018]/82 px-4 py-3 shadow-[0_18px_55px_rgba(0,0,0,0.35)] backdrop-blur-xl">
        <div className="flex items-center justify-between gap-4">
          <button
            onClick={() => handleNavigate("#home")}
            className="flex items-center gap-3 text-left"
            aria-label="Go to home"
          >
            <span className="grid h-10 w-10 place-items-center rounded-xl bg-cyan-300 text-sm font-black text-[#061014]">
              U
            </span>
            <span>
              <span className="block text-lg font-black leading-none tracking-normal text-white">
                Unifyi
              </span>
            </span>
          </button>

          <div className="hidden items-center gap-1 lg:flex">
            {items.map((item) => (
              <button
                key={item.href}
                onClick={() => handleNavigate(item.href)}
                className="rounded-xl px-4 py-2 text-sm font-semibold text-slate-300 transition hover:bg-white/10 hover:text-white"
              >
                {item.label}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => handleNavigate("#contact")}
              className="hidden rounded-xl bg-cyan-300 px-5 py-2.5 text-sm font-black text-[#061014] shadow-[0_12px_30px_rgba(45,212,191,0.22)] transition hover:-translate-y-0.5 hover:bg-cyan-200 sm:inline-flex"
            >
              Contact Us
            </button>
            <button
              onClick={() => setIsOpen((value) => !value)}
              className="grid h-10 w-10 place-items-center rounded-xl border border-white/10 bg-white/5 text-lg font-black text-white lg:hidden"
              aria-label="Toggle navigation"
              aria-expanded={isOpen}
            >
              {isOpen ? "x" : "="}
            </button>
          </div>
        </div>

        {isOpen && (
          <div className="mt-4 grid gap-2 border-t border-white/10 pt-4 lg:hidden">
            {items.map((item) => (
              <button
                key={item.href}
                onClick={() => handleNavigate(item.href)}
                className="rounded-xl px-3 py-3 text-left text-sm font-bold text-slate-300 transition hover:bg-white/10 hover:text-white"
              >
                {item.label}
              </button>
            ))}
            <button
              onClick={() => handleNavigate("#contact")}
              className="rounded-xl bg-cyan-300 px-3 py-3 text-left text-sm font-black text-[#061014]"
            >
              Contact Us
            </button>
          </div>
        )}
      </nav>
    </header>
  );
}
