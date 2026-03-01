import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { siteName } from "@/lib/navigation";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: {
    default: `${siteName} | Serveis per a Centres Educatius`,
    template: `%s | ${siteName}`,
  },
  description:
    "Control Play – Serveis per a centres educatius, esportius i lúdics. Menjadors escolars, activitats extraescolars, casals i més.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ca">
      <body className={`${poppins.variable} font-sans antialiased min-h-screen flex flex-col bg-white text-slate-900`}>
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
