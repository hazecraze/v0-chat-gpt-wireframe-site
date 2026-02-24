"use client"
import { motion } from "framer-motion"
import { WaveDivider } from "@/components/wave-divider"

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-50 to-slate-100">
      <SiteHeader />
      <HeroSection />
      <WaveDivider className="h-20" color="#0f172a" />
      <StorySection />
      <ApproachSection />
      <FounderSection />
      <ValuesSection />
      <WaveDivider className="h-16 -mb-1" color="#0f172a" />
      <CTASection />
      <SiteFooter />
    </main>
  )
}

function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 backdrop-blur border-b border-slate-900/10 bg-white/60">
      <div className="container mx-auto flex items-center justify-between px-6 py-4">
        <a href="/" className="flex items-center">
          <span className="text-xl font-bold text-slate-900 tracking-tight">SURGE COUNCIL</span>
        </a>
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-600">
          <a href="/#services" className="hover:text-slate-900">
            Services
          </a>
          <a href="/#results" className="hover:text-slate-900">
            Results
          </a>
          <a href="/about" className="hover:text-slate-900">
            About
          </a>
          <a href="/blog" className="hover:text-slate-900">
            Blog
          </a>
          <a href="/#contact" className="hover:text-slate-900">
            Contact
          </a>
        </nav>
        <a
          href="/#contact"
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
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 -z-10 h-full w-full bg-[linear-gradient(45deg,transparent_25%,rgba(68,68,68,.2)_25%,rgba(68,68,68,.2)_50%,transparent_50%,transparent_75%,rgba(68,68,68,.2)_75%,rgba(68,68,68,.2))] bg-[length:60px_60px]" />
      <div className="container mx-auto px-6 py-20 md:py-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl"
        >
          <h1 className="text-5xl md:text-6xl font-bold text-slate-900 leading-tight">Our Story</h1>
          <p className="mt-6 text-xl text-slate-600">
            We believe growth happens when data meets strategy. Surge Council was built to help businesses like yours
            uncover opportunities and accelerate impact in an ever-changing digital landscape.
          </p>
        </motion.div>
      </div>
    </section>
  )
}

