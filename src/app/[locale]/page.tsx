import { translator, pageMetadata, type Language } from "@/i18n/translate";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
const classes = [
  {
    n: "01",
    title: "Un espacio para ti",
    tag: "PILATES INDIVIDUAL",
    body: "Atención personalizada para conocer tu punto de partida y explorar el movimiento a tu ritmo. Cada sesión se adapta a ti.",
    icon: "◌",
  },
  {
    n: "02",
    title: "Moverse en compañía",
    tag: "GRUPOS REDUCIDOS",
    body: "La energía de compartir, con el cuidado de sentirte acompañada. Una práctica cercana en la que cada persona tiene su espacio.",
    icon: "❋",
  },
  {
    n: "03",
    title: "Nunca es tarde",
    tag: "PILATES SUAVE",
    body: "Una invitación a empezar, retomar o bajar el ritmo. Movimientos progresivos y conscientes para descubrir nuevas posibilidades.",
    icon: "〰",
  },
];
export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: Language }>;
}) {
  const { locale } = await params;
  const t = translator(locale);
  const email = process.env.NEXT_PUBLIC_CONTACT_EMAIL;
  return (
    <>
      <a className="skip" href="#contenido">
        {t("Saltar al contenido")}
      </a>
      <Header locale={locale} />
      <main id="contenido">
        <section className="hero wrap" id="inicio">
          <div className="hero-copy">
            <p className="eyebrow">
              <span />
              {t(" UN MOMENTO PARA VOLVER A TI")}
            </p>
            <h1>
              {t("Muévete con calma.")}
              <br />
              {t("Vive con ")}
              <em>{t("plenitud.")}</em>
            </h1>
            <p className="intro">
              {t(
                "Pilates para escuchar tu cuerpo, encontrar tu equilibrio y disfrutar del movimiento. A cualquier edad. A tu manera.",
              )}
            </p>
            <a className="button" href="#clases">
              {t("Encuentra tu práctica ")}
              <span>↗</span>
            </a>
            <div className="hero-note">
              <span className="tiny-flower">✳</span>
              <p>
                {t("Más de 15 años acompañando")}
                <br />
                <strong>{t("cada pequeño gran avance.")}</strong>
              </p>
            </div>
          </div>
          <div className="hero-art">
            <div
              className="art-image"
              role="img"
              aria-label={t(
                "Ilustración de una mujer practicando Pilates en un espacio sereno",
              )}
            />
            <span className="art-label">{t("RESPIRA. CONECTA. FLUYE.")}</span>
            <div className="floating-note">
              <span>{t("Un cuerpo, mil posibilidades.")}</span>
              <small>{t("Tu bienestar empieza contigo")}</small>
            </div>
          </div>
          <a href="#sobre-mi" className="scroll-note">
            {t("DESCUBRE MI HISTORIA ")}
            <span>↓</span>
          </a>
        </section>
        <div className="ribbon">
          <span>{t("Movimiento consciente")}</span>
          <i>✳</i>
          <span>{t("Atención cercana")}</span>
          <i>✳</i>
          <span>{t("Respeto por tu ritmo")}</span>
          <i>✳</i>
          <span>{t("Bienestar a cualquier edad")}</span>
        </div>
        <section className="about wrap section" id="sobre-mi">
          <div className="about-art">
            <div className="line-art">{t("lv.")}</div>
            <p>
              {t("La experiencia me ha enseñado")}
              <br />
              {t("a escuchar. Pilates,")}
              <br />
              <em>{t("a seguir descubriendo.")}</em>
            </p>
            <span>{t("LIDIA VILLANUEVA BOLÍVAR")}</span>
          </div>
          <div className="about-copy">
            <p className="eyebrow">{t("ENCANTADA, SOY LIDIA")}</p>
            <h2>
              {t("59 años de vida.")}
              <br />
              {t("Una forma de ")}
              <em>{t("sentirla.")}</em>
            </h2>
            <p>
              {t(
                "Creo en un movimiento que acompaña, que se adapta y que nos ayuda a estar más presentes. A mis 59 años, sigo encontrando en el Pilates una manera de conectar conmigo y disfrutar de lo cotidiano.",
              )}
            </p>
            <p>
              {t(
                "Llevo más de 15 años vinculada al Pilates. Mi manera de enseñar nace de esa experiencia: escuchar primero, cuidar los detalles y respetar el momento de cada persona.",
              )}
            </p>
            <div className="stats">
              <div>
                <strong>15+</strong>
                <span>{t("años de experiencia")}</span>
              </div>
              <div>
                <strong>59</strong>
                <span>{t("años, en movimiento")}</span>
              </div>
              <div>
                <strong>{t("Tu ritmo")}</strong>
                <span>{t("siempre es el punto de partida")}</span>
              </div>
            </div>
          </div>
        </section>
        <section className="classes section" id="clases">
          <div className="wrap">
            <div className="section-heading">
              <div>
                <p className="eyebrow">{t("TU PRÁCTICA, TU ESPACIO")}</p>
                <h2>
                  {t("Hay una forma de Pilates")}
                  <br />
                  <em>{t("para ti.")}</em>
                </h2>
              </div>
              <p>
                {t("No necesitas experiencia previa.")}
                <br />
                {t("Solo ganas de dedicarte un momento.")}
              </p>
            </div>
            <div className="cards">
              {classes.map((c) => (
                <article className="class-card" key={c.n}>
                  <div className="card-top">
                    <span>{c.n}</span>
                    <span className="class-icon" aria-hidden="true">
                      {c.icon}
                    </span>
                  </div>
                  <p className="eyebrow">{t(c.tag)}</p>
                  <h3>{t(c.title)}</h3>
                  <p>{t(c.body)}</p>
                  <a href="#contacto">
                    {t("Hablemos de esta práctica ")}
                    <span>↗</span>
                  </a>
                </article>
              ))}
            </div>
          </div>
        </section>
        <section className="philosophy wrap section" id="filosofia">
          <span className="flower" aria-hidden="true">
            ✳
          </span>
          <p className="eyebrow">{t("MI FORMA DE ENTENDER EL PILATES")}</p>
          <h2>
            {t("No se trata de hacerlo perfecto.")}
            <br />
            {t("Se trata de hacerlo ")}
            <em>{t("tuyo.")}</em>
          </h2>
          <p>
            {t(
              "Respirar antes de empezar. Prestar atención a lo pequeño. Celebrar el proceso.",
            )}
            <br />
            {t(
              "Porque cuidarse también puede ser un momento amable, sencillo y lleno de calma.",
            )}
          </p>
          <div className="values">
            <span>{t("01 / Escuchar")}</span>
            <span>{t("02 / Acompañar")}</span>
            <span>{t("03 / Disfrutar")}</span>
          </div>
        </section>
        <section className="contact wrap" id="contacto">
          <div>
            <p className="eyebrow">{t("EL PRIMER PASO, SIN PRISA")}</p>
            <h2>
              {t("Hagamos espacio")}
              <br />
              {t("para ")}
              <em>{t("tu bienestar.")}</em>
            </h2>
            <p>
              {t("Cuéntame qué tipo de clases buscas y tu disponibilidad.")}
              <br />
              {t("Encontraremos juntas una manera de empezar.")}
            </p>
          </div>
          <div className="contact-action">
            {email ? (
              <>
                <a
                  className="button"
                  href={`mailto:${email}?subject=${encodeURIComponent(t("Me gustaría conocer tus clases"))}`}
                >
                  {t("Hablemos de Pilates ")}
                  <span>↗</span>
                </a>
                <p>{t("Una conversación, sin compromiso.")}</p>
              </>
            ) : (
              <>
                <span className="contact-status">
                  {t("Información de contacto próximamente")}
                </span>
                <p>
                  {t("Este espacio se está preparando.")}
                  <br />
                  {t("Pronto podrás consultar horarios y disponibilidad.")}
                </p>
              </>
            )}
          </div>
        </section>
      </main>
      <Footer locale={locale} />
    </>
  );
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: Language }>;
}) {
  const { locale } = await params;
  return pageMetadata(locale, "Pilates con calma", "");
}
