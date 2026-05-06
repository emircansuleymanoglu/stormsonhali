import Image from "next/image";
import Link from "next/link";
import { Menu, Phone } from "lucide-react";
import { ButtonLink } from "@/components/button-link";
import { navItems, site } from "@/lib/site";

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-line/80 bg-white/92 shadow-sm shadow-blue-950/5 backdrop-blur-xl">
      <div className="container-shell flex h-20 items-center justify-between gap-6">
        <Link
          href="/"
          className="flex items-center"
          aria-label={site.name}
        >
          <Image
            src="/storm-logo-wordmark.png"
            alt="Storm Logistics logo"
            width={372}
            height={120}
            priority
            className="h-[58px] w-auto max-w-[230px] object-contain sm:h-[64px] sm:max-w-[280px]"
          />
        </Link>

        <nav className="hidden items-center gap-8 lg:flex" aria-label="Main">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="relative text-sm font-bold text-muted transition hover:text-brand after:absolute after:-bottom-2 after:left-0 after:h-0.5 after:w-0 after:bg-brand after:transition-all hover:after:w-full"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <a
            href={`tel:${site.phone.replaceAll(" ", "")}`}
            className="inline-flex min-h-12 items-center gap-2 rounded-lg border border-line px-4 text-sm font-bold text-foreground transition hover:border-brand hover:text-brand"
          >
            <Phone size={17} />
            {site.phone}
          </a>
          <ButtonLink href="/quote">Offerte aanvragen</ButtonLink>
        </div>

        <details className="group relative lg:hidden">
          <summary className="grid size-11 cursor-pointer list-none place-items-center rounded-lg border border-line">
            <Menu size={22} />
          </summary>
          <div className="absolute right-0 mt-3 w-72 rounded-lg border border-line bg-white p-3 premium-shadow">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="block rounded-lg px-4 py-3 text-sm font-bold text-foreground hover:bg-surface"
              >
                {item.label}
              </Link>
            ))}
            <ButtonLink href="/quote" className="mt-2 w-full">
              Offerte aanvragen
            </ButtonLink>
          </div>
        </details>
      </div>
    </header>
  );
}
