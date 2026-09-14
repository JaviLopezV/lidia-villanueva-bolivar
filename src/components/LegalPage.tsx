import { translator, type Language } from "@/i18n/translate";
import Link from "next/link";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { legalConfig, legalIncomplete } from "@/config/legal";
export function LegalIdentity({ locale }: { locale: Language }) {
  const t = translator(locale);
  return (
    <dl>
      <dt>{t("Titular de la web y responsable del tratamiento")}</dt>
      <dd>{legalConfig.owner}</dd>
      <dt>{t("NIF / CIF")}</dt>
      <dd>{t(legalConfig.taxId)}</dd>
      <dt>{t("Domicilio profesional")}</dt>
      <dd>{t(legalConfig.address)}</dd>
      <dt>{t("Correo de contacto y ejercicio de derechos")}</dt>
      <dd>{t(legalConfig.email)}</dd>
    </dl>
  );
}
export function LegalPage({
  title,
  children,
  locale,
}: {
  title: string;
  children: React.ReactNode;
  locale: Language;
}) {
  const t = translator(locale);
  return (
    <>
      <Header locale={locale} />
      <main className="legal-page wrap">
        <Link className="legal-back" href={`/${locale}`}>
          {t("← Volver a la presentación")}
        </Link>
        <p className="eyebrow" style={{ marginTop: 30 }}>
          {t("INFORMACIÓN LEGAL · ACTUALIZADA EL 14 DE SEPTIEMBRE DE 2026")}
        </p>
        <h1>{t(title)}</h1>
        {legalIncomplete && (
          <aside className="legal-notice">
            <strong>{t("Documento pendiente de completar")}</strong>
            <p>
              {t(
                "Los datos marcados como ejemplo son ficticios y faltan datos de los proveedores. Este texto describe la versión actual en preparación y deberá completarse y revisarse antes de la publicación o la activación del contacto.",
              )}
            </p>
          </aside>
        )}
        {children}
      </main>
      <Footer locale={locale} />
    </>
  );
}
