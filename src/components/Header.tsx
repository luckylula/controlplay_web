"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { mainNav, siteName, contact } from "@/lib/navigation";

const LOGO_PATH = "/images/logos/logo_control_play.png";

function PhoneIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <rect x="5" y="2" width="14" height="20" rx="2.5" />
      <circle cx="12" cy="18" r="1.25" fill="currentColor" />
    </svg>
  );
}

function MailIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <rect x="2" y="4" width="20" height="16" rx="2.5" />
      <path d="m2 7 9.5 6 9.5-6" />
    </svg>
  );
}

export function Header() {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [logoError, setLogoError] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-200/80 bg-white">
      {/* Top bar: phone + email */}
      <div className="border-b border-slate-200/60 bg-white">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-start gap-x-6 gap-y-1 px-4 py-2 text-sm sm:px-6 lg:px-8">
          <a
            href={`tel:${contact.phone.replace(/\s/g, "")}`}
            className="flex items-center gap-2 text-slate-600 transition hover:text-emerald-600"
          >
            <PhoneIcon className="h-4 w-4 shrink-0" />
            <span>{contact.phone}</span>
          </a>
          <a
            href={`mailto:${contact.email}`}
            className="flex items-center gap-2 text-slate-600 transition hover:text-emerald-600"
          >
            <MailIcon className="h-4 w-4 shrink-0" />
            <span>{contact.email}</span>
          </a>
        </div>
      </div>
      {/* Logo + nav */}
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link
          href="/"
          className="flex items-center gap-2 text-slate-900 hover:opacity-90 transition-opacity"
        >
          {!logoError ? (
            <Image
              src={LOGO_PATH}
              alt={siteName}
              width={160}
              height={44}
              className="h-10 w-auto object-contain object-left"
              onError={() => setLogoError(true)}
              priority
            />
          ) : (
            <span className="text-xl font-bold tracking-tight text-slate-900">
              {siteName}
            </span>
          )}
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-1">
          {mainNav.map((item) => {
            if (item.external) {
              return (
                <a
                  key={item.href}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-md px-3 py-2 text-sm font-medium text-slate-700 hover:bg-slate-100 hover:text-slate-900"
                >
                  {item.label}
                </a>
              );
            }
            if (item.children?.length) {
              const isOpen = openDropdown === item.label;
              return (
                <div
                  key={item.label}
                  className="relative"
                  onMouseEnter={() => setOpenDropdown(item.label)}
                  onMouseLeave={() => setOpenDropdown(null)}
                >
                  <Link
                    href={item.href}
                    className="flex items-center gap-1 rounded-md px-3 py-2 text-sm font-medium text-slate-700 hover:bg-slate-100 hover:text-slate-900"
                  >
                    {item.label}
                    <svg
                      className="h-4 w-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </Link>
                  {isOpen && (
                    <div className="absolute left-0 top-full mt-0 w-64 rounded-lg border border-slate-200 bg-white py-2 shadow-lg">
                      {item.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          className="block px-4 py-2 text-sm text-slate-700 hover:bg-slate-50 hover:text-slate-900"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              );
            }
            return (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-md px-3 py-2 text-sm font-medium text-slate-700 hover:bg-slate-100 hover:text-slate-900"
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        {/* Mobile menu button */}
        <button
          type="button"
          className="md:hidden rounded-md p-2 text-slate-600 hover:bg-slate-100"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Obrir menú"
        >
          {mobileOpen ? (
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile nav */}
      {mobileOpen && (
        <div className="border-t border-slate-200 bg-white md:hidden">
          <nav className="flex flex-col gap-0 px-4 py-3">
            {mainNav.map((item) => {
              if (item.external) {
                return (
                  <a
                    key={item.href}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-md px-3 py-2 text-slate-700"
                    onClick={() => setMobileOpen(false)}
                  >
                    {item.label}
                  </a>
                );
              }
              return (
                <div key={item.href}>
                  <Link
                    href={item.href}
                    className="block rounded-md px-3 py-2 font-medium text-slate-700"
                    onClick={() => setMobileOpen(false)}
                  >
                    {item.label}
                  </Link>
                  {item.children?.map((child) => (
                    <Link
                      key={child.href}
                      href={child.href}
                      className="block rounded-md py-1.5 pl-6 pr-3 text-sm text-slate-600"
                      onClick={() => setMobileOpen(false)}
                    >
                      {child.label}
                    </Link>
                  ))}
                </div>
              );
            })}
          </nav>
        </div>
      )}
    </header>
  );
}
