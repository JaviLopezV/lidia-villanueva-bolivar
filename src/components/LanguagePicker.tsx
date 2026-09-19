"use client";
import { LanguageSelector } from "@jlopvil/mui-kit";
import type { Language } from "@/i18n/translate";
const options = [
  { value: "es", label: "Español" },
  { value: "ca", label: "Català" },
  { value: "en", label: "English" },
] as const;
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
  return (
    <LanguageSelector
      value={locale}
      label={label}
      options={options}
      onChange={onChange}
      onOpen={onOpen}
    />
  );
}
