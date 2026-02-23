import Link from "next/link";
import { footerNav, siteName } from "@/lib/navigation";

const LEGAL_HREFS = ["/avis-legal", "/politica-privacitat", "/politica-galetes"];
const legalLinks = footerNav.filter((link) => LEGAL_HREFS.includes(link.href));

export function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-slate-50">
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        {/* Informació legal */}
        <div>
          <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
            Informació legal
          </p>
          <ul className="mt-3 flex flex-wrap gap-x-6 gap-y-1 text-sm text-slate-600">
            {legalLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="hover:text-slate-900">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-6 border-t border-slate-200 pt-6 text-center text-sm text-slate-500">
          © {new Date().getFullYear()} {siteName} – Disseny web renovat amb Next.js
        </div>
      </div>
    </footer>
  );
}
