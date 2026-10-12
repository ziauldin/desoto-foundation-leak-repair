"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { site } from "@/config/site";
import type { NavGroup } from "@/types/content";
import { buttonClass } from "@/components/ui/Button";
import { ChevronIcon, CloseIcon, MenuIcon, PhoneIcon } from "@/components/ui/Icons";
import { onScrollChange } from "@/lib/scroll";

export function Header({ nav }: { nav: NavGroup[] }) {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => onScrollChange(() => window.scrollY > 12, setScrolled), []);

  return (
    <header
      className={`sticky top-0 z-40 border-b bg-surface transition-shadow duration-300 ${
        scrolled ? "border-transparent shadow-[0_8px_24px_-12px_rgb(19_38_54/0.35)]" : "border-border"
      }`}
    >
      <div className="hidden bg-primary-dark text-sm text-white/85 md:block">
        <div className="container-site flex h-9 items-center justify-between">
          <span>Serving DeSoto, TX 75115 only</span>
          <span>{site.hours}</span>
        </div>
      </div>
      <div className="container-site flex h-16 items-center justify-between gap-4 lg:h-[4.5rem]">
        <Logo />
        <DesktopNav nav={nav} />
        <div className="flex items-center gap-2">
          <a href={site.phoneHref} className={buttonClass("accent", "px-4 py-2.5 max-sm:hidden!")}>
            <PhoneIcon className="h-4 w-4" />
            {site.phoneDisplay}
          </a>
          <MobileNav nav={nav} />
        </div>
      </div>
    </header>
  );
}

function Logo() {
  return (
    <Link href="/" className="group flex shrink-0 items-center gap-2.5">
      <svg viewBox="0 0 40 40" className="h-9 w-9 transition-transform duration-300 group-hover:-rotate-6 group-hover:scale-105" aria-hidden="true">
        <rect width="40" height="40" rx="6" className="fill-primary" />
        <path d="M8 21 20 11l12 10v10H8z" className="fill-none stroke-white" strokeWidth="2.5" strokeLinejoin="round" />
        <path d="M5 31h30" className="stroke-accent" strokeWidth="3" strokeLinecap="round" />
        <path d="M20 19.5s3 3.2 3 5.4a3 3 0 0 1-6 0c0-2.2 3-5.4 3-5.4Z" className="fill-accent" />
      </svg>
      <span className="font-display leading-tight">
        <span className="block text-lg font-bold text-primary-dark">DeSoto Foundation</span>
        <span className="block text-xs font-semibold uppercase tracking-[0.14em] text-muted">Leak Repair</span>
      </span>
    </Link>
  );
}

