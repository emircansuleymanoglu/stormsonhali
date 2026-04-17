import type { Metadata } from "next";
import { ContactForm } from "@/components/contact-form";
import { PageHero } from "@/components/page-hero";

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
          </aside>
          <div className="rounded-lg border border-line bg-white p-6 premium-shadow sm:p-8">
            <ContactForm mode="quote" />
          </div>
        </div>
      </section>
    </>
  );
}
