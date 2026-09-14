# Lidia Villanueva Bolívar

Web de presentación en español, catalán e inglés, creada a partir de arrow-template-web con Next.js 15, React 19 y TypeScript. Diseño responsive en violeta, lavanda y rosa inspirado en personal-and-pilates e ilustración SVG original de Pilates.

## Desarrollo

```sh
npm install
npm run dev
```

Abrir http://localhost:3000/es. Comprobaciones: `npm run lint`, `npm run typecheck`, `npm run build`.

## Contenido y contacto

La página principal está en `src/app/[locale]/page.tsx`; los estilos en `src/app/globals.css`. El texto de presentación y las propuestas de clases son contenido editorial para revisar con Lidia antes de publicar. La ilustración no representa un retrato real.

Copiar `.env.example` a `.env.local` y configurar `NEXT_PUBLIC_CONTACT_EMAIL` con el correo real para activar el enlace de contacto, que abre el cliente de correo. Sin ese dato se muestra un aviso de contacto próximamente. No se recogen ni envían formularios ni se simulan reservas. Configurar `NEXT_PUBLIC_SITE_URL` cuando exista dominio.

Se conservan las dependencias de la plantilla. Las rutas antiguas redirigen a las secciones equivalentes de la nueva página. Las fuentes son del sistema: no se realizan solicitudes a Google Fonts. Consulta docs/LEGAL.md para los datos pendientes y el alcance de los textos legales.

## Idiomas y diseño móvil

Rutas: `/es`, `/ca`, `/en`, incluidas las cuatro páginas legales. El selector conserva la página, los parámetros y la sección; el idioma se refleja en el HTML servido y en los metadatos. No se almacena la selección en cookies. Traducciones en `src/i18n/ca.json` y `src/i18n/en.json`; etiquetas de navegación en `src/components/Header.tsx`.

Diseño adaptativo con controles táctiles de al menos 44 px, texto móvil ampliado, menú plegable con cierre por Escape y pulsación exterior, contenido de una columna en móvil y tarjetas flexibles. Verificado en navegador a 320, 375, 390, 430, 768, 1024 y 1440 px, además de documentos legales en 320 y 390 px. Comprobadas las 15 rutas principales/legales, el cambio de idioma manteniendo la sección, el idioma HTML y la cobertura de 173 entradas traducidas.
