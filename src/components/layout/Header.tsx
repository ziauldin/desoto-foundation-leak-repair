"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { site } from "@/config/site";
import type { NavGroup } from "@/types/content";
import { buttonClass } from "@/components/ui/Button";
import { ChevronIcon, CloseIcon, MenuIcon, PhoneIcon } from "@/components/ui/Icons";

export function Header({ nav }: { nav: NavGroup[] }) {
  return (
    <header className="sticky top-0 z-40 border-b border-border bg-surface/95 backdrop-blur">
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
    <Link href="/" className="flex shrink-0 items-center gap-2.5" aria-label={`${site.name} home`}>
      <svg viewBox="0 0 40 40" className="h-9 w-9" aria-hidden="true">
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
                  className="rounded-md px-3 py-2 font-display font-semibold text-primary-dark hover:bg-surface-alt"
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
              <div id={menuId} hidden={!isOpen} className="absolute left-0 top-full pt-2">
                <ul className="w-80 rounded-lg border border-border bg-surface p-2 shadow-lg">
                  {group.children.map((child) => (
                    <li key={child.href}>
                      <Link
                        href={child.href}
                        className="block rounded-md px-3 py-2 text-[0.95rem] text-text hover:bg-surface-alt hover:text-primary"
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
      <div
        id="mobile-nav"
        hidden={!open}
        className="fixed inset-x-0 bottom-0 top-16 overflow-y-auto border-t border-border bg-surface pb-28"
      >
        <nav
          aria-label="Mobile"
          className="container-site py-4"
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
                    <ul hidden={expanded !== group.label} className="pb-3 pl-3">
                      {group.children.map((child) => (
                        <li key={child.href}>
                          <Link href={child.href} className="block py-2 text-text">
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
