"use client";
import { useEffect, useId, useRef, useState } from "react";
import type { Language } from "@/i18n/translate";
const options: { code: Language; name: string }[] = [
  { code: "es", name: "Español" },
  { code: "ca", name: "Català" },
  { code: "en", name: "English" },
];

export function LanguagePicker({
  locale,
  label,
  onChange,
  onOpen,
}: {
  locale: Language;
  label: string;
  onChange: (language: Language) => void;
  onOpen: () => void;
}) {
  const [open, setOpen] = useState(false);
  const root = useRef<HTMLDivElement>(null);
  const trigger = useRef<HTMLButtonElement>(null);
  const id = useId();
  useEffect(() => {
    if (!open) return;
    function outside(event: PointerEvent) {
      if (!root.current?.contains(event.target as Node)) setOpen(false);
    }
    document.addEventListener("pointerdown", outside);
    return () => document.removeEventListener("pointerdown", outside);
  }, [open]);
  return (
    <div
      className="language-picker"
      ref={root}
      onBlur={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget)) setOpen(false);
      }}
      onKeyDown={(event) => {
        if (event.key === "Escape" && open) {
          event.preventDefault();
          event.stopPropagation();
          setOpen(false);
          trigger.current?.focus();
        }
      }}
    >
      <button
        className="language-trigger"
        ref={trigger}
        type="button"
        aria-label={`${label}: ${options.find((option) => option.code === locale)?.name}`}
        aria-expanded={open}
        aria-controls={id}
        onClick={() => {
          if (!open) onOpen();
          setOpen(!open);
        }}
      >
        <span>{locale.toUpperCase()}</span>
        <svg
          width="12"
          height="12"
          viewBox="0 0 16 16"
          fill="none"
          aria-hidden="true"
        >
          <path
            d="m4 6 4 4 4-4"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>
      {open && (
        <div
          className="language-options"
          id={id}
          role="group"
          aria-label={label}
        >
          {options.map((option) => (
            <button
              type="button"
              key={option.code}
              lang={option.code}
              aria-pressed={locale === option.code}
              onClick={() => {
                setOpen(false);
                if (option.code !== locale) onChange(option.code);
                else trigger.current?.focus();
              }}
            >
              <span className="language-code">{option.code.toUpperCase()}</span>
              <span>{option.name}</span>
              <span className="language-check" aria-hidden="true">
                {locale === option.code ? "✓" : ""}
              </span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
