import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { services } from "@/lib/site";

type Service = (typeof services)[number];

export function ServiceCard({ service }: { service: Service }) {
  const Icon = service.icon;

  return (
    <Link
      href={`/services/${service.slug}`}
      className="group block overflow-hidden rounded-lg border border-line bg-white transition duration-300 hover:-translate-y-1 hover:border-brand hover:shadow-2xl hover:shadow-blue-950/12"
    >
      <div className="relative h-56 overflow-hidden bg-[#101828]">
        <Image
          src={service.image}
          alt={`${service.title} logistieke dienst`}
          fill
          sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
          className="object-cover transition duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#101828]/40 to-transparent opacity-0 transition group-hover:opacity-100" />
      </div>
      <div className="p-6">
        <div className="mb-5 grid size-12 place-items-center rounded-lg bg-blue-50 text-brand transition group-hover:bg-brand group-hover:text-white">
          <Icon size={24} />
        </div>
        <h3 className="text-xl font-black tracking-tight">{service.title}</h3>
        <p className="mt-3 leading-7 text-muted">{service.summary}</p>
        <p className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-brand">
          Bekijk dienst
          <ArrowRight size={16} className="transition group-hover:translate-x-1" />
        </p>
      </div>
    </Link>
  );
}
