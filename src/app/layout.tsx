import type { Metadata, Viewport } from "next";
import "./globals.css";
export const metadata: Metadata = {
 title: "Lidia Villanueva Bolívar · Pilates con calma",
 description: "Pilates con Lidia Villanueva Bolívar. A sus 59 años, más de 15 años de experiencia acompañando un movimiento consciente, cercano y a tu ritmo.",
 icons: { icon: "/brand-mark.svg" }, manifest: "/manifest.json",
};
export const viewport: Viewport = { themeColor: "#f7f7fb" };
export default function RootLayout({children}: Readonly<{children: React.ReactNode}>) {
 return <html lang="es"><body>{children}</body></html>;
}
