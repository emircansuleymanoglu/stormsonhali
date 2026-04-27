import type { Metadata } from "next";
import { CheckCircle2 } from "lucide-react";
import { ContactForm } from "@/components/contact-form";
import { PageHero } from "@/components/page-hero";
import { faqItems, proofPoints } from "@/lib/site";

export const metadata: Metadata = {
  title: "Offerte aanvragen",
  description:
    "Vraag een logistieke offerte aan voor wegtransport, opslag, palletdistributie of supply chain ondersteuning.",
};

export default function QuotePage() {
  return (
    <>
      <PageHero
        eyebrow="Offerte aanvragen"
        title="Vertel ons wat er moet bewegen, waarheen en wanneer."
        text="Gebruik het formulier hieronder voor een praktische inschatting. Voeg zoveel mogelijk informatie toe: herkomst, bestemming, timing, ladingtype, volume en handling-eisen."
      />

      <section className="bg-surface py-20 sm:py-28">
        <div className="container-shell grid gap-10 lg:grid-cols-[0.75fr_1.25fr]">
          <aside className="rounded-lg bg-[#111827] p-8 text-white">
            <p className="text-sm font-black uppercase tracking-wider text-white/60">
              Wat helpt voor een snelle offerte
            </p>
            <ul className="mt-7 grid gap-5 text-white/78">
              {[
                "Postcodes voor ophalen en afleveren",
                "Aantal pallets, afmetingen en gewicht",
                "Tijdvensters en leverfrequentie",
                "Opslag, picking of cross-dock behoeften",
                "Speciale lading of compliance-eisen",
              ].map((item) => (
                <li key={item} className="border-b border-white/10 pb-5">
                  {item}
                </li>
              ))}
            </ul>
            <div className="mt-8 grid gap-3 rounded-lg border border-white/10 bg-white/5 p-5 text-sm text-white/78">
              {proofPoints.slice(0, 3).map((point) => (
                <div key={point} className="flex gap-3">
                  <CheckCircle2 size={18} className="mt-0.5 shrink-0 text-white" />
                  <p>{point}</p>
                </div>
              ))}
            </div>
          </aside>
          <div className="rounded-lg border border-line bg-white p-6 premium-shadow sm:p-8">
            <ContactForm mode="quote" />
          </div>
        </div>
      </section>

      <section className="py-20 sm:py-28">
        <div className="container-shell">
          <div className="grid gap-5 md:grid-cols-2">
            {faqItems.slice(0, 2).map((item) => (
              <article key={item.question} className="rounded-lg border border-line bg-white p-7">
                <h2 className="text-xl font-black">{item.question}</h2>
                <p className="mt-4 leading-7 text-muted">{item.answer}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
