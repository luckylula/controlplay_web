import Link from "next/link";
import { footerNav, contact, siteName } from "@/lib/navigation";

export function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-slate-50">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand & contact */}
          <div className="lg:col-span-2">
            <Link href="/" className="text-lg font-bold text-slate-900">
              {siteName}
            </Link>
            <p className="mt-2 max-w-md text-sm text-slate-600">
              Serveis per a centres educatius, esportius i lúdics. Oferim el nostre servei amb les màximes garanties de legalitat i formalitat.
            </p>
            <dl className="mt-4 space-y-1 text-sm text-slate-600">
              <div>
                <dt className="sr-only">Telèfon</dt>
                <dd>
                  <a href={`tel:${contact.phone.replace(/\s/g, "")}`} className="hover:text-slate-900">
                    {contact.phone}
                  </a>
                </dd>
              </div>
              <div>
                <dt className="sr-only">Email</dt>
                <dd>
                  <a href={`mailto:${contact.email}`} className="hover:text-slate-900">
                    {contact.email}
                  </a>
                </dd>
              </div>
              <div>
                <dt className="sr-only">Adreça</dt>
                <dd>{contact.address}</dd>
              </div>
            </dl>
          </div>

          {/* Links */}
          <div>
            <h3 className="text-sm font-semibold text-slate-900">Enllaços</h3>
            <ul className="mt-3 space-y-2">
              {footerNav.slice(0, 7).map((link) => (
                <li key={link.href}>
                  {link.external ? (
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-slate-600 hover:text-slate-900"
                    >
                      {link.label}
                    </a>
                  ) : (
                    <Link href={link.href} className="text-sm text-slate-600 hover:text-slate-900">
                      {link.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-slate-900">Informació legal</h3>
            <ul className="mt-3 space-y-2">
              {footerNav.slice(7).map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-slate-600 hover:text-slate-900">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="mt-8 border-t border-slate-200 pt-8 text-center text-sm text-slate-500">
          © {new Date().getFullYear()} {siteName} – Disseny web renovat amb Next.js
        </div>
      </div>
    </footer>
  );
}
