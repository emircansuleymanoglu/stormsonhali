import Image from "next/image";
import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";
import { navItems, services, site } from "@/lib/site";

export function Footer() {
  return (
    <footer className="border-t border-line bg-[#111827] text-white">
      <div className="container-shell grid gap-10 py-14 lg:grid-cols-[1.3fr_0.8fr_0.8fr_1fr]">
        <div>
          <div className="inline-flex rounded-lg bg-white p-3">
            <Image
              src="/storm-logo-wordmark.png"
              alt="Storm Logistics logo"
              width={372}
              height={120}
              className="h-[92px] w-auto max-w-[280px] object-contain"
            />
          </div>
          <p className="mt-5 max-w-sm leading-7 text-white/70">
            Premium logistieke partner voor Nederlandse en Benelux supply
            chains die behoefte hebben aan strakke planning, duidelijke
            communicatie en betrouwbare levering.
          </p>
        </div>

        <div>
          <p className="mb-4 text-sm font-black uppercase tracking-wider">
            Bedrijf
          </p>
          <div className="grid gap-3">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm text-white/70 transition hover:text-white"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>

        <div>
          <p className="mb-4 text-sm font-black uppercase tracking-wider">
            Diensten
          </p>
          <div className="grid gap-3">
            {services.map((service) => (
              <Link
                key={service.slug}
                href={`/services/${service.slug}`}
                className="text-sm text-white/70 transition hover:text-white"
              >
                {service.title}
              </Link>
            ))}
          </div>
        </div>

        <div>
          <p className="mb-4 text-sm font-black uppercase tracking-wider">
            Contact
          </p>
          <div className="grid gap-4 text-sm text-white/70">
            <a className="flex gap-3 hover:text-white" href={`tel:${site.phone}`}>
              <Phone size={18} className="shrink-0 text-brand" />
              {site.phone}
            </a>
            <a
              className="flex gap-3 hover:text-white"
              href={`mailto:${site.email}`}
            >
              <Mail size={18} className="shrink-0 text-brand" />
              {site.email}
            </a>
            <p className="flex gap-3">
              <MapPin size={18} className="shrink-0 text-brand" />
              {site.address}
            </p>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10 py-5">
        <div className="container-shell flex flex-col gap-3 text-sm text-white/55 sm:flex-row sm:items-center sm:justify-between">
          <p>&copy; 2026 {site.name}. Alle rechten voorbehouden.</p>
          <p>Transport, opslag en distributie met heldere uitvoering.</p>
        </div>
      </div>
    </footer>
  );
}
