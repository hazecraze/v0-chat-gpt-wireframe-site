import type { Metadata } from "next"

/**
 * generateCanonical - Returns canonical metadata for a given path.
 * Usage: spread into your page's generateMetadata() or static metadata export.
 *
 * Example:
 *   export const metadata: Metadata = {
 *     ...generateCanonical('/about'),
 *     title: 'About | Surge Council',
 *   }
 */
export function generateCanonical(path: string): Partial<Metadata> {
  const base = "https://surgecouncil.com"
  const url = path.startsWith("http") ? path : `${base}${path}`
  return {
    alternates: {
      canonical: url,
    },
  }
}
