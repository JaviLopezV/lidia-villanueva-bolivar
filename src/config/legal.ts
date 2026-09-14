// Public identification only. Never put private credentials here.
export const legalConfig = {
  owner: process.env.NEXT_PUBLIC_LEGAL_OWNER || "Lidia Villanueva Bolívar",
  taxId:
    process.env.NEXT_PUBLIC_LEGAL_TAX_ID ||
    "00000000X (ejemplo ficticio; sustituir)",
  address:
    process.env.NEXT_PUBLIC_LEGAL_ADDRESS ||
    "Calle Ejemplo, 1 · 00000 Ciudad, España (ejemplo ficticio; sustituir)",
  email:
    process.env.NEXT_PUBLIC_CONTACT_EMAIL ||
    "contacto@example.com (ejemplo ficticio; no operativo)",
  hosting:
    process.env.NEXT_PUBLIC_LEGAL_HOSTING ||
    "Pendiente de definir antes de publicar",
  emailProvider:
    process.env.NEXT_PUBLIC_LEGAL_EMAIL_PROVIDER ||
    "Pendiente de definir antes de activar el contacto",
};
export const legalIncomplete = Object.values(legalConfig).some(
  (value) =>
    value.startsWith("Pendiente") || value.includes("ejemplo ficticio"),
);
