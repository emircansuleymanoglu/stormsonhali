import Image from "next/image";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { ButtonLink } from "@/components/button-link";
import { ContactForm } from "@/components/contact-form";
import { MapPanel } from "@/components/map-panel";
import { SectionHeader } from "@/components/section-header";
import { ServiceCard } from "@/components/service-card";
import { StatsBand } from "@/components/stats-band";
import { services, site, trustLogos, whyUs } from "@/lib/site";

export default function Home() {
  return (
    <>
      <section className="relative overflow-hidden bg-surface">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1586528116493-a029325540fa?auto=format&fit=crop&w=2200&q=80"
            alt="Moderne logistieke trucks en opslagactiviteiten"
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-white via-white/92 to-white/34" />
        </div>

        <div className="container-shell relative min-h-[calc(100vh-96px)] py-24 sm:py-28">
          <div className="max-w-3xl">
            <p className="eyebrow mb-5">Logistieke partner in Nederland</p>
            <h1 className="text-5xl font-black tracking-tight text-foreground sm:text-6xl lg:text-7xl">
              Essentiele supply chains, met precisie in beweging.
            </h1>
            <p className="mt-6 max-w-2xl text-xl leading-9 text-muted">
              Transport, opslag en distributie voor bedrijven die snelheid,
              controle en een logistiek team nodig hebben dat elke afspraak
              zichtbaar houdt.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <ButtonLink href="/quote">Offerte aanvragen</ButtonLink>
              <ButtonLink href="/services" variant="secondary">
                Bekijk diensten
              </ButtonLink>
            </div>
            <div className="mt-10 grid max-w-2xl gap-3 sm:grid-cols-3">
              {["Levering op tijdvenster", "Benelux dekking", "Opslag ondersteuning"].map(
                (item) => (
                  <div key={item} className="flex items-center gap-2 text-sm font-bold">
                    <CheckCircle2 size={18} className="text-brand" />
                    {item}
                  </div>
                ),
              )}
            </div>
          </div>
        </div>
      </section>

      <StatsBand />

      <section className="py-20 sm:py-28">
        <div className="container-shell">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
            <SectionHeader
              eyebrow="Kerndiensten"
              title="Een logistieke partner voor transport, opslag en controle."
              text="Heldere werkwijzen voor dagelijkse distributie en veeleisende supply chains."
            />
            <ButtonLink href="/services" variant="secondary" className="lg:mb-2">
              Alle diensten
              <ArrowRight size={18} />
            </ButtonLink>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {services.map((service) => (
              <ServiceCard key={service.slug} service={service} />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-surface py-20 sm:py-28">
        <div className="container-shell grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <SectionHeader
              eyebrow="Waarom wij"
              title="Gedisciplineerde logistiek voor teams die geen verrassingen kunnen gebruiken."
              text="Onze werkwijze is rustig en duidelijk aan de buitenkant, maar actief in de uitvoering: planners, chauffeurs en opslagpartners werken rond uw leveringsafspraak."
            />
            <div className="mt-8 flex flex-wrap gap-3">
              {trustLogos.map((logo) => (
                <span
                  key={logo}
                  className="rounded-lg border border-line bg-white px-4 py-3 text-sm font-black text-muted"
                >
                  {logo}
                </span>
              ))}
            </div>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {whyUs.map((item) => {
              const Icon = item.icon;
              return (
                <article key={item.title} className="rounded-lg bg-white p-6">
                  <div className="mb-5 grid size-12 place-items-center rounded-lg bg-blue-50 text-brand">
                    <Icon size={24} />
                  </div>
                  <h3 className="text-lg font-black">{item.title}</h3>
                  <p className="mt-3 leading-7 text-muted">{item.text}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-20 sm:py-28">
        <div className="container-shell grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <SectionHeader
              eyebrow="Contact"
              title="Laat ons de snelste route naar een strakkere operatie bepalen."
              text={`Bel ${site.phone}, stuur een bericht of deel uw transportprofiel. Onze planning reageert met de volgende stappen.`}
            />
            <div className="mt-8">
              <MapPanel />
            </div>
          </div>
          <div className="rounded-lg border border-line bg-white p-6 premium-shadow sm:p-8">
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  );
}
