import { NextResponse, type NextRequest } from "next/server";
import { locales } from "@/config/navigation";

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const hasLocale = locales.some(
    (locale) => pathname === `/${locale}` || pathname.startsWith(`/${locale}/`),
  );

  if (hasLocale) {
    const requestHeaders = new Headers(request.headers);
    requestHeaders.set("x-site-locale", pathname.split("/")[1]);
    return NextResponse.next({ request: { headers: requestHeaders } });
  }
  return NextResponse.redirect(new URL(`/es${pathname}`, request.url));
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico|.*\\..*).*)"],
};
