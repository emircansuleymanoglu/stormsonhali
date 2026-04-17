import type { Metadata } from "next";
import Image from "next/image";
import { CtaBand } from "@/components/cta-band";
import { PageHero } from "@/components/page-hero";
import { SectionHeader } from "@/components/section-header";
import { stats } from "@/lib/site";

export const metadata: Metadata = {
  title: "Over ons",
  description:
    "Maak kennis met een logistieke partner in Nederland voor betrouwbaar transport, opslag en supply chain uitvoering.",
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="Over ons"
        title="Een praktisch logistiek team voor moderne Nederlandse supply chains."
        text="Wij combineren route discipline, opslagprocessen en directe communicatie zodat uw goederen zonder ruis blijven bewegen."
        cta="Neem contact op"
        ctaHref="/contact"
      />

      <section className="py-20 sm:py-28">
        <div className="container-shell grid gap-12 lg:grid-cols-[1fr_0.9fr] lg:items-center">
          <div>
            <SectionHeader
              eyebrow="Onze belofte"
              title="Elke levering verdient eigenaarschap."
              text="Vanaf het eerste contact tot de definitieve afleverbevestiging houden wij beslissingen dicht bij de mensen die de goederen verplaatsen. Zo beperken we vertraging, beschermen we servicekwaliteit en geven we klanten duidelijk zicht op de volgende stap."
            />
            <div className="mt-10 grid gap-4 sm:grid-cols-2">
              {stats.map((stat) => (
                <div key={stat.label} className="rounded-lg bg-surface p-6">
                  <p className="text-3xl font-black text-brand">{stat.value}</p>
                  <p className="mt-2 text-sm font-bold text-muted">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="relative min-h-[460px] overflow-hidden rounded-lg">
            <Image
              src="https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&w=1300&q=80"
              alt="Magazijnteam bereidt logistieke orders voor"
              fill
              sizes="(min-width: 1024px) 45vw, 100vw"
              className="object-cover"
            />
          </div>
        </div>
      </section>

      <section className="bg-surface py-20 sm:py-28">
        <div className="container-shell">
          <SectionHeader
            align="center"
            eyebrow="Onze werkwijze"
            title="Duidelijk proces, rustige uitvoering."
            text="Een premium logistieke ervaring ontstaat door eenvoudige afspraken goed uit te voeren."
          />
          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {[
              ["Plannen", "Wij bevestigen scope, timing, handling-eisen en contactpersonen."],
              ["Uitvoeren", "Planning, chauffeurs en opslagteams volgen een gezamenlijk operationeel plan."],
              ["Verbeteren", "Wij bespreken KPI's, knelpunten en terugkerende kansen met uw team."],
            ].map(([title, text], index) => (
              <article key={title} className="rounded-lg bg-white p-7">
                <p className="text-sm font-black text-brand">0{index + 1}</p>
                <h3 className="mt-4 text-2xl font-black">{title}</h3>
                <p className="mt-4 leading-7 text-muted">{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
