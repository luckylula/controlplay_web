"use client";

import { useState } from "react";

export function ContactForm() {
  const [sent, setSent] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSent(true);
  }

  if (sent) {
    return (
      <p className="rounded bg-emerald-500/20 p-2 text-sm text-emerald-200">
        Gràcies! Hem rebut el vostre missatge i us respondrem aviat.
      </p>
    );
  }

  const inputClass =
    "w-full rounded border border-slate-500 bg-white px-3 py-1.5 text-sm text-slate-900 placeholder-slate-400 focus:border-emerald-500 focus:outline-none focus:ring-1 focus:ring-emerald-500";
  return (
    <form onSubmit={handleSubmit} className="space-y-2">
      <div>
        <label htmlFor="contact-name" className="mb-0.5 block text-xs font-medium text-slate-300">
          Nom <span className="text-red-400">*</span>
        </label>
        <input id="contact-name" type="text" name="name" required className={inputClass} placeholder="El vostre nom" />
      </div>
      <div className="grid grid-cols-2 gap-2">
        <div>
          <label htmlFor="contact-phone" className="mb-0.5 block text-xs font-medium text-slate-300">Telèfon</label>
          <input id="contact-phone" type="tel" name="phone" className={inputClass} placeholder="Telèfon" />
        </div>
        <div>
          <label htmlFor="contact-email" className="mb-0.5 block text-xs font-medium text-slate-300">
            Email <span className="text-red-400">*</span>
          </label>
          <input id="contact-email" type="email" name="email" required className={inputClass} placeholder="Email" />
        </div>
      </div>
      <div>
        <label htmlFor="contact-subject" className="mb-0.5 block text-xs font-medium text-slate-300">
          Assumpte <span className="text-red-400">*</span>
        </label>
        <input id="contact-subject" type="text" name="subject" required className={inputClass} placeholder="Assumpte" />
      </div>
      <div>
        <label htmlFor="contact-message" className="mb-0.5 block text-xs font-medium text-slate-300">
          Missatge <span className="text-red-400">*</span>
        </label>
        <textarea
          id="contact-message"
          name="message"
          required
          rows={2}
          className={`${inputClass} resize-none`}
          placeholder="El vostre missatge"
        />
      </div>
      <button
        type="submit"
        className="w-full rounded bg-blue-600 px-3 py-2 text-sm font-semibold text-white transition hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 focus:ring-offset-slate-900"
      >
        ENVIAR
      </button>
    </form>
  );
}
