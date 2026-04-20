import Image from "next/image";
import Link from "next/link";
import type { services } from "@/lib/site";

type Service = (typeof services)[number];

export function ServiceCard({ service }: { service: Service }) {
  const Icon = service.icon;

  return (
    <Link
      href={`/services/${service.slug}`}
      className="group block overflow-hidden rounded-lg border border-line bg-white transition hover:-translate-y-1 hover:border-brand hover:shadow-xl hover:shadow-blue-950/10"
    >
      <div className="relative h-56 overflow-hidden">
        <Image
          src={service.image}
          alt={`${service.title} logistieke dienst`}
          fill
          sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
          className="object-cover transition duration-500 group-hover:scale-105"
        />
      </div>
      <div className="p-6">
        <div className="mb-5 grid size-12 place-items-center rounded-lg bg-blue-50 text-brand">
          <Icon size={24} />
        </div>
        <h3 className="text-xl font-black tracking-tight">{service.title}</h3>
        <p className="mt-3 leading-7 text-muted">{service.summary}</p>
        <p className="mt-5 text-sm font-bold text-brand">Bekijk dienst</p>
      </div>
    </Link>
  );
}
