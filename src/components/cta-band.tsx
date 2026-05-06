import { ButtonLink } from "@/components/button-link";

export function CtaBand() {
  return (
    <section className="relative overflow-hidden bg-[#0f1a2b] py-16 text-white">
      <div className="absolute inset-0 bg-[linear-gradient(110deg,rgba(40,53,147,0.9),rgba(15,26,43,0.9)_55%,rgba(0,121,107,0.45))]" />
      <div className="container-shell relative grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
        <div>
          <p className="text-sm font-black uppercase tracking-wider text-white/70">
            Klaar voor een strakkere logistieke operatie?
          </p>
          <h2 className="mt-3 max-w-3xl text-3xl font-black tracking-tight sm:text-4xl">
            Deel uw transportprofiel en ontvang een praktisch plan.
          </h2>
        </div>
        <ButtonLink href="/quote" variant="light">
          Offerte aanvragen
        </ButtonLink>
      </div>
    </section>
  );
}
