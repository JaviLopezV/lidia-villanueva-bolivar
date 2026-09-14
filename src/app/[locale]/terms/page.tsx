import { translator, pageMetadata, type Language } from "@/i18n/translate";
import Link from "next/link";
import { LegalPage } from "@/components/LegalPage";
export default async function Page({
  params,
}: {
  params: Promise<{ locale: Language }>;
}) {
  const { locale } = await params;
  const t = translator(locale);
  return (
    <LegalPage locale={locale} title="Condiciones de uso">
      <h2>{t("1. Alcance")}</h2>
      <p>
        {t(
          "Estas condiciones describen el uso de la web informativa de Lidia Villanueva Bolívar. La mera navegación no implica contratar clases, aceptar comunicaciones comerciales ni consentir tratamientos opcionales.",
        )}
      </p>
      <h2>{t("2. Uso adecuado")}</h2>
      <p>
        {t(
          "Utiliza la web de forma lícita, respetando los derechos de otras personas. No introduzcas código dañino, intentes acceder a sistemas sin autorización ni realices acciones que impidan su funcionamiento.",
        )}
      </p>
      <h2>{t("3. Clases y consultas")}</h2>
      <p>
        {t(
          "Las modalidades descritas son informativas. Una consulta no confirma una plaza. Antes de contratar se comunicarán las condiciones concretas del servicio, identidad del prestador, precio total, forma de pago, horarios, cancelaciones y los derechos que correspondan según la modalidad de contratación. Esta web no gestiona ventas, pagos ni reservas.",
        )}
      </p>
      <h2>{t("4. Movimiento y bienestar")}</h2>
      <p>
        {t(
          "El contenido es una presentación general del Pilates, no una valoración individual ni un servicio sanitario. Las actividades concretas deberán adaptarse a cada persona; esta web no garantiza resultados específicos ni sustituye una valoración profesional cuando sea necesaria.",
        )}
      </p>
      <h2>{t("5. Contenidos y derechos")}</h2>
      <p>
        {t(
          "La ilustración es un recurso artístico y no un retrato real. La utilización de contenidos está sujeta a los derechos y licencias indicados en el ",
        )}
        <Link href={`/${locale}/legal-notice`}>{t("aviso legal")}</Link>.
      </p>
      <h2>{t("6. Privacidad y almacenamiento")}</h2>
      <p>
        {t("Consulta la ")}
        <Link href={`/${locale}/privacy-policy`}>
          {t("política de privacidad")}
        </Link>
        {t(" y la ")}
        <Link href={`/${locale}/cookies`}>{t("política de cookies")}</Link>
        {t(
          ". Ninguna cláusula de estas condiciones limita los derechos irrenunciables reconocidos por la ley.",
        )}
      </p>
      <h2>{t("7. Actualizaciones y consultas")}</h2>
      <p>
        {t(
          "Las condiciones podrán actualizarse para reflejar cambios de la web o de la normativa. Las consultas se dirigirán al contacto del titular que figura en el aviso legal. La ley aplicable y la competencia judicial se determinarán conforme a las reglas obligatorias que correspondan.",
        )}
      </p>
    </LegalPage>
  );
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: Language }>;
}) {
  const { locale } = await params;
  return pageMetadata(locale, "Condiciones de uso", "/terms");
}
