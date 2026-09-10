import type { Metadata } from "next";

import { siteConfig } from "./site";

export { siteConfig } from "./site";

type MetadataInput = {
  title: string;
  description: string;
  path: string;
};

export function absoluteUrl(path: string) {
  return new URL(path, siteConfig.siteUrl).toString();
}

export function buildMetadata({ title, description, path }: MetadataInput): Metadata {
  const url = absoluteUrl(path);

  return {
    title,
    description,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title,
      description,
      url,
      type: "website",
      siteName: siteConfig.businessName,
      images: [
        {
          url: absoluteUrl("/og-default.svg"),
          width: 1200,
          height: 630,
          alt: `${siteConfig.businessName} preview`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [absoluteUrl("/og-default.svg")],
    },
  };
}

export function buildLocalBusinessJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: siteConfig.businessName,
    slogan: siteConfig.tagline,
    description: siteConfig.description,
    url: siteConfig.siteUrl,
    areaServed: [
      "Destin, FL",
      "Miramar Beach, FL",
      "Santa Rosa Beach, FL",
      "30A, FL",
      "Panama City Beach, FL",
    ],
    knowsAbout: [
      "Residential dumpster rental",
      "Construction dumpster rental",
      "Commercial dumpster rental",
      "Roll-off dumpsters",
    ],
  };
}

export function buildServiceJsonLd(name: string, description: string, areaServed: string[]) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name,
    serviceType: name,
    provider: {
      "@type": "LocalBusiness",
      name: siteConfig.businessName,
      url: siteConfig.siteUrl,
    },
    description,
    areaServed,
  };
}
