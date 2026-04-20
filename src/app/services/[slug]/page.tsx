import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { ArrowLeft, CheckCircle2 } from "lucide-react";
import { ButtonLink } from "@/components/button-link";
import { CtaBand } from "@/components/cta-band";
import { services } from "@/lib/site";

type ServicePageProps = {
  params: Promise<{
    slug: string;
  }>;
};

function getService(slug: string) {
  return services.find((service) => service.slug === slug);
}

export function generateStaticParams() {
  return services.map((service) => ({
    slug: service.slug,
  }));
}

export async function generateMetadata({
  params,
}: ServicePageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = getService(slug);

  if (!service) {
    return {
      title: "Dienst niet gevonden",
    };
  }

  return {
    title: service.title,
    description: service.summary,
  };
}

export default async function ServiceDetailPage({ params }: ServicePageProps) {
  const { slug } = await params;
  const service = getService(slug);

  if (!service) {
    notFound();
  }

  const Icon = service.icon;

  return (
    <>
      <section className="border-b border-line bg-surface py-16 sm:py-20">
        <div className="container-shell">
          <ButtonLink href="/services" variant="secondary">
            <ArrowLeft size={18} />
            Alle diensten
          </ButtonLink>
          <div className="mt-10 grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
            <div>
              <div className="mb-6 grid size-14 place-items-center rounded-lg bg-blue-50 text-brand">
                <Icon size={28} />
              </div>
              <p className="eyebrow mb-4">Dienst</p>
              <h1 className="text-4xl font-black tracking-tight text-foreground sm:text-6xl">
                {service.title}
              </h1>
              <p className="mt-6 text-lg leading-8 text-muted">
                {service.intro}
              </p>
            </div>
            <div className="relative min-h-80 overflow-hidden rounded-lg">
              <Image
                src={service.image}
                alt={`${service.title} bij Storm Logistics`}
                fill
                priority
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 sm:py-28">
        <div className="container-shell grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="eyebrow mb-4">Aanpak</p>
            <h2 className="text-3xl font-black tracking-tight sm:text-4xl">
              Praktisch geregeld van aanvraag tot levering.
            </h2>
            <p className="mt-5 text-lg leading-8 text-muted">
              {service.details}
            </p>
            <ButtonLink href="/quote" className="mt-8">
              Offerte aanvragen
            </ButtonLink>
          </div>

          <div className="grid gap-5">
            {service.highlights.map((highlight) => (
              <article
                key={highlight}
                className="rounded-lg border border-line bg-white p-6"
              >
                <CheckCircle2 className="text-brand" size={24} />
                <p className="mt-4 font-bold leading-7">{highlight}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-surface py-20 sm:py-28">
        <div className="container-shell grid gap-10 lg:grid-cols-2">
          <article>
            <p className="eyebrow mb-4">Werkwijze</p>
            <h2 className="text-3xl font-black tracking-tight">
              Zo houden we de operatie voorspelbaar.
            </h2>
            <div className="mt-8 grid gap-4">
              {service.process.map((step, index) => (
                <div key={step} className="flex gap-4 rounded-lg bg-white p-6">
                  <span className="grid size-9 shrink-0 place-items-center rounded-lg bg-brand text-sm font-black text-white">
                    {index + 1}
                  </span>
                  <p className="leading-7 text-muted">{step}</p>
                </div>
              ))}
            </div>
          </article>

          <article>
            <p className="eyebrow mb-4">Geschikt voor</p>
            <h2 className="text-3xl font-black tracking-tight">
              Wanneer deze dienst goed past.
            </h2>
            <div className="mt-8 grid gap-4">
              {service.idealFor.map((item) => (
                <div key={item} className="rounded-lg bg-white p-6">
                  <p className="font-bold leading-7">{item}</p>
                </div>
              ))}
            </div>
          </article>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
