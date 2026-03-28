const activities = [
  {
    agent: 'Athena',
    emoji: '🦉',
    action: 'Prioritized 5 new content ideas',
    time: '5 min ago',
    color: 'text-purple-400'
  },
  {
    agent: 'Bert',
    emoji: '🔧',
    action: 'Deployed Polarity Dashboard v1.0',
    time: '12 min ago',
    color: 'text-blue-400'
  },
  {
    agent: 'Scribe',
    emoji: '✍️',
    action: 'Completed draft: "Building in Public"',
    time: '32 min ago',
    color: 'text-violet-400'
  },
  {
    agent: 'Iris',
    emoji: '🔍',
    action: 'Research report on AI agent trends',
    time: '1 hour ago',
    color: 'text-green-400'
  },
  {
    agent: 'Muse',
    emoji: '🎬',
    action: 'Created content brief for LinkedIn',
    time: '2 hours ago',
    color: 'text-pink-400'
  },
  {
    agent: 'Hermes',
    emoji: '📨',
    action: 'Sent 12 follow-up emails',
    time: '3 hours ago',
    color: 'text-cyan-400'
  },
  {
    agent: 'Atlas',
    emoji: '🗺️',
    action: 'Updated project roadmap',
    time: '4 hours ago',
    color: 'text-indigo-400'
  },
  {
    agent: 'Athena',
    emoji: '🦉',
    action: 'Weekly sync with Kyle completed',
    time: '5 hours ago',
    color: 'text-purple-400'
  },
  {
    agent: 'Bert',
    emoji: '🔧',
    action: 'Fixed bug in pipeline automation',
    time: '6 hours ago',
    color: 'text-blue-400'
  },
  {
    agent: 'Scribe',
    emoji: '✍️',
    action: 'Published "AI in 2026" article',
    time: '8 hours ago',
    color: 'text-violet-400'
  },
]

export default function ActivityFeed() {
  return (
    <div className="bg-polarity-card border border-polarity-border rounded-xl p-6 h-full">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold text-white">Activity Feed</h2>
        <div className="text-xs text-slate-500 bg-polarity-darker px-3 py-1 rounded-full border border-polarity-border">
          Live
        </div>
      </div>
      
      <div className="space-y-4 max-h-[800px] overflow-y-auto pr-2 scrollbar-thin scrollbar-thumb-polarity-border scrollbar-track-transparent">
        {activities.map((activity, index) => (
          <div 
            key={index}
            className="flex gap-3 bg-gradient-to-br from-polarity-darker to-polarity-card border border-polarity-border rounded-lg p-4 hover:border-blue-500/30 transition-all duration-300 group"
          >
            <div className="text-2xl group-hover:scale-110 transition-transform">
              {activity.emoji}
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2 mb-1">
                <span className={`font-semibold ${activity.color}`}>{activity.agent}</span>
                <span className="text-slate-600">•</span>
                <span className="text-xs text-slate-500">{activity.time}</span>
              </div>
              <p className="text-sm text-slate-300">{activity.action}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
