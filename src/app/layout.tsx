import { headers } from "next/headers";
import { isLanguage, translator } from "@/i18n/translate";
import type { Metadata, Viewport } from "next";
import "./globals.css";
import "./site-loader.css";
import SiteLoader from "./site-loader";
const baseMetadata: Metadata = {
  title: "Lidia Villanueva Bolívar · Pilates con calma",
  description:
    "Pilates con Lidia Villanueva Bolívar. A sus 59 años, más de 15 años de experiencia acompañando un movimiento consciente, cercano y a tu ritmo.",
  icons: { icon: "/brand-mark.svg" },
  manifest: "/manifest.json",
};
export const viewport: Viewport = { themeColor: "#f7f7fb" };
export default async function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const requestedLocale = (await headers()).get("x-site-locale") ?? "es";
  const locale = isLanguage(requestedLocale) ? requestedLocale : "es";
  return (
    <html lang={locale}>
      <body>
        <SiteLoader />
        {children}
      </body>
    </html>
  );
}

export async function generateMetadata(): Promise<Metadata> {
  const value = (await headers()).get("x-site-locale") ?? "es";
  const t = translator(isLanguage(value) ? value : "es");
  return { ...baseMetadata, description: t(String(baseMetadata.description)) };
}
