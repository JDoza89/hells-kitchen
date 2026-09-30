"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { localeLabels, locales, type Locale } from "@/lib/i18n";

type Props = {
  currentLocale: Locale;
};

export function LocaleSwitcher({ currentLocale }: Props) {
  const pathname = usePathname();

  function hrefFor(locale: Locale) {
    const segments = pathname.split("/").filter(Boolean);
    if (segments.length > 0 && locales.includes(segments[0] as Locale)) {
      segments[0] = locale;
    } else {
      segments.unshift(locale);
    }
    return `/${segments.join("/")}`;
  }

  return (
    <nav
      className="flex items-center gap-3 text-sm tracking-wide text-ink-muted"
      aria-label="Language"
    >
      {locales.map((locale) => (
        <Link
          key={locale}
          href={hrefFor(locale)}
          className={
            locale === currentLocale
              ? "border-b border-copper text-ink font-medium"
              : "hover:text-copper transition-colors"
          }
          hrefLang={locale}
        >
          {localeLabels[locale]}
        </Link>
      ))}
    </nav>
  );
}
