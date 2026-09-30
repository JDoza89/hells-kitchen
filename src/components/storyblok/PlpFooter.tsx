import Link from "next/link";
import type { StoryblokBlok } from "@/lib/storyblok";

type FooterLink = { label?: string; href?: string };

type Blok = StoryblokBlok & {
  copyright?: string;
  links?: FooterLink[];
};

export default function PlpFooter({ blok }: { blok: Blok }) {
  const links = blok.links ?? [];

  return (
    <footer className="px-6 md:px-12 py-12 border-t border-ink/10">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6 text-sm text-ink-muted">
        <p>{blok.copyright}</p>
        <nav className="flex gap-8">
          {links.map((link, i) => (
            <Link
              key={i}
              href={link.href ?? "#"}
              className="hover:text-copper transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </footer>
  );
}
