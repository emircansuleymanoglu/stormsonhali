import { MessageCircle } from "lucide-react";
import { site } from "@/lib/site";

export function WhatsAppButton() {
  return (
    <a
      href={`https://wa.me/${site.whatsapp}`}
      target="_blank"
      rel="noreferrer"
      aria-label="Neem contact op via WhatsApp"
      className="fixed bottom-5 right-5 z-50 grid size-14 place-items-center rounded-lg bg-[#25d366] text-white shadow-2xl shadow-green-900/25 transition hover:-translate-y-1"
    >
      <MessageCircle size={27} />
    </a>
  );
}
