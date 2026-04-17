import { MapPin } from "lucide-react";
import { site } from "@/lib/site";

export function MapPanel() {
  const src = `https://www.google.com/maps?q=${encodeURIComponent(site.address)}&output=embed`;

  return (
    <div className="overflow-hidden rounded-lg border border-line bg-white">
      <div className="flex items-center gap-3 border-b border-line p-5">
        <span className="grid size-10 place-items-center rounded-lg bg-blue-50 text-brand">
          <MapPin size={20} />
        </span>
        <div>
          <p className="font-black">Adres</p>
          <p className="text-sm text-muted">{site.address}</p>
        </div>
      </div>
      <iframe
        title="Adres op de kaart"
        src={src}
        loading="lazy"
        className="h-80 w-full border-0"
        referrerPolicy="no-referrer-when-downgrade"
      />
    </div>
  );
}
