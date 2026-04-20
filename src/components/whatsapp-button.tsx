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
      <svg
        aria-hidden="true"
        viewBox="0 0 32 32"
        className="size-8"
        fill="currentColor"
      >
        <path d="M16.02 3.2A12.76 12.76 0 0 0 5.08 22.5L3.5 28.8l6.45-1.5A12.77 12.77 0 1 0 16.02 3.2Zm0 2.32a10.45 10.45 0 1 1-5.33 19.43l-.4-.24-3.34.78.82-3.24-.27-.42A10.45 10.45 0 0 1 16.02 5.52Zm-4.4 4.9c-.24 0-.62.09-.95.45-.33.36-1.25 1.22-1.25 2.98s1.28 3.46 1.46 3.7c.18.24 2.47 3.95 6.1 5.38 3.02 1.2 3.64.96 4.3.9.66-.06 2.13-.87 2.43-1.7.3-.84.3-1.55.21-1.7-.09-.15-.33-.24-.69-.42-.36-.18-2.13-1.05-2.46-1.17-.33-.12-.57-.18-.81.18-.24.36-.93 1.17-1.14 1.41-.21.24-.42.27-.78.09-.36-.18-1.52-.56-2.9-1.78-1.07-.95-1.8-2.13-2.01-2.49-.21-.36-.02-.56.16-.74.16-.16.36-.42.54-.63.18-.21.24-.36.36-.6.12-.24.06-.45-.03-.63-.09-.18-.81-1.95-1.11-2.67-.29-.7-.59-.6-.81-.61h-.62Z" />
      </svg>
    </a>
  );
}
