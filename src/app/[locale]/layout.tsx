import { redirect } from "next/navigation";
export function generateStaticParams() { return [{locale: "es"}]; }
export default async function LocaleLayout({children, params}: {children: React.ReactNode; params: Promise<{locale: string}>}) {
 const {locale} = await params; if(locale !== "es") redirect("/es");
 return <>{children}</>;
}
