import { translator, pageMetadata, type Language } from "@/i18n/translate";
import { LegalPage, LegalIdentity } from "@/components/LegalPage";
export default async function Page({
  params,
}: {
  params: Promise<{ locale: Language }>;
}) {
  const { locale } = await params;
  const t = translator(locale);
  return (
    <LegalPage locale={locale} title="Aviso legal">
      <h2>{t("1. Identificación del titular")}</h2>
      <LegalIdentity locale={locale} />
      <p>
        {t(
          "La web presenta la actividad de Pilates de Lidia Villanueva Bolívar. La persona indicada en el copyright no se identifica automáticamente como titular de la actividad ni como responsable de los datos.",
        )}
      </p>
      <h2>{t("2. Objeto de la web")}</h2>
      <p>
        {t(
          "Este sitio ofrece información sobre la trayectoria, el enfoque de enseñanza y las propuestas de clases. No permite contratar, pagar ni confirmar reservas en línea. Los horarios, precios y disponibilidad se facilitarán por el canal de contacto cuando esté habilitado.",
        )}
      </p>
      <h2>{t("3. Propiedad intelectual")}</h2>
      <p>
        {t(
          "© Javier López Villanueva, respecto de los elementos propios de la web sobre los que ostente derechos. Las bibliotecas, recursos y demás elementos de terceros mantienen sus respectivas licencias. La mención de copyright no atribuye derechos sobre materiales ajenos. Salvo autorización o excepción legal, no se permite reproducir, distribuir o explotar comercialmente los contenidos protegidos.",
        )}
      </p>
      <h2>{t("4. Información y disponibilidad")}</h2>
      <p>
        {t(
          "Se procurará mantener la información actualizada y corregir errores. Podrán realizarse tareas de mantenimiento. Estas previsiones no excluyen las responsabilidades que resulten obligatorias por ley ni los derechos de las personas consumidoras.",
        )}
      </p>
      <h2>{t("5. Enlaces externos")}</h2>
      <p>
        {t(
          "Los enlaces informativos a organismos y recursos externos conducen a sitios con sus propias condiciones y políticas. Su inclusión no supone una relación comercial ni una aprobación de todos sus contenidos.",
        )}
      </p>
      <h2>{t("6. Normativa y consultas")}</h2>
      <p>
        {t(
          "Este aviso se redacta para una actividad establecida en España, bajo la normativa española y europea aplicable. Cualquier controversia corresponderá a los órganos competentes conforme a la ley, respetando las reglas de protección de consumidores.",
        )}
      </p>
      <p>
        {t("Referencia: ")}
        <a href="https://www.boe.es/buscar/act.php?id=BOE-A-2002-13758">
          {t("Ley 34/2002 de servicios de la sociedad de la información")}
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
  return pageMetadata(locale, "Aviso legal", "/legal-notice");
}
