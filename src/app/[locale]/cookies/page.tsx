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
    <LegalPage locale={locale} title="Política de cookies">
      <h2>{t("1. Qué son las cookies")}</h2>
      <p>
        {t(
          "Son pequeños archivos que una web almacena en el navegador. Otras tecnologías, como el almacenamiento local y las cachés, también pueden guardar información en tu dispositivo. Su tratamiento depende de su finalidad, no únicamente de su nombre.",
        )}
      </p>
      <h2>{t("2. Qué utiliza esta web")}</h2>
      <p>
        {t(
          "El código de esta versión no instala cookies propias ni de terceros, no guarda preferencias en localStorage o sessionStorage y no incorpora analítica, píxeles publicitarios, vídeos o mapas de terceros. Las tipografías son del sistema y la ilustración se sirve desde la propia web.",
        )}
      </p>
      <p>
        {t(
          "En producción, la aplicación utiliza un service worker y Cache Storage para conservar recursos de la web y facilitar su carga. Es una caché técnica del mismo origen; no contiene identificadores publicitarios ni se utiliza para seguir tu navegación. Los recursos se renuevan con las versiones de la web y pueden permanecer hasta su actualización, eliminación por el navegador o borrado manual. El navegador también puede mantener su caché HTTP habitual.",
        )}
      </p>
      <h2>{t("3. Consentimiento")}</h2>
      <p>
        {t(
          "Esta configuración no incorpora tecnologías opcionales de seguimiento para las que solicitar consentimiento. Por eso no se muestra un banner de aceptar o rechazar. Antes de incorporar analítica, publicidad u otras tecnologías no exentas, será necesario informar y permitir aceptar, rechazar y modificar la elección, bloqueándolas hasta obtener el consentimiento correspondiente.",
        )}
      </p>
      <p>
        {t(
          "La configuración del alojamiento definitivo deberá verificarse antes de publicar, pues podría añadir cookies no presentes en el código de la aplicación.",
        )}
      </p>
      <h2>{t("4. Cómo borrar el almacenamiento")}</h2>
      <p>
        {t(
          "Puedes eliminar los datos del sitio desde los ajustes de privacidad de tu navegador, buscando el dominio en la sección de cookies y datos de sitios. Esto permite borrar la caché y, según el navegador, el registro de la aplicación sin conexión. Al volver a visitar la web pueden generarse de nuevo los recursos técnicos. El bloqueo de almacenamiento puede afectar a la carga o disponibilidad sin conexión.",
        )}
      </p>
      <h2>{t("5. Más información")}</h2>
      <p>
        {t("Consulta la ")}
        <Link href={`/${locale}/privacy-policy`}>
          {t("política de privacidad")}
        </Link>
        {t(" para conocer al responsable y tus derechos. Referencia: ")}
        <a href="https://www.aepd.es/guias/guia-cookies.pdf">
          {t("Guía sobre el uso de cookies de la AEPD")}
        </a>
        .
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
  return pageMetadata(locale, "Política de cookies", "/cookies");
}
