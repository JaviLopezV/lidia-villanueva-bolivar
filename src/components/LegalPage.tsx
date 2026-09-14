import Link from "next/link";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { legalConfig, legalIncomplete } from "@/config/legal";
export function LegalIdentity() {
  return <dl><dt>Titular de la web y responsable del tratamiento</dt><dd>{legalConfig.owner}</dd><dt>NIF / CIF</dt><dd>{legalConfig.taxId}</dd><dt>Domicilio profesional</dt><dd>{legalConfig.address}</dd><dt>Correo de contacto y ejercicio de derechos</dt><dd>{legalConfig.email}</dd></dl>;
}
export function LegalPage({title,children}: {title:string; children:React.ReactNode}) {
  return <><Header/><main className="legal-page wrap"><Link className="legal-back" href="/es">← Volver a la presentación</Link><p className="eyebrow" style={{marginTop:30}}>INFORMACIÓN LEGAL · ACTUALIZADA EL 14 DE SEPTIEMBRE DE 2026</p><h1>{title}</h1>{legalIncomplete && <aside className="legal-notice"><strong>Documento pendiente de completar</strong><p>Los datos marcados como ejemplo son ficticios y faltan datos de los proveedores. Este texto describe la versión actual en preparación y deberá completarse y revisarse antes de la publicación o la activación del contacto.</p></aside>}{children}</main><Footer/></>;
}
