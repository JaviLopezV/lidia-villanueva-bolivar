import { translator, pageMetadata, type Language } from "@/i18n/translate";
import { LegalPage, LegalIdentity } from "@/components/LegalPage";
import { legalConfig } from "@/config/legal";
export default async function Page({
  params,
}: {
  params: Promise<{ locale: Language }>;
}) {
  const { locale } = await params;
  const t = translator(locale);
  return (
    <LegalPage locale={locale} title="Política de privacidad">
      <h2>{t("1. Responsable del tratamiento")}</h2>
      <LegalIdentity locale={locale} />
      <h2>{t("2. Datos y procedencia")}</h2>
      <p>
        {t(
          "La versión actual no dispone de formularios, cuentas, boletines, pagos ni herramientas de analítica o publicidad. La infraestructura que sirve la web puede procesar datos técnicos de conexión, como la dirección IP, la fecha, el recurso solicitado y la información del navegador.",
        )}
      </p>
      <p>
        {t(
          "Cuando esté habilitado el enlace de correo, este abrirá tu aplicación de correo. Solo si decides enviar el mensaje se tratarán tu dirección, tu nombre si lo facilitas y su contenido. No se obtienen datos de otras fuentes.",
        )}
      </p>
      <h2>{t("3. Finalidades y bases jurídicas")}</h2>
      <ul>
        <li>
          {t(
            "Mostrar y proteger la web: interés legítimo en la disponibilidad y seguridad del servicio, con tratamiento limitado a lo necesario.",
          )}
        </li>
        <li>
          {t(
            "Atender solicitudes sobre clases o servicios: aplicación de medidas precontractuales solicitadas por ti, cuando proceda (artículo 6.1.b del RGPD).",
          )}
        </li>
        <li>
          {t(
            "Responder otras consultas: interés legítimo en atender comunicaciones dirigidas voluntariamente al responsable, previa valoración de los derechos de la persona interesada (artículo 6.1.f).",
          )}
        </li>
        <li>
          {t(
            "Atender obligaciones legales o requerimientos válidos: cumplimiento de una obligación legal (artículo 6.1.c).",
          )}
        </li>
      </ul>
      <p>
        {t(
          "No se utilizarán los mensajes para enviar publicidad ni se tomarán decisiones automatizadas o se elaborarán perfiles.",
        )}
      </p>
      <h2>{t("4. Información necesaria y datos de salud")}</h2>
      <p>
        {t(
          "Para responder una consulta se necesita un medio de contacto y el contenido de la solicitud. No envíes diagnósticos, informes médicos ni otros datos de salud por este canal. Una eventual recogida de datos de salud para prestar clases requerirá información específica y una base jurídica adecuada, ajena a esta web de presentación.",
        )}
      </p>
      <h2>{t("5. Conservación")}</h2>
      <p>
        {t(
          "Las consultas se conservarán durante su gestión. Después se suprimirán, salvo que sea necesario conservar determinados datos, debidamente bloqueados cuando corresponda, para cumplir obligaciones legales o atender responsabilidades durante los plazos aplicables. Si se formaliza un servicio, se informará del tratamiento asociado a esa relación.",
        )}
      </p>
      <p>
        {t(
          "Los plazos efectivos de los registros técnicos deberán confirmarse con el proveedor de alojamiento antes de publicar; no se establece aquí un plazo que todavía no se ha verificado.",
        )}
      </p>
      <h2>{t("6. Proveedores, destinatarios y transferencias")}</h2>
      <dl>
        <dt>{t("Proveedor de alojamiento")}</dt>
        <dd>{t(legalConfig.hosting)}</dd>
        <dt>{t("Proveedor de correo")}</dt>
        <dd>{t(legalConfig.emailProvider)}</dd>
      </dl>
      <p>
        {t(
          "Los proveedores que accedan a datos por cuenta del responsable deberán estar sujetos a las garantías y contratos exigibles. No se venderán datos ni se comunicarán a terceros con fines publicitarios. Podrán facilitarse a autoridades cuando exista obligación legal.",
        )}
      </p>
      <p>
        {t(
          "La ubicación de los proveedores y sus posibles transferencias internacionales están pendientes de verificar. Antes de activar estos servicios se documentarán, si existen, el destino y la garantía aplicable, como una decisión de adecuación o cláusulas contractuales tipo, y el modo de obtener una copia.",
        )}
      </p>
      <h2>{t("7. Tus derechos")}</h2>
      <p>
        {t(
          "Puedes solicitar acceso, rectificación, supresión, oposición, limitación del tratamiento y portabilidad cuando proceda mediante el correo del responsable indicado arriba. Si algún tratamiento se basa en consentimiento, podrás retirarlo sin afectar a la licitud del tratamiento previo. Solo se pedirá información adicional para verificar la identidad si existen dudas razonables.",
        )}
      </p>
      <p>
        {t(
          "Las solicitudes se atenderán, por regla general, en un mes; el plazo puede ampliarse otros dos meses por complejidad o número de solicitudes, informándote durante el primer mes. Puedes presentar una reclamación ante la ",
        )}
        <a href="https://www.aepd.es">
          {t("Agencia Española de Protección de Datos")}
        </a>
        .
      </p>
      <h2>{t("8. Cambios")}</h2>
      <p>
        {t(
          "Esta política se revisará cuando cambien los tratamientos o las funcionalidades. Los nuevos usos que lo requieran se informarán antes de comenzar.",
        )}
      </p>
      <p>
        {t("Referencia: ")}
        <a href="https://www.aepd.es/derechos-y-deberes/conoce-tus-derechos/derecho-de-informacion">
          {t("derecho de información de la AEPD")}
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
  return pageMetadata(locale, "Política de privacidad", "/privacy-policy");
}
