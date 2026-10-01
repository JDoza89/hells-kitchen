import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { isValidLocale, type Locale } from "@/lib/i18n";
import { LocaleSwitcher } from "@/components/LocaleSwitcher";
import { StoryblokBridge } from "@/components/StoryblokBridge";

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isValidLocale(locale)) {
    notFound();
  }

  return (
    <html lang={locale}>
      <body className="antialiased min-h-screen">
        <header className="fixed top-0 inset-x-0 z-40 bg-plaster/80 backdrop-blur-md border-b border-ink/5">
          <div className="max-w-7xl mx-auto px-6 md:px-12 py-4 flex justify-between items-center">
            <span className="font-serif text-xl tracking-wide text-ink">Blok Clad</span>
            <LocaleSwitcher currentLocale={locale as Locale} />
          </div>
        </header>
        {children}
        <StoryblokBridge />
      </body>
    </html>
  );
}
