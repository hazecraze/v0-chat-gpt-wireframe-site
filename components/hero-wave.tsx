"use client"

import { motion } from "framer-motion"

export function HeroWave() {
  return (
    <div className="absolute bottom-0 left-0 right-0 w-full overflow-hidden">
      <svg viewBox="0 0 1200 120" className="w-full h-auto" preserveAspectRatio="none">
        <defs>
          <linearGradient id="waveGradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#0ea5e9" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#0284c7" stopOpacity="0.1" />
          </linearGradient>
        </defs>

        <motion.path
          d="M0,40 Q300,20 600,40 T1200,40 L1200,120 L0,120 Z"
          fill="url(#waveGradient)"
          animate={{
            d: [
              "M0,40 Q300,20 600,40 T1200,40 L1200,120 L0,120 Z",
              "M0,35 Q300,15 600,35 T1200,35 L1200,120 L0,120 Z",
              "M0,40 Q300,20 600,40 T1200,40 L1200,120 L0,120 Z",
            ],
          }}
          transition={{
            duration: 4,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />

        {/* Secondary wave layer for depth */}
        <motion.path
          d="M0,50 Q300,35 600,50 T1200,50 L1200,120 L0,120 Z"
          fill="url(#waveGradient)"
          animate={{
            d: [
              "M0,50 Q300,35 600,50 T1200,50 L1200,120 L0,120 Z",
              "M0,45 Q300,25 600,45 T1200,45 L1200,120 L0,120 Z",
              "M0,50 Q300,35 600,50 T1200,50 L1200,120 L0,120 Z",
            ],
          }}
          transition={{
            duration: 5,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
            delay: 0.5,
          }}
        />
      </svg>
    </div>
  )
}
