"use client"

import type React from "react"
import { motion } from "framer-motion"
import Link from "next/link"
import { useParams } from "next/navigation"

const blogContent: { [key: string]: any } = {
  "ai-visibility-2026": {
    title: "The Future of AI Search: How Brands Can Prepare for 2026",
    date: "February 15, 2026",
    category: "AI Visibility",
    readTime: "5 min read",
    content: `
      <p>The landscape of search is undergoing a fundamental transformation. AI-powered search engines like ChatGPT, Perplexity, and Google Gemini are changing how people discover brands and make decisions.</p>

      <h2>The Shift from Traditional SEO to AI Optimization</h2>
      <p>Traditional SEO focused on ranking for specific keywords. AI search, however, prioritizes understanding entities, context, and authority. Brands need to think beyond keywords and focus on:</p>
      <ul>
        <li>Entity recognition and knowledge graph optimization</li>
        <li>Structured data and schema markup</li>
        <li>Building authoritative content that AI systems can understand and cite</li>
      </ul>

      <h2>Key Strategies for 2026</h2>
      <p>To succeed in the AI search era, brands should:</p>
      <ol>
        <li><strong>Audit your AI visibility</strong> - Understand where and how you appear in AI results today</li>
        <li><strong>Optimize for context</strong> - Create comprehensive content that answers related questions</li>
        <li><strong>Build authority signals</strong> - Focus on citations, mentions, and structured data</li>
        <li><strong>Monitor and iterate</strong> - AI search is evolving rapidly; stay ahead with continuous optimization</li>
      </ol>

      <h2>The Bottom Line</h2>
      <p>AI search isn't replacing traditional search—it's creating a new layer of visibility that forward-thinking brands can dominate. The brands that invest in AI optimization now will have a significant advantage as this shift accelerates.</p>

      <p>Ready to optimize your brand for AI search? <a href="/#contact">Get your free AI visibility audit</a>.</p>
    `,
  },
  "martech-stack-optimization": {
    title: "5 Signs Your MarTech Stack is Holding Back Growth",
    date: "February 10, 2026",
    category: "MarTech",
    readTime: "7 min read",
    content: `
      <p>Your marketing technology stack should be a growth engine, not a bottleneck. Here are five warning signs that your MarTech setup needs optimization.</p>

      <h2>1. Data Silos Across Platforms</h2>
      <p>When your CRM, marketing automation, and analytics tools don't talk to each other, you lose valuable insights and create manual work. Integration is key to unified customer views.</p>

      <h2>2. Declining Platform Adoption</h2>
      <p>If your team isn't using the tools you've invested in, there's likely a usability or training issue. The best MarTech is technology your team actually uses.</p>

      <h2>3. Redundant Tools and Features</h2>
      <p>Many organizations pay for overlapping capabilities across multiple platforms. A stack audit can identify redundancies and reduce costs while improving efficiency.</p>

      <h2>4. Poor Attribution and ROI Visibility</h2>
      <p>If you can't clearly track which channels and campaigns drive results, your stack isn't properly configured. Proper attribution requires tight integration and consistent tracking.</p>

      <h2>5. Slow Campaign Execution</h2>
      <p>When launching campaigns takes weeks instead of days, your stack is likely over-complicated or poorly integrated. Streamlined processes enable faster execution.</p>

      <h2>Next Steps</h2>
      <p>If any of these signs resonate, it's time for a MarTech stack optimization. We help companies audit, streamline, and optimize their marketing technology for maximum ROI.</p>

      <p><a href="/#contact">Schedule a consultation</a> to discuss your MarTech challenges.</p>
    `,
  },
  "b2b-audience-strategy": {
    title: "Building a Winning B2B Audience Strategy in 2026",
    date: "February 5, 2026",
    category: "Growth Strategy",
    readTime: "6 min read",
    content: `
      <p>A strong audience strategy is the foundation of B2B growth. Here's how to build one that drives results in 2026.</p>

      <h2>Understanding Your Ideal Customer Profile</h2>
      <p>Start with data-driven ICP development. Analyze your best customers to identify common characteristics, behaviors, and needs. Go beyond demographics to understand:</p>
      <ul>
        <li>Business challenges and pain points</li>
        <li>Decision-making processes and buying committees</li>
        <li>Preferred channels and content formats</li>
      </ul>

      <h2>Segmentation for Precision Targeting</h2>
      <p>Not all prospects are equal. Effective segmentation allows you to tailor messaging and offers to specific audience groups. Consider segmenting by:</p>
      <ul>
        <li>Industry and company size</li>
        <li>Stage in the buyer journey</li>
        <li>Engagement level and intent signals</li>
      </ul>

      <h2>Channel Strategy and Prioritization</h2>
      <p>Where does your audience spend time? B2B buyers are active on LinkedIn, industry publications, podcasts, and increasingly, AI search platforms. Prioritize channels based on where you can reach your ICP most effectively.</p>

      <h2>Content That Converts</h2>
      <p>Create content that addresses real business challenges. In 2026, the most effective B2B content:</p>
      <ul>
        <li>Demonstrates clear ROI and business value</li>
        <li>Includes data, case studies, and social proof</li>
        <li>Is optimized for both traditional and AI search</li>
      </ul>

      <h2>Measurement and Optimization</h2>
      <p>Track engagement, pipeline influence, and customer acquisition cost by segment. Use these insights to continuously refine your audience strategy.</p>

      <p>Need help building a data-driven audience strategy? <a href="/#contact">Let's talk</a>.</p>
    `,
  },
}

