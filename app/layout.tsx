import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "B2B Growth & AI Search Optimization | Surge Council",
  description: "Boost AI visibility in ChatGPT, Perplexity & Gemini. Expert B2B growth consulting for modern brands. 15+ years Fortune 500 experience. Free audit available.",
  generator: "v0.dev",
  keywords: ["B2B growth consultant", "AI visibility consulting", "generative engine optimization", "GEO", "ChatGPT optimization", "Perplexity SEO", "MarTech optimization", "San Francisco"],
  verification: {
    google: "R1mA6sGoBvBAZKp6WlerKRlSvLF0c7mkB5AP38iIsig",
  },
  alternates: {
    canonical: "https://surgecouncil.com",
  },
  openGraph: {
    title: "B2B Growth & AI Search Optimization | Surge Council",
    description: "Boost AI visibility in ChatGPT, Perplexity & Gemini. Expert B2B growth consulting. 15+ years Fortune 500 experience.",
    url: "https://surgecouncil.com",
    siteName: "Surge Council",
    locale: "en_US",
    type: "website",
  },
}

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Surge Council",
  url: "https://www.surgecouncil.com",
  logo: "https://www.surgecouncil.com/images/surge-20council.png",
  description: "B2B growth consultant and AI visibility consultant based in San Francisco, helping brands uncover hidden revenue and optimize marketing operations.",
  address: {
    "@type": "PostalAddress",
    addressLocality: "San Francisco",
    addressRegion: "CA",
    addressCountry: "US"
  },
  founder: {
    "@type": "Person",
    name: "Aaron Hazen"
  },
  sameAs: []
}

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "Business Consulting",
  provider: {
    "@type": "Organization",
    name: "Surge Council"
  },
  areaServed: {
    "@type": "Country",
    name: "United States"
  },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Growth & AI Visibility Services",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Opportunity Audit",
          description: "Data-driven analysis to unlock hidden growth potential and deliver actionable insights."
        }
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Audience Strategy",
          description: "Strategic segmentation and targeting to turn potential customers into loyal advocates."
        }
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "MarTech Stack Optimization",
          description: "Comprehensive tech evaluation and optimization to transform marketing technology into a growth engine."
        }
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "AI Visibility",
          description: "Optimization for AI search tools including ChatGPT, Perplexity, and Gemini."
        }
      }
    ]
  }
}

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Surge Council",
  description: "AI Visibility and B2B Growth Consulting in San Francisco",
  url: "https://surgecouncil.com",
  email: "aaron@surgecouncil.com",
  address: {
    "@type": "PostalAddress",
    addressLocality: "San Francisco",
    addressRegion: "CA",
    addressCountry: "US"
  },
  areaServed: [
    { "@type": "Country", name: "United States" },
    { "@type": "AdministrativeArea", name: "California" }
  ],
  founder: {
    "@type": "Person",
    name: "Aaron Hazen",
    jobTitle: "Founder & CEO",
    description: "15+ years experience with Fortune 500 companies in B2B growth and AI visibility"
  },
  priceRange: "$$",
  knowsAbout: [
    "Generative Engine Optimization",
    "AI Visibility Consulting",
    "B2B Growth Strategy",
    "MarTech Optimization",
    "ChatGPT Optimization",
    "Perplexity SEO"
  ]
}

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Surge Council",
  url: "https://surgecouncil.com",
}

const reviewSchema = {
  "@context": "https://schema.org",
  "@type": "Review",
  itemReviewed: {
    "@type": "Organization",
    name: "Surge Council"
  },
  reviewRating: {
    "@type": "Rating",
    ratingValue: "5",
    bestRating: "5"
  },
  author: {
    "@type": "Person",
    name: "VP of Marketing, Fortune 500 Client"
  },
  reviewBody: "Surge Council helped us uncover revenue opportunities we did not even know existed. The data-driven approach transformed how we grow."
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(reviewSchema) }}
        />
      </head>
      <body className={`font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
