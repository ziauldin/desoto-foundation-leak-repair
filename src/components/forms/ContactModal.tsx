"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { ContactForm } from "@/components/forms/ContactForm";
import { ArrowIcon, CloseIcon } from "@/components/ui/Icons";

const defaultTitle = "Request a foundation inspection";

interface PopupState {
  title: string;
  issue: string;
  /** Optional "read about this service" link shown under the form. */
  link?: { href: string; label: string };
  /** Bumped on every open so the form starts fresh each time. */
  session: number;
}

/**
 * Site-wide popup form. Any <a data-contact-popup> opens it instead of navigating: inspection CTAs
 * (ButtonLink adds the attribute automatically) and home-page service links (servicePopupAttrs in lib/lead).
 * Modified clicks and no-JS still follow the href. Native <dialog> + showModal() provides the focus trap,
 * Escape to close and the backdrop.
 */
export function ContactModal() {
  const ref = useRef<HTMLDialogElement>(null);
  const [popup, setPopup] = useState<PopupState>({ title: defaultTitle, issue: "", session: 0 });

  useEffect(() => {
    // Capture phase on window runs before next/link's handler, which skips navigation once defaultPrevented is set.
    const onClick = (e: MouseEvent) => {
      if (e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
      const link = (e.target as Element | null)?.closest?.<HTMLAnchorElement>("a[data-contact-popup]");
      if (!link || !ref.current) return;
      e.preventDefault();
      const d = link.dataset;
      setPopup((prev) => ({
        title: d.popupTitle || link.textContent?.replace(/[→›»]/g, "").trim() || defaultTitle,
        issue: d.popupIssue ?? "",
        link: d.popupLink ? { href: d.popupLink, label: d.popupLinkLabel ?? "this service" } : undefined,
        session: prev.session + 1,
      }));
      ref.current.showModal();
      document.documentElement.style.overflow = "hidden";
    };
    window.addEventListener("click", onClick, true);
    return () => window.removeEventListener("click", onClick, true);
  }, []);

  const close = () => ref.current?.close();

  return (
    <dialog
      ref={ref}
      aria-label={popup.title}
      onClose={() => (document.documentElement.style.overflow = "")}
      // Clicks on the dialog element itself (not its content) are backdrop clicks.
      onClick={(e) => e.target === e.currentTarget && close()}
      className="contact-modal m-auto max-h-[calc(100dvh-2rem)] w-[min(40rem,calc(100vw-2rem))] overflow-y-auto rounded-lg bg-transparent p-0 backdrop:bg-primary-dark/60 backdrop:backdrop-blur-sm"
    >
      <div className="relative">
        <button
          type="button"
          aria-label="Close"
          onClick={close}
          className="absolute right-3 top-3 z-10 grid h-10 w-10 place-items-center rounded-full bg-primary-dark text-white shadow-md transition-[translate,scale,transform,background-color] duration-200 hover:rotate-90 hover:bg-accent hover:text-primary-dark focus-visible:bg-accent focus-visible:text-primary-dark"
        >
          <CloseIcon className="h-5 w-5" />
        </button>
        {popup.session > 0 && <ContactForm key={popup.session} title={popup.title} defaultIssue={popup.issue} inModal />}
        {popup.link && (
          <p className="mt-2 rounded-lg bg-surface px-5 py-3 text-sm text-muted sm:px-6">
            Just researching?{" "}
            <Link href={popup.link.href} onClick={close} className="inline-flex items-center gap-1 font-semibold text-primary underline decoration-accent decoration-2 underline-offset-4">
              Read about {popup.link.label.toLowerCase()} <ArrowIcon />
            </Link>
          </p>
        )}
      </div>
    </dialog>
  );
}
