import ca from "./ca.json";
import en from "./en.json";
export type Language = "es" | "ca" | "en";
export const languages: Language[] = ["es", "ca", "en"];
export function isLanguage(value: string): value is Language {
  return languages.includes(value as Language);
}
const dictionaries: Record<"ca" | "en", Record<string, string>> = { ca, en };
export function translator(locale: Language) {
  return (text: string): string => {
    if (locale === "es") return text;
    const key = text.trim();
    const translated = dictionaries[locale][key];
    return translated === undefined ? text : text.replace(key, translated);
  };
}
export function localizedPath(locale: Language, path: string) {
  return path.replace(/^\/es(?=\/|#|$)/, `/${locale}`);
}
export function pageMetadata(locale: Language, title: string, path = "") {
  const t = translator(locale);
  return {
    title: `${t(title)} | Lidia Villanueva Bolívar`,
    alternates: {
      languages: { es: `/es${path}`, ca: `/ca${path}`, en: `/en${path}` },
      canonical: `/${locale}${path}`,
    },
  };
}
