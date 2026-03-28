'use client'

import { useState, useEffect, useRef } from 'react'

const stages = [
  { name: 'Inbox', count: 47, color: 'text-slate-400', glowColor: 'rgba(148, 163, 184, 0.3)', icon: '📥', borderColor: 'border-slate-500/30' },
  { name: 'Selected', count: 12, color: 'text-neon-blue', glowColor: 'rgba(0, 212, 255, 0.3)', icon: '✓', borderColor: 'border-neon-blue/30' },
  { name: 'Briefed', count: 8, color: 'text-neon-purple', glowColor: 'rgba(191, 0, 255, 0.3)', icon: '📝', borderColor: 'border-neon-purple/30' },
  { name: 'Drafted', count: 5, color: 'text-yellow-400', glowColor: 'rgba(250, 204, 21, 0.3)', icon: '✏️', borderColor: 'border-yellow-500/30' },
  { name: 'Approved', count: 3, color: 'text-neon-green', glowColor: 'rgba(57, 255, 20, 0.3)', icon: '✅', borderColor: 'border-neon-green/30' },
  { name: 'Posted', count: 24, color: 'text-emerald-400', glowColor: 'rgba(52, 211, 153, 0.3)', icon: '🚀', borderColor: 'border-emerald-500/30' },
]

function CountUp({ target }) {
  const [count, setCount] = useState(0)
  const ref = useRef(null)

  useEffect(() => {
    const duration = 1500
    const steps = 30
    const increment = target / steps
    let current = 0
    let step = 0

    const timer = setInterval(() => {
      step++
      current = Math.min(Math.round(increment * step), target)
      setCount(current)
      if (step >= steps) clearInterval(timer)
    }, duration / steps)

    return () => clearInterval(timer)
  }, [target])

  return <span>{count}</span>
}

export default function ContentPipeline() {
  return (
    <div className="glass-card gradient-border rounded-xl p-6 animate-section-enter section-delay-2">
      <div className="flex items-center gap-3 mb-6">
        <h2 className="text-2xl font-bold text-white">Content Pipeline</h2>
        <div className="flex-1 h-[1px] bg-gradient-to-r from-neon-blue/20 to-transparent"></div>
      </div>
      
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
        {stages.map((stage, index) => (
          <div key={stage.name} className="relative">
            <div className={`glass-card holo-shimmer rounded-xl p-4 border ${stage.borderColor} hover:scale-105 transition-all duration-300 animate-fade-in-up`}
              style={{ 
                animationDelay: `${index * 0.15}s`,
                boxShadow: `0 0 15px ${stage.glowColor.replace('0.3', '0.08')}`
              }}
            >
              <div className="flex flex-col items-center text-center gap-2">
                <div className="text-2xl">{stage.icon}</div>
                <div className={`text-3xl font-bold font-mono ${stage.color}`}>
                  <CountUp target={stage.count} />
                </div>
                <div className="text-xs text-slate-400 font-medium uppercase tracking-wider">{stage.name}</div>
              </div>
            </div>
            
            {/* Animated arrow connector */}
            {index < stages.length - 1 && (
              <div className="hidden lg:flex absolute top-1/2 -right-3 transform -translate-y-1/2 z-10 items-center">
                <span className="text-neon-blue text-lg animate-arrow-pulse" style={{ animationDelay: `${index * 0.3}s` }}>
                  ›
                </span>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Sparkline / Activity Mini Graph */}
      <div className="mt-6 pt-6 border-t border-polarity-border/50">
        <div className="flex items-end justify-between gap-2">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-neon-green status-ripple"></div>
            <span className="text-xs text-slate-500 font-mono">Pipeline health: <span className="text-neon-green font-semibold text-glow-green">Excellent</span></span>
          </div>

          {/* CSS sparkline */}
          <div className="flex items-end gap-[2px] h-6">
            {[40, 65, 45, 80, 55, 90, 70, 85, 50, 95, 60, 75, 88, 42, 78, 92, 55, 68, 85, 72].map((h, i) => (
              <div
                key={i}
                className="w-[3px] rounded-sm animate-bar-grow"
                style={{
                  height: `${h}%`,
                  background: `linear-gradient(to top, rgba(0, 212, 255, 0.3), rgba(0, 212, 255, 0.8))`,
                  animationDelay: `${i * 0.05}s`
                }}
              />
            ))}
          </div>

          <div className="text-xs text-slate-500 font-mono">
            Total: <span className="text-white font-semibold">99</span>
          </div>
        </div>
      </div>
    </div>
  )
}
