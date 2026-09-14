"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { LanguagePicker } from "./LanguagePicker";
import type { Language } from "@/i18n/translate";

const copy = {
  es: {
    tag: "PILATES & MOVIMIENTO CONSCIENTE",
    about: "Sobre mí",
    classes: "Las clases",
    philosophy: "Mi filosofía",
    start: "Empezamos",
    open: "Abrir menú",
    close: "Cerrar menú",
    nav: "Navegación principal",
    language: "Idioma",
    home: "Inicio",
    menu: "Menú",
  },
  ca: {
    tag: "PILATES & MOVIMENT CONSCIENT",
    about: "Sobre mi",
    classes: "Les classes",
    philosophy: "La meva filosofia",
    start: "Comencem",
    open: "Obrir menú",
    close: "Tancar menú",
    nav: "Navegació principal",
    language: "Idioma",
    home: "Inici",
    menu: "Menú",
  },
  en: {
    tag: "PILATES & MINDFUL MOVEMENT",
    about: "About me",
    classes: "Classes",
    philosophy: "My approach",
    start: "Let’s begin",
    open: "Open menu",
    close: "Close menu",
    nav: "Main navigation",
    language: "Language",
    home: "Home",
    menu: "Menu",
  },
};
export function Header({ locale }: { locale: Language }) {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const toggle = useRef<HTMLButtonElement>(null);
  const header = useRef<HTMLElement>(null);
  const labels = copy[locale];
  useEffect(() => {
    if (!open) return;
    function dismiss(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setOpen(false);
        toggle.current?.focus();
      }
    }
    function outside(event: PointerEvent) {
      if (!header.current?.contains(event.target as Node)) setOpen(false);
    }
    document.addEventListener("keydown", dismiss);
    document.addEventListener("pointerdown", outside);
    return () => {
      document.removeEventListener("keydown", dismiss);
      document.removeEventListener("pointerdown", outside);
    };
  }, [open]);
  function changeLanguage(next: string) {
    const path = pathname.replace(/^\/(es|ca|en)(?=\/|$)/, `/${next}`);
    // Native navigation also refreshes <html lang> and keeps the current section.
    window.dispatchEvent(new Event("site-navigation-start"));
    window.location.assign(
      path + window.location.search + window.location.hash,
    );
  }
  return (
    <header className="header" ref={header}>
      <Link
        className="brand"
        href={`/${locale}`}
        aria-label={`Lidia Villanueva Bolívar · ${labels.home}`}
      >
        <span className="brand-icon" aria-hidden="true">
          lv.
        </span>
        <span>
          Lidia Villanueva Bolívar<small>{labels.tag}</small>
        </span>
      </Link>
      <div className="header-controls">
        <LanguagePicker
          locale={locale}
          label={labels.language}
          onChange={changeLanguage}
          onOpen={() => setOpen(false)}
        />
        <button
          ref={toggle}
          className="menu-toggle"
          onClick={() => setOpen(!open)}
          aria-expanded={open}
          aria-controls="navigation"
          aria-label={open ? labels.close : labels.open}
        >
          <span>{labels.menu}</span>
          <span aria-hidden="true">{open ? "×" : "☰"}</span>
        </button>
      </div>
      <nav
        id="navigation"
        className={open ? "nav open" : "nav"}
        aria-label={labels.nav}
      >
        <Link onClick={() => setOpen(false)} href={`/${locale}#sobre-mi`}>
          {labels.about}
        </Link>
        <Link onClick={() => setOpen(false)} href={`/${locale}#clases`}>
          {labels.classes}
        </Link>
        <Link onClick={() => setOpen(false)} href={`/${locale}#filosofia`}>
          {labels.philosophy}
        </Link>
        <Link
          onClick={() => setOpen(false)}
          className="button small"
          href={`/${locale}#contacto`}
        >
          {labels.start}
          <span aria-hidden="true">↗</span>
        </Link>
      </nav>
    </header>
  );
}
