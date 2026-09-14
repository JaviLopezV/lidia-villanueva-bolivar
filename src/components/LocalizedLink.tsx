"use client";

import NextLink from "next/link";
import { Link, type LinkProps } from "@jlopvil/mui-kit";
import { useI18n } from "@/i18n/I18nProvider";

interface LocalizedLinkProps extends Omit<LinkProps, "href"> {
  href: string;
}

export function LocalizedLink({ href, ...props }: LocalizedLinkProps) {
  const { locale } = useI18n();
  const localizedHref = href ? `/${locale}${href}` : `/${locale}`;
  return <Link component={NextLink} href={localizedHref} {...props} />;
}
