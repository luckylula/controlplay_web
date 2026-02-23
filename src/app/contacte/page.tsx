import type { Metadata } from "next";
import { contact } from "@/lib/navigation";

export const metadata: Metadata = {
  title: "Contacte",
  description: "Contacta amb Control Play – Telèfon, email i adreça.",
};

export default function ContactePage() {
  return (
    <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-bold text-slate-900 sm:text-4xl">Contacta&apos;ns</h1>
      <p className="mt-4 text-slate-600">
        Tens preguntes? Estem aquí per ajudar-te.
      </p>
      <dl className="mt-8 space-y-4 rounded-xl border border-slate-200 bg-slate-50 p-6">
        <div>
          <dt className="text-sm font-medium text-slate-500">Telèfon oficina</dt>
          <dd>
            <a href={`tel:${contact.phone.replace(/\s/g, "")}`} className="text-lg font-medium text-slate-900 hover:text-emerald-600">
              {contact.phone}
            </a>
          </dd>
        </div>
        <div>
          <dt className="text-sm font-medium text-slate-500">Email</dt>
          <dd>
            <a href={`mailto:${contact.email}`} className="text-lg font-medium text-slate-900 hover:text-emerald-600">
              {contact.email}
            </a>
          </dd>
        </div>
        <div>
          <dt className="text-sm font-medium text-slate-500">Direcció</dt>
          <dd className="text-slate-900">{contact.address}</dd>
        </div>
      </dl>
      <p className="mt-8 text-sm text-slate-500">
        El formulari de contacte (nom, telèfon, email, missatge) es pot afegir en una propera iteració.
      </p>
    </div>
  );
}
