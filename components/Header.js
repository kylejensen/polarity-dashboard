'use client'

import { useState, useEffect } from 'react'

function Clock() {
  const [time, setTime] = useState('')
  const [uptime, setUptime] = useState(0)

  useEffect(() => {
    const update = () => {
      const now = new Date()
      const h = now.getHours().toString().padStart(2, '0')
      const m = now.getMinutes().toString().padStart(2, '0')
      const s = now.getSeconds().toString().padStart(2, '0')
      setTime(`${h}:${m}:${s}`)
      setUptime(prev => prev + 1)
    }
    update()
    const interval = setInterval(update, 1000)
    return () => clearInterval(interval)
  }, [])

  const formatUptime = (s) => {
    const d = Math.floor(s / 86400)
    const h = Math.floor((s % 86400) / 3600)
    const m = Math.floor((s % 3600) / 60)
    return `${d}d ${h}h ${m}m`
  }

  return (
    <div className="flex items-center gap-4">
      <div className="text-right">
        <div className="font-mono text-neon-blue text-lg font-bold tracking-wider text-glow-blue">
          {time || '00:00:00'}
        </div>
        <div className="font-mono text-[10px] text-slate-500 tracking-widest uppercase">
          Uptime {formatUptime(uptime + 284400)}
        </div>
      </div>
    </div>
  )
}

function TypewriterStatus() {
  const [text, setText] = useState('')
  const fullText = 'All Systems Operational'
  const [done, setDone] = useState(false)

  useEffect(() => {
    let i = 0
    const interval = setInterval(() => {
      if (i <= fullText.length) {
        setText(fullText.slice(0, i))
        i++
      } else {
        setDone(true)
        clearInterval(interval)
      }
    }, 80)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="flex items-center gap-2 glass-card rounded-lg px-4 py-2 neon-glow-green">
      <div className="w-2 h-2 rounded-full bg-neon-green status-ripple"></div>
      <span className="text-sm text-neon-green font-mono font-medium tracking-wide text-glow-green">
        {text}
        {!done && <span className="inline-block w-[2px] h-4 bg-neon-green ml-0.5 animate-pulse align-middle"></span>}
      </span>
    </div>
  )
}

export default function Header() {
  return (
    <div className="mb-8 animate-section-enter">
      <div className="flex items-center justify-between flex-wrap gap-4">
        <div>
          <div className="flex items-center gap-3 mb-1">
            <h1 className="text-4xl md:text-5xl font-extrabold gradient-text-animated tracking-tight">
              Polarity Labs
            </h1>
            <div className="flex items-center gap-1.5 bg-red-500/10 border border-red-500/30 rounded-full px-3 py-1">
              <div className="live-dot"></div>
              <span className="text-[10px] font-bold text-red-400 uppercase tracking-widest">Live</span>
            </div>
          </div>
          <p className="text-slate-500 mt-1 text-base font-mono tracking-widest uppercase">
            AI Agent Command Center
          </p>
        </div>

        <div className="flex items-center gap-4">
          <TypewriterStatus />
          <Clock />
        </div>
      </div>

      {/* Thin animated line separator */}
      <div className="mt-6 h-[1px] w-full bg-gradient-to-r from-transparent via-neon-blue/40 to-transparent"></div>
    </div>
  )
}
