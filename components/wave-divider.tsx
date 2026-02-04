export function WaveDivider({ className = "", color = "currentColor" }: { className?: string; color?: string }) {
  return (
    <svg
      viewBox="0 0 1200 120"
      preserveAspectRatio="none"
      className={className}
      style={{ width: "100%", height: "auto", display: "block" }}
    >
      <defs>
        <linearGradient id="waveGradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#3b82f6" />
          <stop offset="100%" stopColor={color} />
        </linearGradient>
      </defs>
      <path d="M0,40 Q300,80 600,40 T1200,40 L1200,120 L0,120 Z" fill="url(#waveGradient)" opacity="0.1" />
      <path d="M0,50 Q300,100 600,50 T1200,50 L1200,120 L0,120 Z" fill={color} opacity="0.05" />
    </svg>
  )
}
