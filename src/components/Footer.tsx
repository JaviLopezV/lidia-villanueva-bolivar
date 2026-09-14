import Link from "next/link";
export function Footer() {
  return <footer className="footer">
    <Link className="footer-brand" href="/es">Lidia Villanueva Bolívar<span>Pilates con calma. Movimiento con sentido.</span></Link>
    <p>© {new Date().getFullYear()} · Javier López Villanueva</p>
    <Link href="/es#inicio">Volver al inicio ↑</Link>
    <nav className="legal-links" aria-label="Información legal">
      <Link href="/es/legal-notice">Aviso legal</Link>
      <Link href="/es/privacy-policy">Privacidad</Link>
      <Link href="/es/cookies">Cookies</Link>
      <Link href="/es/terms">Condiciones de uso</Link>
    </nav>
  </footer>;
}
