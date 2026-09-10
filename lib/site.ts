const defaultPhone = "+18509003867";
const defaultPhoneDisplay = "(850) 900-DUMP";

/**
 * Business contact details live here so every text and call action stays in sync.
 * Override these fallback values with environment variables only when needed.
 */
export const siteConfig = {
  businessName: "ProSite Dumpsters",
  shortName: "ProSite",
  phone: process.env.NEXT_PUBLIC_PROSITE_PHONE ?? defaultPhone,
  phoneDisplay: process.env.NEXT_PUBLIC_PROSITE_PHONE_DISPLAY ?? defaultPhoneDisplay,
  smsMessage: "Hi ProSite, I need a dumpster. My delivery address is: ",
  serviceAreas: ["Destin", "Miramar Beach", "30A", "Santa Rosa Beach", "Panama City Beach"],
  tagline: "On Site. On Time.",
  quoteAnchor: "/contact#quote-form",
  serviceRegion: "Destin to Panama City Beach",
  siteUrl: "https://www.prositedumpsters.com",
  description:
    "Fast, reliable roll-off dumpster delivery for homeowners, contractors, property managers, and businesses across Florida's Emerald Coast.",
} as const;

export function smsHref(message: string = siteConfig.smsMessage) {
  return `sms:${siteConfig.phone}?body=${encodeURIComponent(message)}`;
}

export function telHref() {
  return `tel:${siteConfig.phone}`;
}
