import { NextResponse } from "next/server";

/**
 * Geo-Detection Middleware for GoldSilver.de
 *
 * On the FIRST visit (no `gs-lang` cookie present):
 *   - Reads Vercel's geo header `x-vercel-ip-country` (populated on Vercel Edge)
 *   - Falls back to parsing the `Accept-Language` request header
 *   - Germany (DE) → sets gs-lang=de
 *   - All other countries → sets gs-lang=en
 *
 * On SUBSEQUENT visits (gs-lang cookie already set):
 *   - Does nothing — the user's manual language choice is always respected
 *
 * No redirects. No URL changes. Cookie integrates directly with the
 * existing i18next setup in i18n.ts and LanguageSwitcher.jsx.
 */

/** Countries that should default to German */
const GERMAN_COUNTRIES = new Set(["DE"]);

/**
 * Detect language from Accept-Language header as a fallback.
 * Returns "de" only if the highest-priority language tag starts with "de".
 * Returns "en" for everything else.
 */
function detectFromAcceptLanguage(acceptLanguage) {
  if (!acceptLanguage) return "en";

  // Parse "de-DE,de;q=0.9,en;q=0.8" → ["de-DE", "de", "en"]
  const langs = acceptLanguage
    .split(",")
    .map((part) => part.trim().split(";")[0].trim().toLowerCase());

  if (langs.length > 0 && langs[0].startsWith("de")) {
    return "de";
  }
  return "en";
}

export function middleware(request) {
  // If gs-lang cookie already exists, never touch it — respect user's choice
 const existingCookie = request.cookies.get("gs-lang")?.value;

if (existingCookie === "en" || existingCookie === "de") {
  return NextResponse.next();
}

  // --- First visit: detect country ---


  // 1. Vercel geo header (populated automatically on Vercel Edge Network)
const country = request.headers.get("x-vercel-ip-country");

  let lang;
  if (country) {
    lang = GERMAN_COUNTRIES.has(country.toUpperCase()) ? "de" : "en";
  } else {
    // 2. Fallback: Accept-Language header (works on all platforms)
    const acceptLanguage = request.headers.get("accept-language");
    lang = detectFromAcceptLanguage(acceptLanguage);
  }

  // Pass the request through without redirecting, just set the cookie
  const response = NextResponse.next();

  // Cookie config matches LanguageSwitcher.jsx exactly:
  // path=/, max-age=31536000 (1 year), samesite=lax
  response.cookies.set("gs-lang", lang, {
    path: "/",
    maxAge: 60 * 60 * 24 * 365, // 1 year
    sameSite: "lax",
  });

  return response;
}

export const config = {
  matcher: [
    "/((?!_next/static|_next/image|favicon\\.png|api/|.*\\.(?:webp|jpg|jpeg|png|svg|ico|txt|xml|json)$).*)",
  ],
};