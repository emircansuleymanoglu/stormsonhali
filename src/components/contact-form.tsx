"use client";

import { useState } from "react";

type FormState = "idle" | "loading" | "success" | "error";

export function ContactForm({ mode = "contact" }: { mode?: "contact" | "quote" }) {
  const [state, setState] = useState<FormState>("idle");

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setState("loading");
    const form = event.currentTarget;
    const data = Object.fromEntries(new FormData(form));

    const response = await fetch("/api/contact.php", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ...data, formType: mode }),
    });

    if (response.ok) {
      form.reset();
      setState("success");
      return;
    }

    setState("error");
  }

  return (
    <form onSubmit={handleSubmit} className="grid gap-4">
      <input className="field" name="name" placeholder="Naam" required />
      <div className="grid gap-4 sm:grid-cols-2">
        <input
          className="field"
          name="email"
          type="email"
          placeholder="E-mail"
          required
        />
        <input className="field" name="phone" placeholder="Telefoon" />
      </div>
      {mode === "quote" ? (
        <>
          <div className="grid gap-4 sm:grid-cols-2">
            <input className="field" name="origin" placeholder="Herkomst" />
            <input className="field" name="destination" placeholder="Bestemming" />
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            <select className="field" name="service" defaultValue="">
              <option value="" disabled>
                Gewenste dienst
              </option>
              <option>Wegtransport</option>
              <option>Opslag</option>
              <option>Palletdistributie</option>
              <option>Supply chain ondersteuning</option>
            </select>
            <input className="field" name="volume" placeholder="Volume / pallets" />
          </div>
        </>
      ) : null}
      <textarea
        className="field min-h-36 resize-y"
        name="message"
        placeholder={
          mode === "quote"
            ? "Vertel ons meer over timing, ladingtype en speciale behandeling."
            : "Waarmee kunnen we helpen?"
        }
        required
      />
      <button
        type="submit"
        disabled={state === "loading"}
        className="min-h-12 rounded-lg bg-brand px-5 py-3 text-sm font-bold text-white transition hover:bg-brand-dark disabled:cursor-not-allowed disabled:opacity-60"
      >
        {state === "loading"
          ? "Versturen..."
          : mode === "quote"
            ? "Offerteaanvraag versturen"
            : "Bericht versturen"}
      </button>
      {state === "success" ? (
        <p className="rounded-lg bg-green-50 px-4 py-3 text-sm font-semibold text-green-800">
          Bedankt. Uw bericht is ontvangen.
        </p>
      ) : null}
      {state === "error" ? (
        <p className="rounded-lg bg-red-50 px-4 py-3 text-sm font-semibold text-red-800">
          Er ging iets mis. Stuur ons rechtstreeks een e-mail.
        </p>
      ) : null}
    </form>
  );
}