function DesktopNav({ nav }: { nav: NavGroup[] }) {
  const [open, setOpen] = useState<string | null>(null);
  const navRef = useRef<HTMLElement>(null);
  const pathname = usePathname();

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(null);
    const onClick = (e: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(e.target as Node)) setOpen(null);
    };
    document.addEventListener("keydown", onKey);
    document.addEventListener("click", onClick);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.removeEventListener("click", onClick);
    };
  }, []);

  return (
    <nav
      ref={navRef}
      aria-label="Main"
      className="hidden lg:block"
      onClick={(e) => (e.target as HTMLElement).closest("a") && setOpen(null)}
    >
      <ul className="flex items-center gap-1">
        {nav.map((group) => {
          const active = pathname === group.href;
          if (!group.children) {
            return (
              <li key={group.label}>
                <Link
                  href={group.href}
                  aria-current={active ? "page" : undefined}
                  className="relative rounded-md px-3 py-2 font-display font-semibold text-primary-dark after:absolute after:inset-x-3 after:bottom-1 after:h-0.5 after:origin-left after:scale-x-0 after:bg-accent after:transition-transform after:duration-300 hover:after:scale-x-100 aria-[current=page]:after:scale-x-100"
                >
                  {group.label}
                </Link>
              </li>
            );
          }
          const isOpen = open === group.label;
          const menuId = `menu-${group.label.toLowerCase().replace(/\s+/g, "-")}`;
          return (
            <li
              key={group.label}
              className="relative"
              onMouseEnter={() => setOpen(group.label)}
              onMouseLeave={() => setOpen(null)}
            >
              <button
                type="button"
                aria-expanded={isOpen}
                aria-controls={menuId}
                onClick={() => setOpen(isOpen ? null : group.label)}
                className="flex items-center gap-1 rounded-md px-3 py-2 font-display font-semibold text-primary-dark hover:bg-surface-alt"
              >
                {group.label}
                <ChevronIcon className={`h-4 w-4 transition-transform ${isOpen ? "rotate-180" : ""}`} />
              </button>
              <div
                id={menuId}
                inert={!isOpen}
                className={`absolute left-0 top-full origin-top pt-2 transition-[translate,scale,transform,opacity,color,background-color,border-color] duration-200 ease-out ${
                  isOpen ? "visible translate-y-0 scale-100 opacity-100" : "invisible -translate-y-2 scale-[0.98] opacity-0"
                }`}
              >
                <ul className="w-80 rounded-lg border border-border bg-surface p-2 shadow-lg">
                  {group.children.map((child) => (
                    <li key={child.href}>
                      <Link
                        href={child.href}
                        className="block rounded-md px-3 py-2 text-[0.95rem] text-text transition-[translate,scale,transform,opacity,color,background-color,border-color] duration-200 hover:translate-x-1 hover:bg-surface-alt hover:text-primary"
                      >
                        {child.label}
                      </Link>
                    </li>
                  ))}
                  <li className="mt-1 border-t border-border pt-1">
                    <Link href={group.href} className="block rounded-md px-3 py-2 text-sm font-semibold text-primary hover:bg-surface-alt">
                      View all {group.label.toLowerCase()} →
                    </Link>
                  </li>
                </ul>
              </div>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

function MobileNav({ nav }: { nav: NavGroup[] }) {
  const [open, setOpen] = useState(false);
  const [expanded, setExpanded] = useState<string | null>(null);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <div className="lg:hidden">
      <button
        type="button"
        aria-expanded={open}
        aria-controls="mobile-nav"
        aria-label={open ? "Close menu" : "Open menu"}
        onClick={() => setOpen(!open)}
        className="rounded-md p-2 text-primary-dark hover:bg-surface-alt"
      >
        {open ? <CloseIcon /> : <MenuIcon />}
      </button>
      {/* Backdrop */}
      <div
        aria-hidden="true"
        onClick={() => setOpen(false)}
        className={`fixed inset-0 z-50 bg-primary-dark/55 transition-opacity duration-300 ${
          open ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
      />
      {/* Slide-in drawer */}
      <div
        id="mobile-nav"
        inert={!open}
        className={`fixed inset-y-0 right-0 z-50 flex w-[min(24rem,90vw)] flex-col bg-surface shadow-2xl transition-transform duration-300 ease-out ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex h-16 shrink-0 items-center justify-between border-b border-border px-4">
          <span className="font-display text-lg font-bold text-primary-dark">Menu</span>
          <button type="button" aria-label="Close menu" onClick={() => setOpen(false)} className="rounded-md p-2 text-primary-dark hover:bg-surface-alt">
            <CloseIcon />
          </button>
        </div>
        <nav
          aria-label="Mobile"
          className="flex-1 overflow-y-auto px-4 py-4"
          onClick={(e) => (e.target as HTMLElement).closest("a") && setOpen(false)}
        >
          <ul className="divide-y divide-border">
            {nav.map((group) => (
              <li key={group.label} className="py-1">
                {group.children ? (
                  <>
                    <button
                      type="button"
                      aria-expanded={expanded === group.label}
                      onClick={() => setExpanded(expanded === group.label ? null : group.label)}
                      className="flex w-full items-center justify-between py-3 font-display text-lg font-semibold text-primary-dark"
                    >
                      {group.label}
                      <ChevronIcon className={`h-5 w-5 transition-transform ${expanded === group.label ? "rotate-180" : ""}`} />
                    </button>
                    <div
                      inert={expanded !== group.label}
                      className={`grid transition-[grid-template-rows] duration-300 ease-out ${
                        expanded === group.label ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                      }`}
                    >
                    <ul className="overflow-hidden pb-1 pl-3">
                      {group.children.map((child) => (
                        <li key={child.href}>
                          <Link href={child.href} className="block border-l-2 border-transparent py-2 pl-3 text-text transition-colors hover:border-accent hover:text-primary">
                            {child.label}
                          </Link>
                        </li>
                      ))}
                      <li>
                        <Link href={group.href} className="block py-2 font-semibold text-primary">
                          View all {group.label.toLowerCase()}
                        </Link>
                      </li>
                    </ul>
                    </div>
                  </>
                ) : (
                  <Link href={group.href} className="block py-3 font-display text-lg font-semibold text-primary-dark">
                    {group.label}
                  </Link>
                )}
              </li>
            ))}
          </ul>
          <a href={site.phoneHref} className={buttonClass("accent", "mt-6 w-full")}>
            <PhoneIcon className="h-4 w-4" /> Call {site.phoneDisplay}
          </a>
        </nav>
      </div>
    </div>
  );
}
