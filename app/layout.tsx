import type { Metadata } from "next";

import { Footer } from "@/components/footer";
import { MobileContactBar } from "@/components/mobile-contact-bar";
import { Navbar } from "@/components/navbar";
import { buildMetadata } from "@/lib/seo";
import { siteConfig } from "@/lib/site";

import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.siteUrl),
  ...buildMetadata({
    title: "Dumpster Rental Destin to Panama City Beach | ProSite Dumpsters",
    description: siteConfig.description,
    path: "/",
  }),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <div className="pb-[calc(5.25rem+env(safe-area-inset-bottom))] lg:pb-0">
          <main>{children}</main>
          <Footer />
        </div>
        <MobileContactBar />
      </body>
    </html>
  );
}
