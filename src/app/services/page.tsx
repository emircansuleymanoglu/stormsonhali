import type { Metadata } from "next";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { ButtonLink } from "@/components/button-link";
import { CtaBand } from "@/components/cta-band";
import { PageHero } from "@/components/page-hero";
import { SectionHeader } from "@/components/section-header";
import { services } from "@/lib/site";

export const metadata: Metadata = {
  title: "Diensten",
  description:
    "Wegtransport, opslag, palletdistributie en supply chain ondersteuning in Nederland en de Benelux.",
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Diensten"
        title="Transport- en opslagdiensten met operationele diepgang."
        text="Kies een losse dienst of combineer transport, opslag en rapportage in een beheerde goederenstroom."
        cta="Offerte aanvragen"
        ctaHref="/quote"
      />

      <section className="py-20 sm:py-28">
        <div className="container-shell grid gap-10">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <article
                key={service.slug}
                className="grid overflow-hidden rounded-lg border border-line bg-white lg:grid-cols-2"
              >
                <div
                  className={`relative min-h-80 ${index % 2 ? "lg:order-2" : ""}`}
                >
                  <Image
                    src={service.image}
                    alt={`${service.title} activiteiten`}
                    fill
                    sizes="(min-width: 1024px) 50vw, 100vw"
                    className="object-cover"
                  />
                </div>
                <div className="p-8 sm:p-12">
                  <div className="mb-6 grid size-14 place-items-center rounded-lg bg-blue-50 text-brand">
                    <Icon size={28} />
                  </div>
                  <h2 className="text-3xl font-black tracking-tight">
                    {service.title}
                  </h2>
                  <p className="mt-5 text-lg leading-8 text-muted">
                    {service.summary}
                  </p>
                  <p className="mt-6 leading-8 text-muted">{service.details}</p>
                  <ButtonLink
                    href={`/services/${service.slug}`}
                    variant="secondary"
                    className="mt-8"
                  >
                    Bekijk dienst
                    <ArrowRight size={18} />
                  </ButtonLink>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      <section className="bg-surface py-20 sm:py-28">
        <div className="container-shell">
          <SectionHeader
            align="center"
            eyebrow="Servicekwaliteit"
            title="Gebouwd voor voorspelbare dagelijkse operatie."
            text="Elke dienst bevat duidelijke planningcommunicatie, transparante overdracht en evaluatie van prestaties."
          />
          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {["Direct contact met planning", "Afleverbewijs workflow", "Vaste KPI-evaluatie"].map(
              (item) => (
                <div key={item} className="rounded-lg bg-white p-7 text-center">
                  <p className="text-lg font-black">{item}</p>
                </div>
              ),
            )}
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
