import { ButtonLink } from "@/components/button-link";

export function CtaBand() {
  return (
    <section className="bg-brand py-16 text-white">
      <div className="container-shell grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
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