export default function BlogPostPage() {
  const params = useParams()
  const slug = params?.slug as string
  const post = blogContent[slug]

  if (!post) {
    return (
      <main className="min-h-screen bg-slate-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-slate-900">Post Not Found</h1>
          <Link href="/blog" className="mt-4 inline-block text-blue-600 hover:underline">
            Back to Blog
          </Link>
        </div>
      </main>
    )
  }

  return (
    <main className="min-h-screen bg-slate-50">
      <BlogHeader />
      <article className="py-12">
        <div className="container mx-auto px-6 max-w-3xl">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <Link href="/blog" className="inline-flex items-center gap-2 text-sm text-slate-600 hover:text-slate-900 mb-8">
              ← Back to Blog
            </Link>
            <div className="flex items-center gap-3 text-xs text-slate-600 mb-4">
              <span className="px-3 py-1 rounded-full bg-blue-50 text-blue-600 font-medium">{post.category}</span>
              <span>{post.readTime}</span>
              <span>•</span>
              <time>{post.date}</time>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 leading-tight mb-8">{post.title}</h1>
            <div
              className="prose prose-slate prose-lg max-w-none
                prose-headings:font-bold prose-headings:text-slate-900
                prose-h2:text-2xl prose-h2:mt-12 prose-h2:mb-4
                prose-p:text-slate-700 prose-p:leading-relaxed prose-p:mb-6
                prose-a:text-blue-600 prose-a:no-underline hover:prose-a:underline
                prose-ul:my-6 prose-ul:list-disc prose-ul:pl-6
                prose-ol:my-6 prose-ol:list-decimal prose-ol:pl-6
                prose-li:text-slate-700 prose-li:mb-2
                prose-strong:text-slate-900 prose-strong:font-semibold"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />
          </motion.div>
        </div>
      </article>
      <RelatedPosts currentSlug={slug} />
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

function RelatedPosts({ currentSlug }: { currentSlug: string }) {
  const allPosts = Object.entries(blogContent)
    .filter(([slug]) => slug !== currentSlug)
    .map(([slug, data]) => ({ slug, ...data }))
    .slice(0, 2)

  return (
    <section className="border-t border-slate-200 bg-white py-16">
      <div className="container mx-auto px-6 max-w-6xl">
        <h2 className="text-2xl font-bold text-slate-900 mb-8">Related Articles</h2>
        <div className="grid gap-6 md:grid-cols-2">
          {allPosts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="block rounded-xl border border-slate-200 p-6 hover:shadow-lg transition group"
            >
              <div className="flex items-center gap-3 text-xs text-slate-600 mb-3">
                <span className="px-3 py-1 rounded-full bg-blue-50 text-blue-600 font-medium">{post.category}</span>
                <span>{post.readTime}</span>
              </div>
              <h3 className="text-lg font-bold text-slate-900 group-hover:text-blue-600 transition">{post.title}</h3>
            </Link>
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
