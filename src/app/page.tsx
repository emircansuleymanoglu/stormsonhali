import Image from "next/image";
import {
  ArrowRight,
  BadgeCheck,
  CheckCircle2,
  Clock3,
  PackageCheck,
  Route,
  ShieldCheck,
} from "lucide-react";
import { ButtonLink } from "@/components/button-link";
import { ContactForm } from "@/components/contact-form";
import { CtaBand } from "@/components/cta-band";
import { MapPanel } from "@/components/map-panel";
import { SectionHeader } from "@/components/section-header";
import { ServiceCard } from "@/components/service-card";
import { StatsBand } from "@/components/stats-band";
import { services, site, trustLogos, whyUs } from "@/lib/site";

const heroBadges = [
  "Dedicated transport",
  "Benelux planning",
  "Warehousing support",
];

const processSteps = [
  {
    title: "Aanvraag",
    text: "We verzamelen laadadres, aflevermoment, volume en handling-eisen.",
    icon: PackageCheck,
  },
  {
    title: "Planning",
    text: "Uw zending krijgt een route, capaciteit en vaste operationele opvolging.",
    icon: Route,
  },
  {
    title: "Uitvoering",
    text: "Chauffeurs, opslag en planning houden elke afspraak zichtbaar in beweging.",
    icon: Clock3,
  },
  {
    title: "Terugkoppeling",
    text: "Na levering ontvangt uw team heldere status en waar nodig bewijs van aflevering.",
    icon: BadgeCheck,
  },
];

const coverageItems = [
  { value: "NL", label: "dagelijkse routes" },
  { value: "BE", label: "vaste distributie" },
  { value: "DE", label: "grensoverschrijdend" },
  { value: "EU", label: "partnernetwerk" },
];

const industries = [
  "Retail",
  "E-commerce",
  "Food-grade",
  "Industrie",
  "Bouw",
  "Groothandel",
];

const faqs = [
  {
    question: "Hoe snel krijgen we reactie op een offerte?",
    answer:
      "Bij complete transportinformatie kan de planning meestal dezelfde werkdag met de volgende stap reageren.",
  },
  {
    question: "Kunnen transport en opslag gecombineerd worden?",
    answer:
      "Ja, zendingen kunnen worden gekoppeld aan tijdelijke opslag, picking, cross-dock of uitlevering op afroep.",
  },
  {
    question: "Werken jullie met vaste routes?",
    answer:
      "Voor terugkerende stromen richten we vaste afspraken in voor capaciteit, laadvensters en communicatie.",
  },
];

