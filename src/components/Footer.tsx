import { translator, type Language } from "@/i18n/translate";
import Link from "next/link";
export function Footer({ locale }: { locale: Language }) {
  const t = translator(locale);
  //
  return (
    <footer className="footer">
      <Link className="footer-brand" href={`/${locale}`}>
        {t("Lidia Villanueva Bolívar")}
        <span>{t("Pilates con calma. Movimiento con sentido.")}</span>
      </Link>

      <Link href={`/${locale}#inicio`}>{t("Volver al inicio ↑")}</Link>
      <nav className="legal-links" aria-label={t("Información legal")}>
        <Link href={`/${locale}/legal-notice`}>{t("Aviso legal")}</Link>
        <Link href={`/${locale}/privacy-policy`}>{t("Privacidad")}</Link>
        <Link href={`/${locale}/cookies`}>{t("Cookies")}</Link>
        <Link href={`/${locale}/terms`}>{t("Condiciones de uso")}</Link>
      </nav>
      <p>
        © {new Date().getFullYear()}
        {t(" · Javier López Villanueva")}
      </p>
    </footer>
  );
}
