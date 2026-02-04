import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Surge Council | B2B Growth Consultant & AI Visibility Consultant in San Francisco",
  description: "Surge Council is a leading B2B growth consultant and marketing consultant in San Francisco. We help brands uncover hidden revenue, optimize MarTech, and boost AI visibility in ChatGPT, Perplexity, and Gemini. Expert AI visibility consultant services.",
  generator: "v0.app",
  keywords: ["B2B growth consultant", "marketing consultant San Francisco", "AI visibility consultant", "growth strategy", "MarTech optimization", "AI search optimization"],
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
