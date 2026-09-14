import { notFound } from "next/navigation";
import { languages, isLanguage } from "@/i18n/translate";
export function generateStaticParams() {
  return languages.map((locale) => ({ locale }));
}
export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLanguage(locale)) notFound();
  return <>{children}</>;
}
