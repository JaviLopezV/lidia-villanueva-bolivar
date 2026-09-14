export const siteConfig = {
 name: "Lidia Villanueva Bolívar", description: "Pilates con calma. Movimiento con sentido.",
 email: process.env.NEXT_PUBLIC_CONTACT_EMAIL ?? "", phone: "", address: "",
 siteUrl: process.env.NEXT_PUBLIC_SITE_URL ?? "",
} as const;
