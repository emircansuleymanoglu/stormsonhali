import { ButtonLink } from "@/components/button-link";

type PageHeroProps = {
  eyebrow: string;
  title: string;
  text: string;
  cta?: string;
  ctaHref?: string;
};

export function PageHero({ eyebrow, title, text, cta, ctaHref }: PageHeroProps) {
  return (
    <section className="border-b border-line bg-surface py-20 sm:py-24">
      <div className="container-shell">
        <p className="eyebrow mb-4">{eyebrow}</p>
        <div className="grid gap-8 lg:grid-cols-[1.1fr_0.7fr] lg:items-end">
          <h1 className="max-w-4xl text-4xl font-black tracking-tight text-foreground sm:text-6xl">
            {title}
          </h1>
          <div>
            <p className="text-lg leading-8 text-muted">{text}</p>
            {cta && ctaHref ? (
              <ButtonLink href={ctaHref} className="mt-7">
                {cta}
              </ButtonLink>
            ) : null}
          </div>
        </div>
      </div>
    </section>
  );
}