function StorySection() {
  return (
    <section className="border-t border-slate-200">
      <div className="container mx-auto px-6 py-20">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="prose prose-slate max-w-none"
          >
            <h2 className="text-4xl font-bold text-slate-900">Who We Are</h2>
            <p className="mt-6 text-lg text-slate-600 leading-relaxed">
              Surge Council is a strategic growth consultancy built by marketers, for marketers. We started with a
              simple observation: businesses have amazing stories to tell, but they're often stuck using generic
              strategies that don't match their unique value.
            </p>
            <p className="mt-4 text-lg text-slate-600 leading-relaxed">
              Our origin story matters because it drives everything we do. We don't believe in one-size-fits-all
              solutions. Instead, we dive deep into your business to understand what makes you different—then we build
              strategies around that differentiation.
            </p>
            <p className="mt-4 text-lg text-slate-600 leading-relaxed">
              Whether it's uncovering hidden revenue opportunities, building audience strategies that convert,
              optimizing your martech stack, or positioning your brand in the AI search era, we approach every
              engagement the same way: with curiosity, data-driven insights, and a commitment to real, measurable
              impact.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

function ApproachSection() {
  const principles = [
    {
      title: "Sound Like You",
      description:
        "We don't use corporate jargon or force you into a mold. Your story is what separates you from the competition—we help you tell it authentically.",
      icon: "🎯",
      color: "from-amber-50 to-amber-100",
      iconBg: "bg-amber-100",
    },
    {
      title: "Data Meets Creativity",
      description:
        "Strategy without data is a guess. Data without creativity is just numbers. We combine both to build strategies that actually work.",
      icon: "📊",
      color: "from-teal-50 to-teal-100",
      iconBg: "bg-teal-100",
    },
    {
      title: "Real Impact, Real ROI",
      description:
        "We're measured by your results, not by vanity metrics. Everything we recommend is designed to accelerate growth and amplify your market presence.",
      icon: "📈",
      color: "from-blue-50 to-blue-100",
      iconBg: "bg-blue-100",
    },
    {
      title: "Long-Term Partnership",
      description:
        "We're not consultants who disappear after a project. We work with you to implement, optimize, and evolve your strategies as the market changes.",
      icon: "🤝",
      color: "from-indigo-50 to-indigo-100",
      iconBg: "bg-indigo-100",
    },
  ]

  return (
    <section className="border-t border-slate-200 bg-gradient-to-b from-slate-50 to-white">
      <div className="container mx-auto px-6 py-20">
        <h2 className="text-4xl font-bold text-slate-900 mb-4">How We Work</h2>
        <p className="text-lg text-slate-600 max-w-2xl mb-12">
          Our approach is built on principles that keep us focused on what matters most: your success.
        </p>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {principles.map((principle, i) => (
            <motion.div
              key={principle.title}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`rounded-2xl border border-slate-200 bg-gradient-to-br ${principle.color} p-6 hover:shadow-lg transition`}
            >
              <div
                className={`w-12 h-12 rounded-lg ${principle.iconBg} flex items-center justify-center text-2xl mb-4`}
              >
                {principle.icon}
              </div>
              <h3 className="text-lg font-bold text-slate-900">{principle.title}</h3>
              <p className="mt-3 text-sm text-slate-600">{principle.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

function FounderSection() {
  return (
    <section className="border-t border-slate-200 bg-white">
      <div className="container mx-auto px-6 py-20">
        <div className="grid gap-8 md:gap-12 md:grid-cols-2 items-center">
          <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <img src="/images/1739498273226.jpeg" alt="Founder" className="rounded-2xl shadow-lg max-w-xs" />
          </motion.div>
          <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Meet Aaron</h2>
            <p className="text-lg text-slate-600 leading-relaxed mb-4">
              Aaron brings over 15 years of experience in strategic growth consulting and marketing transformation. His
              passion is helping businesses uncover their true value proposition and build strategies that drive real,
              measurable impact.
            </p>
            <p className="text-lg text-slate-600 leading-relaxed mb-4">
              With a data-driven approach and deep expertise across digital strategy, marketing technology, and emerging
              platforms like AI search, Aaron has guided Fortune 500 companies and ambitious startups alike through
              complex growth challenges.
            </p>
            <p className="text-lg text-slate-600 leading-relaxed">
              When Aaron's not strategizing with clients, you'll find him exploring new marketing technologies,
              analyzing market trends, and thinking about how the future of search and discovery is changing the game
              for businesses everywhere.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

function ValuesSection() {
  return (
    <section className="border-t border-slate-200">
      <div className="container mx-auto px-6 py-20">
        <div className="max-w-3xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="text-4xl font-bold text-slate-900 mb-6">Our Commitment</h2>
            <div className="space-y-4">
              <p className="text-lg text-slate-600 leading-relaxed">
                We believe the way you tell your story online can make all the difference. With over 1.5 billion
                websites competing for attention, authenticity is your biggest competitive advantage.
              </p>
              <p className="text-lg text-slate-600 leading-relaxed">
                That's why we focus on helping you sound like yourself—not like every other generic brand. We help you
                highlight your awards, recognize your team, and share your unique perspective. We do this because we
                know it separates you from the rest.
              </p>
              <p className="text-lg text-slate-600 leading-relaxed">
                When you work with Surge Council, you're partnering with strategists who genuinely care about your
                success and are committed to building strategies that reflect who you really are.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

function CTASection() {
  return (
    <section className="border-t border-slate-200 bg-gradient-to-b from-white to-slate-50">
      <div className="container mx-auto px-6 py-20">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-slate-900">Ready to Work Together?</h2>
          <p className="mt-4 text-lg text-slate-600">
            Let's talk about your business and explore how Surge Council can help accelerate your growth.
          </p>
          <a
            href="/#contact"
            className="mt-8 inline-flex rounded-lg px-6 py-3 bg-slate-900 text-white font-medium hover:bg-slate-800 transition"
          >
            Schedule a Consultation
          </a>
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
                <a href="/#services" className="hover:text-white transition">
                  Opportunity Audit
                </a>
              </li>
              <li>
                <a href="/#services" className="hover:text-white transition">
                  Audience Strategy
                </a>
              </li>
              <li>
                <a href="/#services" className="hover:text-white transition">
                  MarTech Optimization
                </a>
              </li>
              <li>
                <a href="/#services" className="hover:text-white transition">
                  AI Visibility
                </a>
              </li>
            </ul>
          </div>
          <div>
            <p className="font-bold text-white mb-3">Company</p>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="/#results" className="hover:text-white transition">
                  Results
                </a>
              </li>
              <li>
                <a href="/#contact" className="hover:text-white transition">
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
          <p className="text-sm">© 2025 Surge Council. All rights reserved.</p>
          <p className="text-sm">Built on Vercel</p>
        </div>
      </div>
    </footer>
  )
}
