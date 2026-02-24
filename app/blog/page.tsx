"use client"

import type React from "react"
import { motion } from "framer-motion"
import Link from "next/link"

const blogPosts = [
  {
    id: "ai-visibility-2026",
    title: "The Future of AI Search: How Brands Can Prepare for 2026",
    excerpt: "Discover the key strategies for optimizing your brand's visibility in AI-powered search engines like ChatGPT, Perplexity, and Gemini.",
    date: "February 15, 2026",
    category: "AI Visibility",
    readTime: "5 min read",
  },
  {
    id: "martech-stack-optimization",
    title: "5 Signs Your MarTech Stack is Holding Back Growth",
    excerpt: "Learn how to identify inefficiencies in your marketing technology stack and optimize for better performance and ROI.",
    date: "February 10, 2026",
    category: "MarTech",
    readTime: "7 min read",
  },
  {
    id: "b2b-audience-strategy",
    title: "Building a Winning B2B Audience Strategy in 2026",
    excerpt: "A comprehensive guide to understanding your B2B audience and creating strategies that drive engagement and conversion.",
    date: "February 5, 2026",
    category: "Growth Strategy",
    readTime: "6 min read",
  },
]

export default function BlogPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-50 to-slate-100">
      <BlogHeader />
      <BlogHero />
      <BlogListing posts={blogPosts} />
      <BlogFooter />
    </main>
  )
}

function BlogHeader() {
  return (
    <header className="sticky top-0 z-40 backdrop-blur border-b border-slate-900/10 bg-white/60">
      <div className="container mx-auto flex items-center justify-between px-6 py-4">
        <Link href="/" className="text-xl font-bold text-slate-900 tracking-tight">
          SURGE COUNCIL
        </Link>
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-600">
          <Link href="/#services" className="hover:text-slate-900">
            Services
          </Link>
          <Link href="/#results" className="hover:text-slate-900">
            Results
          </Link>
          <Link href="/about" className="hover:text-slate-900">
            About
          </Link>
          <Link href="/blog" className="text-slate-900 font-semibold">
            Blog
          </Link>
          <Link href="/#contact" className="hover:text-slate-900">
            Contact
          </Link>
        </nav>
        <Link
          href="/#contact"
          className="hidden md:inline-flex rounded-lg px-4 py-2 bg-slate-900 text-white text-sm font-medium hover:bg-slate-800"
        >
          Get Started
        </Link>
      </div>
    </header>
  )
}

function BlogHero() {
  return (
    <section className="bg-slate-900 text-white py-20">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl"
        >
          <h1 className="text-5xl md:text-6xl font-bold leading-tight">Growth Insights & AI Strategy</h1>
          <p className="mt-6 text-lg text-slate-300">
            Practical strategies for scaling B2B growth, optimizing marketing operations, and mastering AI visibility.
          </p>
        </motion.div>
      </div>
    </section>
  )
}

function BlogListing({ posts }: { posts: typeof blogPosts }) {
  return (
    <section className="py-20">
      <div className="container mx-auto px-6">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-6xl">
          {posts.map((post, i) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <Link
                href={`/blog/${post.id}`}
                className="block rounded-2xl border border-slate-200 bg-white p-6 hover:shadow-lg transition group"
              >
                <div className="flex items-center gap-3 text-xs text-slate-600 mb-4">
                  <span className="px-3 py-1 rounded-full bg-blue-50 text-blue-600 font-medium">{post.category}</span>
                  <span>{post.readTime}</span>
                </div>
                <h2 className="text-xl font-bold text-slate-900 group-hover:text-blue-600 transition mb-3">
                  {post.title}
                </h2>
                <p className="text-slate-600 text-sm leading-relaxed mb-4">{post.excerpt}</p>
                <time className="text-xs text-slate-500">{post.date}</time>
              </Link>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}

function BlogFooter() {
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
                <Link href="/#services" className="hover:text-white transition">
                  Opportunity Audit
                </Link>
              </li>
              <li>
                <Link href="/#services" className="hover:text-white transition">
                  Audience Strategy
                </Link>
              </li>
              <li>
                <Link href="/#services" className="hover:text-white transition">
                  MarTech Optimization
                </Link>
              </li>
              <li>
                <Link href="/#services" className="hover:text-white transition">
                  AI Visibility
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <p className="font-bold text-white mb-3">Company</p>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/#results" className="hover:text-white transition">
                  Results
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-white transition">
                  About
                </Link>
              </li>
              <li>
                <Link href="/blog" className="hover:text-white transition">
                  Blog
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <p className="font-bold text-white mb-3">Contact</p>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="mailto:aaron@surgecouncil.com" className="hover:text-white transition">
                  aaron@surgecouncil.com
                </a>
              </li>
              <li>
                <Link href="/#contact" className="hover:text-white transition">
                  Get in Touch
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-slate-700 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-400">
          <p>Based in San Francisco, California. Supporting clients across the U.S. and globally.</p>
          <p>© 2026 Surge Council. All rights reserved.</p>
          <p>Built on Vercel</p>
        </div>
      </div>
    </footer>
  )
}
