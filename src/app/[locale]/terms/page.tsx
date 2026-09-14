import Link from "next/link";
import { LegalPage } from "@/components/LegalPage";
export const metadata = {title: "Condiciones de uso | Lidia Villanueva Bolívar"};
export default function Page() { return <LegalPage title="Condiciones de uso">
<h2>1. Alcance</h2><p>Estas condiciones describen el uso de la web informativa de Lidia Villanueva Bolívar. La mera navegación no implica contratar clases, aceptar comunicaciones comerciales ni consentir tratamientos opcionales.</p>
<h2>2. Uso adecuado</h2><p>Utiliza la web de forma lícita, respetando los derechos de otras personas. No introduzcas código dañino, intentes acceder a sistemas sin autorización ni realices acciones que impidan su funcionamiento.</p>
<h2>3. Clases y consultas</h2><p>Las modalidades descritas son informativas. Una consulta no confirma una plaza. Antes de contratar se comunicarán las condiciones concretas del servicio, identidad del prestador, precio total, forma de pago, horarios, cancelaciones y los derechos que correspondan según la modalidad de contratación. Esta web no gestiona ventas, pagos ni reservas.</p>
<h2>4. Movimiento y bienestar</h2><p>El contenido es una presentación general del Pilates, no una valoración individual ni un servicio sanitario. Las actividades concretas deberán adaptarse a cada persona; esta web no garantiza resultados específicos ni sustituye una valoración profesional cuando sea necesaria.</p>
<h2>5. Contenidos y derechos</h2><p>La ilustración es un recurso artístico y no un retrato real. La utilización de contenidos está sujeta a los derechos y licencias indicados en el <Link href="/es/legal-notice">aviso legal</Link>.</p>
<h2>6. Privacidad y almacenamiento</h2><p>Consulta la <Link href="/es/privacy-policy">política de privacidad</Link> y la <Link href="/es/cookies">política de cookies</Link>. Ninguna cláusula de estas condiciones limita los derechos irrenunciables reconocidos por la ley.</p>
<h2>7. Actualizaciones y consultas</h2><p>Las condiciones podrán actualizarse para reflejar cambios de la web o de la normativa. Las consultas se dirigirán al contacto del titular que figura en el aviso legal. La ley aplicable y la competencia judicial se determinarán conforme a las reglas obligatorias que correspondan.</p>
</LegalPage>; }
