"use client"

import type React from "react"
import { motion } from "framer-motion"
import { useState } from "react"
import { WaveDivider } from "@/components/wave-divider"

export default function Page() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-50 to-slate-100">
      <SiteHeader />
      <HeroSection />
      <WhoWeServeBar />
      <WaveDivider className="h-24 -mt-1 text-slate-50 relative z-20" color="#f8fafc" />
      <ServicesOverview />
      <AIVisibilitySpotlight />
      <AllServices />
      <WaveDivider className="h-16 -mb-1" color="#0f172a" />
      <ResultsSection />
      <CTASection />
      <SiteFooter />
    </main>
  )
}

function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 backdrop-blur border-b border-slate-900/10 bg-white/60">
      <div className="container mx-auto flex items-center justify-between px-6 py-4">
        <a href="/" className="text-xl font-bold text-slate-900 tracking-tight">
          SURGE COUNCIL
        </a>
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-600">
          <a href="#services" className="hover:text-slate-900">
            Services
          </a>
          <a href="#results" className="hover:text-slate-900">
            Results
          </a>
          <a href="/about" className="hover:text-slate-900">
            About
          </a>
          <a href="/blog" className="hover:text-slate-900">
            Blog
          </a>
          <a href="#contact" className="hover:text-slate-900">
            Contact
          </a>
        </nav>
        <a
          href="#contact"
          className="hidden md:inline-flex rounded-lg px-4 py-2 bg-slate-900 text-white text-sm font-medium hover:bg-slate-800"
        >
          Get Started
        </a>
      </div>
    </header>
  )
}

function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-slate-950 min-h-[700px] flex items-center">
      {/* Removed the image background and restored the gradient blobs */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl mix-blend-screen" />
        <div className="absolute top-20 right-1/4 w-96 h-96 bg-indigo-500/20 rounded-full blur-3xl mix-blend-screen" />
      </div>

      <div className="container mx-auto px-6 py-20 md:py-32 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center"
        >
          <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight">
            Growth & AI Visibility Consulting for Modern Brands
          </h1>
          <p className="mt-4 text-base md:text-lg text-blue-300 font-semibold tracking-wide">
            15+ years scaling growth at Fortune 500 companies and high-growth startups
          </p>
          <p className="mt-6 text-lg md:text-xl text-slate-300 max-w-3xl mx-auto font-medium">
            Surge Council is a strategic growth consultancy helping B2B and consumer brands uncover hidden revenue,
            optimize their marketing operations, and get found in AI search tools like ChatGPT, Perplexity, and Gemini.
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mt-8 flex flex-col sm:flex-row gap-4 justify-center"
        >
          <a
            href="https://calendly.com/aaron-surgecouncil"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-lg px-8 py-3 bg-white text-slate-900 font-bold hover:bg-slate-100 transition text-center"
          >
            Schedule a Consultation
          </a>
          <a
            href="#contact"
            className="rounded-lg px-8 py-3 border border-slate-700 bg-slate-800/50 text-white font-medium hover:bg-slate-800 transition text-center"
          >
            Get Your Free AI Visibility Audit
          </a>
        </motion.div>
      </div>
    </section>
  )
}

function WhoWeServeBar() {
  return (
    <section className="border-t border-slate-200 bg-slate-50 py-8">
      <div className="container mx-auto px-6">
        <p className="text-center text-slate-700 text-base md:text-lg max-w-3xl mx-auto">
          We work with B2B SaaS companies, growth-stage brands, and marketing teams that need a strategic partner to
          uncover new revenue and master AI visibility.
        </p>
      </div>
    </section>
  )
}

