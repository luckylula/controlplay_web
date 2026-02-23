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
      <p className="rounded-lg bg-emerald-500/20 p-4 text-emerald-200">
        Gràcies! Hem rebut el vostre missatge i us respondrem aviat.
      </p>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label htmlFor="contact-name" className="mb-1 block text-sm font-medium text-white">
          Nom <span className="text-red-400">*</span>
        </label>
        <input
          id="contact-name"
          type="text"
          name="name"
          required
          className="w-full rounded-lg border border-slate-500 bg-white px-4 py-2.5 text-slate-900 placeholder-slate-400 focus:border-emerald-500 focus:outline-none focus:ring-1 focus:ring-emerald-500"
          placeholder="El vostre nom"
        />
      </div>
      <div>
        <label htmlFor="contact-phone" className="mb-1 block text-sm font-medium text-white">
          Telèfon
        </label>
        <input
          id="contact-phone"
          type="tel"
          name="phone"
          className="w-full rounded-lg border border-slate-500 bg-white px-4 py-2.5 text-slate-900 placeholder-slate-400 focus:border-emerald-500 focus:outline-none focus:ring-1 focus:ring-emerald-500"
          placeholder="Telèfon"
        />
      </div>
      <div>
        <label htmlFor="contact-email" className="mb-1 block text-sm font-medium text-white">
          Email <span className="text-red-400">*</span>
        </label>
        <input
          id="contact-email"
          type="email"
          name="email"
          required
          className="w-full rounded-lg border border-slate-500 bg-white px-4 py-2.5 text-slate-900 placeholder-slate-400 focus:border-emerald-500 focus:outline-none focus:ring-1 focus:ring-emerald-500"
          placeholder="El vostre email"
        />
      </div>
      <div>
        <label htmlFor="contact-subject" className="mb-1 block text-sm font-medium text-white">
          Assumpte <span className="text-red-400">*</span>
        </label>
        <input
          id="contact-subject"
          type="text"
          name="subject"
          required
          className="w-full rounded-lg border border-slate-500 bg-white px-4 py-2.5 text-slate-900 placeholder-slate-400 focus:border-emerald-500 focus:outline-none focus:ring-1 focus:ring-emerald-500"
          placeholder="Assumpte"
        />
      </div>
      <div>
        <label htmlFor="contact-message" className="mb-1 block text-sm font-medium text-white">
          Missatge <span className="text-red-400">*</span>
        </label>
        <textarea
          id="contact-message"
          name="message"
          required
          rows={4}
          className="w-full resize-y rounded-lg border border-slate-500 bg-white px-4 py-2.5 text-slate-900 placeholder-slate-400 focus:border-emerald-500 focus:outline-none focus:ring-1 focus:ring-emerald-500"
          placeholder="El vostre missatge"
        />
      </div>
      <button
        type="submit"
        className="w-full rounded-lg bg-blue-600 px-4 py-3 font-semibold text-white transition hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 focus:ring-offset-slate-900"
      >
        ENVIAR
      </button>
    </form>
  );
}
