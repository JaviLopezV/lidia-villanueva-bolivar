import type { Locale, MessageKey } from "@/i18n/messages";

export interface NavigationItem {
  label: MessageKey;
  path: string;
}

export const locales: readonly Locale[] = ["es", "en", "ca"];

export const localeNames: Record<Locale, string> = {
  es: "Español",
  en: "English",
  ca: "Català",
};

export const navigation: readonly NavigationItem[] = [
  { label: "nav.home", path: "" },
  { label: "nav.services", path: "/services" },
  { label: "nav.about", path: "/about" },
  { label: "nav.contact", path: "/contact" },
];