function ServicesOverview() {
  const services = [
    {
      icon: "🔍",
      title: "Opportunity Audit",
      desc: "Unlock hidden growth potential with our data-driven Opportunity Audit.",
      color: "amber",
    },
    {
      icon: "👥",
      title: "Audience Strategy",
      desc: "Turn potential customers into loyal advocates with targeted Audience Strategy.",
      color: "teal",
    },
    {
      icon: "🛠️",
      title: "MarTech Stack Optimization",
      desc: "Transform your marketing tech into a powerful growth engine.",
      color: "blue",
    },
    {
      icon: "🤖",
      title: "AI Visibility",
      desc: "Get found in ChatGPT, Perplexity, and Gemini—the new search era.",
      isNew: true,
      color: "blue",
    },
  ]

  const colorMap: { [key: string]: { bg: string; border: string; badge: string } } = {
    amber: { bg: "bg-amber-50", border: "border-amber-300", badge: "bg-amber-500" },
    teal: { bg: "bg-teal-50", border: "border-teal-300", badge: "bg-teal-500" },
    blue: { bg: "bg-blue-50", border: "border-blue-300", badge: "bg-blue-500" },
  }

  return (
    <section id="services" className="border-t border-slate-200">
      <div className="container mx-auto px-6 py-20">
        <h2 className="text-4xl font-bold text-slate-900 mb-4">Our Services</h2>
        <p className="text-lg text-slate-600 max-w-2xl mb-12">
          Strategic solutions designed to accelerate your business growth and amplify your market presence.
        </p>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {services.map((service, i) => {
            const colors = colorMap[service.color] || colorMap.blue
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className={`relative rounded-2xl border-2 p-6 transition ${
                  service.isNew ? `${colors.bg} ${colors.border}` : `border-slate-200 bg-white hover:shadow-lg`
                }`}
              >
                {service.isNew && (
                  <span
                    className={`absolute top-4 right-4 text-xs font-bold px-2 py-1 rounded-full ${colors.badge} text-white`}
                  >
                    NEW
                  </span>
                )}
                <div className="text-3xl mb-3">{service.icon}</div>
                <h3 className="text-lg font-bold text-slate-900">{service.title}</h3>
                <p className="mt-2 text-sm text-slate-600">{service.desc}</p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

function AIVisibilitySpotlight() {
  return (
    <section className="border-t border-slate-200 bg-gradient-to-r from-blue-50 to-indigo-50">
      <div className="container mx-auto px-6 py-20">
        <div className="grid items-center gap-12 md:grid-cols-2">
          <div>
            <span className="text-sm font-bold text-blue-600 uppercase tracking-wide">AI Search Revolution</span>
            <h2 className="mt-3 text-4xl font-bold text-slate-900">Your Brand in AI Results</h2>
            <p className="mt-4 text-lg text-slate-600">
              When someone asks ChatGPT for the best solution in your category, AI chooses which brands to mention. If
              you are not showing up accurately, you are missing visibility in the biggest search shift since Google.
            </p>
            <div className="mt-8 space-y-4">
              <Feature text="AI visibility audit to see where you stand today" />
              <Feature text="Content and structure optimization for AI systems" />
              <Feature text="Custom GPT builds trained on your company data" />
              <Feature text="Ongoing monitoring and visibility growth" />
            </div>
            <a
              href="#contact"
              className="mt-8 inline-flex rounded-lg px-6 py-3 bg-blue-600 text-white font-medium hover:bg-blue-700 transition"
            >
              Get Your Free AI Visibility Audit
            </a>
          </div>
          <div className="rounded-2xl border-2 border-blue-200 bg-white p-8">
            <div className="mb-4 text-sm font-bold text-slate-600 uppercase tracking-wide">We Optimize For</div>
            <div className="space-y-3">
              <AIBrand name="ChatGPT" icon="✓" />
              <AIBrand name="Perplexity" icon="✓" />
              <AIBrand name="Google Gemini" icon="✓" />
            </div>
            <div className="mt-8 p-4 rounded-lg bg-blue-50 border border-blue-200">
              <p className="text-sm text-slate-600">
                <strong>Real Result:</strong> Early clients saw 70% increase in AI mentions within 30 days.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function Feature({ text }: { text: string }) {
  return (
    <div className="flex items-start gap-3">
      <span className="text-blue-600 font-bold mt-1">✓</span>
      <span className="text-slate-700">{text}</span>
    </div>
  )
}

function AIBrand({ name, icon }: { name: string; icon: string }) {
  return (
    <div className="flex items-center gap-3 p-3 rounded-lg border border-blue-200 bg-blue-50">
      <span className="text-lg text-blue-600">{icon}</span>
      <span className="font-medium text-slate-900">{name}</span>
    </div>
  )
}

function AllServices() {
  const services = [
    {
      title: "Opportunity Audit",
      desc: "Unlock hidden growth potential with our data-driven Opportunity Audit. We analyze your business to deliver actionable insights on:",
      bullets: [
        "Market trends and untapped opportunities",
        "Channel performance gaps and optimization paths",
        "Custom growth strategies to maximize ROI",
      ],
    },
    {
      title: "Audience Strategy",
      desc: "Turn potential customers into loyal advocates with our Audience Strategy. We help you understand and connect with your ideal customers through:",
      bullets: [
        "Strategic segmentation and high-value customer targeting",
        "Deep behavioral insights that drive decisions",
        "Optimized channel selection for maximum impact",
      ],
    },
    {
      title: "MarTech Stack Optimization",
      desc: "Transform your marketing technology into a powerful growth engine. We optimize your tech investments through:",
      bullets: [
        "Comprehensive stack evaluation to eliminate gaps and redundancies",
        "Seamless platform integrations for better data flow",
        "Team training and best practices for sustainable growth",
      ],
    },
    {
      title: "AI Visibility",
      desc: "Get found in ChatGPT, Perplexity, and Gemini. We help your brand appear in AI results through:",
      bullets: [
        "Schema and structured data implementation",
        "Entity and knowledge graph alignment",
        "Custom GPT builds and monitoring",
      ],
    },
  ]

  return (
    <section className="border-t border-slate-200">
      <div className="container mx-auto px-6 py-20">
        <h2 className="text-4xl font-bold text-slate-900 mb-16">Service Details</h2>
        <div className="space-y-12">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <h3 className="text-3xl font-bold text-slate-900">{service.title}</h3>
              <p className="mt-4 text-slate-600 text-left">{service.desc}</p>
              <ul className="mt-6 space-y-2">
                {service.bullets.map((bullet) => (
                  <li key={bullet} className="flex items-start gap-3 text-left">
                    <span className="text-slate-900 font-bold mt-0.5">•</span>
                    <span className="text-slate-600">{bullet}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

function ResultsSection() {
  return (
    <section id="results" className="border-t border-slate-200 bg-slate-900 text-white">
      <div className="container mx-auto px-6 py-20">
        <h2 className="text-4xl font-bold mb-12">Real Results</h2>
        <div className="grid gap-8 md:grid-cols-3">
          <ResultCard number="15x" label="Average ROI from opportunity audits" />
          <ResultCard number="3x" label="Growth in qualified customer engagement" />
          <ResultCard number="70%" label="Increase in AI visibility mentions" />
        </div>
        <div className="mt-12 rounded-2xl border border-slate-700 bg-slate-800 p-8">
          <p className="text-lg italic text-slate-100">
            "Surge Council helped us uncover revenue opportunities we did not even know existed. The data-driven
            approach transformed how we grow."
          </p>
          <p className="mt-4 text-sm text-slate-400">VP of Marketing, Fortune 500 Client</p>
        </div>
      </div>
    </section>
  )
}

function ResultCard({ number, label }: { number: string; label: string }) {
  return (
    <div className="rounded-2xl border border-slate-700 bg-slate-800 p-6 text-center">
      <div className="text-4xl font-bold text-blue-400">{number}</div>
      <p className="mt-2 text-slate-300">{label}</p>
    </div>
  )
}

function CTASection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    service: "opportunity-audit",
  })
  const [isLoading, setIsLoading] = useState(false)
  const [message, setMessage] = useState("")

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setMessage("")

    try {
      const response = await fetch("https://formspree.io/f/manvzldy", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        setMessage("Thanks! We will be in touch soon.")
        setFormData({
          name: "",
          email: "",
          company: "",
          service: "opportunity-audit",
        })
      } else {
        setMessage("Something went wrong. Please try again.")
      }
    } catch (error) {
      setMessage("Failed to send request. Please try again.")
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <section id="contact" className="border-t border-slate-200 scroll-mt-28">
      <div className="container mx-auto px-6 py-20">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-4xl font-bold text-slate-900 text-center">Ready to Accelerate Growth?</h2>
          <p className="mt-4 text-center text-lg text-slate-600">
            Let's discuss which services are right for your business.
          </p>
          <form onSubmit={handleSubmit} className="mt-12 space-y-4">
            <div className="grid gap-4 md:grid-cols-2">
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Full Name"
                required
                className="rounded-lg border border-slate-300 bg-white px-4 py-3 text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-slate-900"
              />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email Address"
                required
                className="rounded-lg border border-slate-300 bg-white px-4 py-3 text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-slate-900"
              />
            </div>
            <input
              type="text"
              name="company"
              value={formData.company}
              onChange={handleChange}
              placeholder="Company Name"
              className="w-full rounded-lg border border-slate-300 bg-white px-4 py-3 text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-slate-900"
            />
            <select
              name="service"
              value={formData.service}
              onChange={handleChange}
              className="w-full rounded-lg border border-slate-300 bg-white px-4 py-3 text-slate-900 focus:outline-none focus:border-slate-900"
            >
              <option value="opportunity-audit">Opportunity Audit</option>
              <option value="audience-strategy">Audience Strategy</option>
              <option value="martech-stack">MarTech Stack Optimization</option>
              <option value="ai-visibility">AI Visibility</option>
            </select>
            <button
              type="submit"
              disabled={isLoading}
              className="w-full rounded-lg px-6 py-3 bg-slate-900 text-white font-medium hover:bg-slate-800 disabled:opacity-50 transition"
            >
              {isLoading ? "Sending..." : "Schedule Consultation"}
            </button>
            {message && (
              <p className={`text-center text-sm ${message.includes("Thanks") ? "text-green-600" : "text-red-600"}`}>
                {message}
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  )
}

function SiteFooter() {
  return (
    <footer className="border-t border-slate-200 bg-slate-900 text-slate-300">
      <div className="container mx-auto px-6 py-12">
        <div className="grid gap-8 md:grid-cols-4 mb-8">
          <div>
            <p className="text-lg font-bold text-white">SURGE COUNCIL</p>
            <p className="mt-2 text-sm">Growth strategy and marketing excellence.</p>
          </div>
          <div>
            <p className="font-bold text-white mb-3">Services</p>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#services" className="hover:text-white transition">
                  Opportunity Audit
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition">
                  Audience Strategy
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition">
                  MarTech Optimization
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition">
                  AI Visibility
                </a>
              </li>
            </ul>
          </div>
          <div>
            <p className="font-bold text-white mb-3">Company</p>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#results" className="hover:text-white transition">
                  Results
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-white transition">
                  Contact
                </a>
              </li>
              <li>
                <a href="/about" className="hover:text-white transition">
                  About
                </a>
              </li>
            </ul>
          </div>
          <div>
            <p className="font-bold text-white mb-3">Contact</p>
            <p className="text-sm">
              <a href="mailto:aaron@surgecouncil.com" className="hover:text-white transition">
                aaron@surgecouncil.com
              </a>
            </p>
          </div>
        </div>
        <div className="border-t border-slate-700 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8 w-full text-sm">
            <p>© 2025 Surge Council. All rights reserved.</p>
            <p>Based in San Francisco, California. Supporting clients across the U.S. and globally.</p>
            <p>Built on Vercel</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