export default function Home() {
  return (
    <>
      <section className="relative overflow-hidden bg-[#0d1524] text-white">
        <div className="absolute inset-0">
          <Image
            src="/volvo.png"
            alt="Storm Logistics vrachtwagen op de weg"
            fill
            priority
            sizes="100vw"
            className="object-cover object-[62%_center]"
          />
          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(8,14,25,0.93)_0%,rgba(8,14,25,0.76)_42%,rgba(8,14,25,0.28)_100%)]" />
          <div className="absolute inset-x-0 bottom-0 h-36 bg-gradient-to-t from-[#0d1524] to-transparent" />
        </div>

        <div className="container-shell relative grid min-h-[calc(100vh-96px)] content-center py-20 sm:py-24">
          <div className="max-w-3xl animate-rise">
            <p className="mb-5 text-sm font-black uppercase text-white/70">
              Logistieke partner in Nederland
            </p>
            <h1 className="text-5xl font-black tracking-tight text-white sm:text-6xl lg:text-7xl">
              Essentiele supply chains, met precisie in beweging.
            </h1>
            <p className="mt-6 max-w-2xl text-xl leading-9 text-white/76">
              Transport, opslag en distributie voor bedrijven die snelheid,
              controle en een logistiek team nodig hebben dat elke afspraak
              zichtbaar houdt.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <ButtonLink href="/quote">Offerte aanvragen</ButtonLink>
              <ButtonLink href="/services" variant="light">
                Bekijk diensten
                <ArrowRight size={18} />
              </ButtonLink>
            </div>
            <div className="mt-10 grid max-w-2xl gap-3 sm:grid-cols-3">
              {heroBadges.map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-2 rounded-lg border border-white/15 bg-white/10 px-4 py-3 text-sm font-bold backdrop-blur"
                >
                  <CheckCircle2 size={18} className="text-[#79d0ff]" />
                  {item}
                </div>
              ))}
            </div>
            <div className="mt-8 max-w-2xl rounded-lg border border-white/15 bg-[#101828]/72 p-5 shadow-2xl shadow-black/20 backdrop-blur">
              <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <p className="text-xs font-black uppercase text-white/50">
                    Operation control
                  </p>
                  <p className="mt-1 text-sm font-bold text-white/82">
                    Route Schiedam - Benelux distributie
                  </p>
                </div>
                <div className="flex items-center gap-3 rounded-md border border-white/10 bg-white/8 px-3 py-2">
                  <span className="status-pulse size-2.5 rounded-full bg-[#79d0ff]" />
                  <span className="text-xs font-black uppercase text-white/68">
                    live planning
                  </span>
                </div>
              </div>
              <div className="route-telemetry mt-5">
                <span className="route-dot route-dot-start" />
                <span className="route-dot route-dot-mid" />
                <span className="route-dot route-dot-end" />
                <span className="route-sweep" />
              </div>
              <div className="mt-5 grid gap-3 sm:grid-cols-3">
                {[
                  ["ETA", "14:40"],
                  ["OTD", "98.7%"],
                  ["Status", "Onderweg"],
                ].map(([label, value]) => (
                  <div
                    key={label}
                    className="rounded-md border border-white/10 bg-white/7 px-4 py-3"
                  >
                    <p className="text-xs font-black uppercase text-white/45">
                      {label}
                    </p>
                    <p className="mt-1 text-lg font-black text-white">
                      {value}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <StatsBand />

      <section className="py-20 sm:py-28 reveal">
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

      <section className="bg-surface py-20 sm:py-28 reveal">
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
                <article
                  key={item.title}
                  className="rounded-lg border border-line bg-white p-6 transition hover:-translate-y-1 hover:border-brand hover:shadow-xl hover:shadow-blue-950/10"
                >
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

      <section className="py-20 sm:py-28 reveal">
        <div className="container-shell">
          <SectionHeader
            align="center"
            eyebrow="Werkwijze"
            title="Van aanvraag tot aflevering zonder ruis."
            text="Een rustig proces aan de voorkant, met actieve opvolging in de operatie."
          />
          <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {processSteps.map((step, index) => {
              const Icon = step.icon;
              return (
                <article
                  key={step.title}
                  className="relative rounded-lg border border-line bg-white p-6 transition hover:-translate-y-1 hover:shadow-xl hover:shadow-blue-950/10"
                >
                  <div className="mb-6 flex items-center justify-between">
                    <span className="grid size-12 place-items-center rounded-lg bg-[#eef7ff] text-brand">
                      <Icon size={24} />
                    </span>
                    <span className="text-sm font-black text-muted">
                      0{index + 1}
                    </span>
                  </div>
                  <h3 className="text-xl font-black">{step.title}</h3>
                  <p className="mt-3 leading-7 text-muted">{step.text}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-[#101828] py-20 text-white sm:py-28 reveal">
        <div className="container-shell grid gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <div>
            <p className="text-sm font-black uppercase text-white/55">
              Dekking
            </p>
            <h2 className="mt-3 text-3xl font-black tracking-tight sm:text-5xl">
              Benelux routes met directe operationele controle.
            </h2>
            <p className="mt-5 text-lg leading-8 text-white/70">
              Voor dagelijkse distributie, vaste aflevervensters en goederenstromen
              die betrouwbaar door moeten lopen.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {coverageItems.map((item) => (
              <div
                key={item.value}
                className="rounded-lg border border-white/10 bg-white/[0.06] p-6"
              >
                <p className="text-4xl font-black text-[#79d0ff]">
                  {item.value}
                </p>
                <p className="mt-2 text-sm font-bold uppercase text-white/62">
                  {item.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 sm:py-28 reveal">
        <div className="container-shell grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
          <SectionHeader
            eyebrow="Sectoren"
            title="Ingericht voor stromen waar timing en controle tellen."
            text="Van retailpallets tot e-commerce voorraad: de operatie blijft overzichtelijk, meetbaar en schaalbaar."
          />
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {industries.map((industry) => (
              <div
                key={industry}
                className="flex min-h-20 items-center gap-3 rounded-lg border border-line bg-white px-5 font-black transition hover:border-brand hover:text-brand"
              >
                <ShieldCheck size={20} className="text-brand" />
                {industry}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-surface py-20 sm:py-28 reveal">
        <div className="container-shell grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <SectionHeader
            eyebrow="Veelgestelde vragen"
            title="Snel duidelijkheid voor planning en inkoop."
            text="Korte antwoorden op vragen die vaak spelen voordat een zending wordt ingepland."
          />
          <div className="grid gap-4">
            {faqs.map((faq) => (
              <details
                key={faq.question}
                className="group rounded-lg border border-line bg-white p-6"
              >
                <summary className="flex cursor-pointer list-none items-center justify-between gap-5 text-lg font-black">
                  {faq.question}
                  <ArrowRight
                    size={20}
                    className="shrink-0 text-brand transition group-open:rotate-90"
                  />
                </summary>
                <p className="mt-4 leading-7 text-muted">{faq.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <CtaBand />

      <section className="py-20 sm:py-28 reveal">
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
