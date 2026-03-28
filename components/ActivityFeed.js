'use client'

const activities = [
  {
    agent: 'Athena',
    emoji: '🦉',
    action: 'Prioritized 5 new content ideas',
    time: '5 min ago',
    color: 'text-neon-purple',
  },
  {
    agent: 'Bert',
    emoji: '🔧',
    action: 'Deployed Polarity Dashboard v1.0',
    time: '12 min ago',
    color: 'text-neon-blue',
  },
  {
    agent: 'Scribe',
    emoji: '✍️',
    action: 'Completed draft: "Building in Public"',
    time: '32 min ago',
    color: 'text-violet-400',
  },
  {
    agent: 'Iris',
    emoji: '🔍',
    action: 'Research report on AI agent trends',
    time: '1 hour ago',
    color: 'text-neon-green',
  },
  {
    agent: 'Muse',
    emoji: '🎬',
    action: 'Created content brief for LinkedIn',
    time: '2 hours ago',
    color: 'text-neon-pink',
  },
  {
    agent: 'Hermes',
    emoji: '📨',
    action: 'Sent 12 follow-up emails',
    time: '3 hours ago',
    color: 'text-cyan-400',
  },
  {
    agent: 'Atlas',
    emoji: '🗺️',
    action: 'Updated project roadmap',
    time: '4 hours ago',
    color: 'text-indigo-400',
  },
  {
    agent: 'Athena',
    emoji: '🦉',
    action: 'Weekly sync with Kyle completed',
    time: '5 hours ago',
    color: 'text-neon-purple',
  },
  {
    agent: 'Bert',
    emoji: '🔧',
    action: 'Fixed bug in pipeline automation',
    time: '6 hours ago',
    color: 'text-neon-blue',
  },
  {
    agent: 'Scribe',
    emoji: '✍️',
    action: 'Published "AI in 2026" article',
    time: '8 hours ago',
    color: 'text-violet-400',
  },
]

export default function ActivityFeed() {
  return (
    <div className="glass-card gradient-border rounded-xl p-6 h-full animate-section-enter section-delay-4">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold text-white">Activity Feed</h2>
        <div className="flex items-center gap-2 bg-red-500/10 border border-red-500/30 rounded-full px-3 py-1">
          <div className="live-dot"></div>
          <span className="text-[10px] font-bold text-red-400 uppercase tracking-widest">Live</span>
        </div>
      </div>
      
      <div className="space-y-3 max-h-[800px] overflow-y-auto pr-1">
        {activities.map((activity, index) => (
          <div 
            key={index}
            className="glass-card holo-shimmer rounded-lg p-3 border border-polarity-border/30 animate-slide-in group"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <div className="flex gap-3">
              <div className="text-xl group-hover:scale-125 transition-transform duration-300">
                {activity.emoji}
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-0.5">
                  <span className={`font-semibold text-sm ${activity.color}`}>{activity.agent}</span>
                  <span className="text-slate-700">•</span>
                  <span className="text-[10px] text-slate-600 font-mono">{activity.time}</span>
                </div>
                <p className="text-xs text-slate-400">{activity.action}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
