'use client'

const logs = [
  { time: '03:42:17', agent: 'ATHENA', msg: 'Initializing daily briefing sequence...', level: 'info' },
  { time: '03:42:18', agent: 'SYSTEM', msg: 'All 7 agents online. Pipeline status: GREEN', level: 'success' },
  { time: '03:42:19', agent: 'BERT', msg: 'Build #247 compiled successfully (0 warnings)', level: 'success' },
  { time: '03:42:20', agent: 'IRIS', msg: 'Scanning 12 research sources for trending topics...', level: 'info' },
  { time: '03:42:21', agent: 'MUSE', msg: 'Content calendar updated — 3 posts scheduled', level: 'info' },
  { time: '03:42:22', agent: 'SCRIBE', msg: 'Draft "AI Agent Architecture" — 2,400 words complete', level: 'success' },
  { time: '03:42:23', agent: 'HERMES', msg: 'Outbound messages queued: 8 emails, 3 DMs', level: 'info' },
  { time: '03:42:24', agent: 'ATLAS', msg: 'Sprint velocity: 34 pts/week (+12% vs last sprint)', level: 'success' },
  { time: '03:42:25', agent: 'ATHENA', msg: 'Priority override: Lacking Inputs release → critical path', level: 'warn' },
  { time: '03:42:26', agent: 'SYSTEM', msg: 'Memory usage: 847MB / 4096MB (20.7%)', level: 'info' },
  { time: '03:42:27', agent: 'BERT', msg: 'Deploying polarity-dashboard@2.0.0 to production...', level: 'info' },
  { time: '03:42:28', agent: 'BERT', msg: 'Deploy complete. CDN cache purged.', level: 'success' },
  { time: '03:42:29', agent: 'IRIS', msg: 'Found 4 high-signal threads on AI agent frameworks', level: 'info' },
  { time: '03:42:30', agent: 'ATHENA', msg: 'Heartbeat check complete. No anomalies detected.', level: 'success' },
  { time: '03:42:31', agent: 'SYSTEM', msg: 'Next scheduled sync: 04:00:00 UTC', level: 'info' },
  { time: '03:42:32', agent: 'MUSE', msg: 'LinkedIn post engagement: +340% vs baseline', level: 'success' },
]

const levelColors = {
  info: 'text-neon-blue',
  success: 'text-neon-green',
  warn: 'text-yellow-400',
  error: 'text-neon-pink',
}

export default function TerminalWidget() {
  return (
    <div className="glass-card gradient-border rounded-xl p-4 animate-section-enter section-delay-5 overflow-hidden">
      <div className="flex items-center gap-3 mb-3">
        <div className="flex gap-1.5">
          <div className="w-2.5 h-2.5 rounded-full bg-red-500/80"></div>
          <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/80"></div>
          <div className="w-2.5 h-2.5 rounded-full bg-green-500/80"></div>
        </div>
        <span className="text-[10px] font-mono text-slate-500 uppercase tracking-widest">agent_logs — polarity-core</span>
        <div className="flex-1"></div>
        <div className="flex items-center gap-1.5">
          <div className="w-1.5 h-1.5 rounded-full bg-neon-green animate-pulse"></div>
          <span className="text-[10px] font-mono text-neon-green">streaming</span>
        </div>
      </div>

      <div className="bg-black/40 rounded-lg p-3 h-48 overflow-hidden relative font-mono text-[11px] leading-relaxed">
        {/* Duplicate for infinite scroll illusion */}
        <div className="animate-terminal-scroll">
          {[...logs, ...logs].map((log, i) => (
            <div key={i} className="flex gap-2 mb-1 whitespace-nowrap">
              <span className="text-slate-600">{log.time}</span>
              <span className="text-slate-500">[</span>
              <span className={`${levelColors[log.level]} font-semibold w-16 inline-block`}>{log.agent}</span>
              <span className="text-slate-500">]</span>
              <span className={levelColors[log.level]}>{log.msg}</span>
            </div>
          ))}
        </div>
        
        {/* Fade gradients */}
        <div className="absolute top-0 left-0 right-0 h-6 bg-gradient-to-b from-black/40 to-transparent pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 right-0 h-6 bg-gradient-to-t from-black/40 to-transparent pointer-events-none"></div>
      </div>
    </div>
  )
}
