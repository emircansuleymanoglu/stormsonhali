import type { Metadata } from "next";
import { ContactForm } from "@/components/contact-form";
import { MapPanel } from "@/components/map-panel";
import { PageHero } from "@/components/page-hero";
import { contactCards } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description: "Neem contact op met Storm Logistics voor transport, opslag en distributie.",
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Spreek met een logistiek team dat snel kan schakelen."
        text="Deel uw planningsvraag, route-uitdaging of opslagbehoefte. Wij zetten het direct bij de juiste persoon neer."
      />

      <section className="py-20 sm:py-28">
        <div className="container-shell grid gap-10 lg:grid-cols-[0.85fr_1.15fr]">
          <div className="grid content-start gap-4">
            {contactCards.map((card) => {
              const Icon = card.icon;
              return (
                <div key={card.label} className="rounded-lg border border-line p-6">
                  <Icon size={25} className="text-brand" />
                  <p className="mt-4 text-sm font-black uppercase tracking-wider text-muted">
                    {card.label}
                  </p>
                  <p className="mt-2 text-lg font-black">{card.value}</p>
                </div>
              );
            })}
          </div>
          <div className="rounded-lg border border-line bg-white p-6 premium-shadow sm:p-8">
            <ContactForm />
          </div>
        </div>
      </section>

      <section className="bg-surface py-20">
        <div className="container-shell">
          <MapPanel />
        </div>
      </section>
    </>
  );
}
