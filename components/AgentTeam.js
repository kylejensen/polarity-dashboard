const agents = [
  { 
    name: 'Kyle', 
    role: 'CEO', 
    emoji: '👑', 
    model: 'Human',
    status: 'leading',
    color: 'from-yellow-400 to-orange-500'
  },
  { 
    name: 'Athena', 
    role: 'Chief of Staff', 
    emoji: '🦉', 
    model: 'Claude Opus 4.6',
    status: 'active',
    color: 'from-purple-400 to-pink-500'
  },
  { 
    name: 'Bert', 
    role: 'Builder', 
    emoji: '🔧', 
    model: 'Claude Sonnet 4.5',
    status: 'active',
    color: 'from-blue-400 to-cyan-500'
  },
  { 
    name: 'Iris', 
    role: 'Researcher', 
    emoji: '🔍', 
    model: 'GPT 5.2',
    status: 'active',
    color: 'from-green-400 to-emerald-500'
  },
  { 
    name: 'Atlas', 
    role: 'Tech Lead', 
    emoji: '🗺️', 
    model: 'Claude Sonnet 4.5',
    status: 'active',
    color: 'from-indigo-400 to-purple-500'
  },
  { 
    name: 'Hermes', 
    role: 'Messenger', 
    emoji: '📨', 
    model: 'Claude Sonnet 4.5',
    status: 'active',
    color: 'from-cyan-400 to-blue-500'
  },
  { 
    name: 'Muse', 
    role: 'Head of Content', 
    emoji: '🎬', 
    model: 'Claude Sonnet 4.5',
    status: 'active',
    color: 'from-pink-400 to-rose-500'
  },
  { 
    name: 'Scribe', 
    role: 'Writer', 
    emoji: '✍️', 
    model: 'Claude Sonnet 4.5',
    status: 'active',
    color: 'from-violet-400 to-purple-500'
  },
]

export default function AgentTeam() {
  const ceo = agents[0]
  const team = agents.slice(1)

  return (
    <div className="bg-polarity-card border border-polarity-border rounded-xl p-6">
      <h2 className="text-2xl font-bold text-white mb-6">Agent Team</h2>
      
      {/* CEO at the top */}
      <div className="flex justify-center mb-8">
        <div className="bg-gradient-to-br from-polarity-darker to-polarity-card border border-polarity-border rounded-xl p-4 w-64 hover:border-yellow-500/50 transition-all duration-300 glow-yellow">
          <div className="flex items-center gap-3 mb-2">
            <div className="text-3xl">{ceo.emoji}</div>
            <div className="flex-1">
              <h3 className="text-lg font-bold text-white">{ceo.name}</h3>
              <p className="text-sm text-yellow-400 font-medium">{ceo.role}</p>
            </div>
            <div className={`px-2 py-1 rounded-full text-xs font-semibold bg-gradient-to-r ${ceo.color} text-white`}>
              {ceo.status}
            </div>
          </div>
          <div className="text-xs text-slate-500 font-mono">{ceo.model}</div>
        </div>
      </div>

      {/* Team Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {team.map((agent) => (
          <div 
            key={agent.name}
            className="bg-gradient-to-br from-polarity-darker to-polarity-card border border-polarity-border rounded-xl p-4 hover:border-blue-500/50 transition-all duration-300 hover:glow group"
          >
            <div className="flex items-start gap-3 mb-3">
              <div className="text-2xl group-hover:scale-110 transition-transform">{agent.emoji}</div>
              <div className="flex-1 min-w-0">
                <h3 className="text-base font-bold text-white truncate">{agent.name}</h3>
                <p className="text-sm text-blue-400 font-medium truncate">{agent.role}</p>
              </div>
            </div>
            <div className="text-xs text-slate-500 font-mono mb-2">{agent.model}</div>
            <div className={`inline-flex px-2 py-1 rounded-full text-xs font-semibold bg-gradient-to-r ${agent.color} text-white`}>
              {agent.status}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
