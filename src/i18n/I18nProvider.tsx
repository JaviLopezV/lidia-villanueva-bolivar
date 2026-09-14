"use client";

import { createContext, useContext, useMemo, type ReactNode } from "react";
import type { Locale, MessageKey } from "./messages";

interface I18nContextValue {
  locale: Locale;
  t: (key: MessageKey) => string;
}

const I18nContext = createContext<I18nContextValue | null>(null);

export function I18nProvider({
  children,
  locale,
  messages,
}: {
  children: ReactNode;
  locale: Locale;
  messages: Record<MessageKey, string>;
}) {
  const value = useMemo<I18nContextValue>(
    () => ({ locale, t: (key) => messages[key] }),
    [locale, messages],
  );

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
}

export function useI18n() {
  const context = useContext(I18nContext);
  if (!context) throw new Error("useI18n must be used inside I18nProvider");
  return context;
}
