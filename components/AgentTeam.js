'use client'

const agents = [
  { 
    name: 'Kyle', 
    role: 'CEO', 
    emoji: '👑', 
    model: 'Human',
    status: 'leading',
    glowColor: 'neon-glow-pink',
    borderColor: 'border-t-yellow-400',
    textColor: 'text-yellow-400',
    shadowColor: 'rgba(245, 158, 11, 0.3)',
  },
  { 
    name: 'Athena', 
    role: 'Chief of Staff', 
    emoji: '🦉', 
    model: 'Claude Opus 4.6',
    status: 'active',
    glowColor: 'neon-glow-purple',
    borderColor: 'border-t-neon-purple',
    textColor: 'text-neon-purple',
    shadowColor: 'rgba(191, 0, 255, 0.3)',
  },
  { 
    name: 'Bert', 
    role: 'Builder', 
    emoji: '🔧', 
    model: 'Claude Sonnet 4.5',
    status: 'active',
    glowColor: 'neon-glow-blue',
    borderColor: 'border-t-neon-blue',
    textColor: 'text-neon-blue',
    shadowColor: 'rgba(0, 212, 255, 0.3)',
  },
  { 
    name: 'Iris', 
    role: 'Researcher', 
    emoji: '🔍', 
    model: 'GPT 5.2',
    status: 'active',
    glowColor: 'neon-glow-green',
    borderColor: 'border-t-neon-green',
    textColor: 'text-neon-green',
    shadowColor: 'rgba(57, 255, 20, 0.3)',
  },
  { 
    name: 'Atlas', 
    role: 'Tech Lead', 
    emoji: '🗺️', 
    model: 'Claude Sonnet 4.5',
    status: 'active',
    glowColor: 'neon-glow-purple',
    borderColor: 'border-t-indigo-400',
    textColor: 'text-indigo-400',
    shadowColor: 'rgba(129, 140, 248, 0.3)',
  },
  { 
    name: 'Hermes', 
    role: 'Messenger', 
    emoji: '📨', 
    model: 'Claude Sonnet 4.5',
    status: 'active',
    glowColor: 'neon-glow-blue',
    borderColor: 'border-t-cyan-400',
    textColor: 'text-cyan-400',
    shadowColor: 'rgba(34, 211, 238, 0.3)',
  },
  { 
    name: 'Muse', 
    role: 'Head of Content', 
    emoji: '🎬', 
    model: 'Claude Sonnet 4.5',
    status: 'active',
    glowColor: 'neon-glow-pink',
    borderColor: 'border-t-neon-pink',
    textColor: 'text-neon-pink',
    shadowColor: 'rgba(255, 0, 110, 0.3)',
  },
  { 
    name: 'Scribe', 
    role: 'Writer', 
    emoji: '✍️', 
    model: 'Claude Sonnet 4.5',
    status: 'active',
    glowColor: 'neon-glow-purple',
    borderColor: 'border-t-violet-400',
    textColor: 'text-violet-400',
    shadowColor: 'rgba(167, 139, 250, 0.3)',
  },
]

function AgentCard({ agent, index, isCeo }) {
  return (
    <div 
      className={`glass-card holo-shimmer rounded-xl p-4 border-t-2 ${agent.borderColor} animate-breathe group relative overflow-hidden`}
      style={{ 
        animationDelay: `${index * 0.4}s`,
        boxShadow: `0 0 20px ${agent.shadowColor.replace('0.3', '0.1')}`
      }}
    >
      {/* Glow border top */}
      <div 
        className="absolute top-0 left-0 right-0 h-[2px] animate-neon-pulse"
        style={{ boxShadow: `0 0 10px ${agent.shadowColor}, 0 0 20px ${agent.shadowColor.replace('0.3', '0.15')}` }}
      ></div>

      <div className="flex items-start gap-3 mb-3">
        <div className="text-2xl group-hover:scale-125 transition-transform duration-300">{agent.emoji}</div>
        <div className="flex-1 min-w-0">
          <h3 className={`text-base font-bold text-white truncate ${isCeo ? 'text-lg' : ''}`}>{agent.name}</h3>
          <p className={`text-sm font-medium truncate ${agent.textColor}`}>{agent.role}</p>
        </div>
      </div>
      <div className="text-xs text-slate-500 font-mono mb-2">{agent.model}</div>
      <div className="flex items-center gap-2">
        <div className="w-1.5 h-1.5 rounded-full bg-neon-green animate-pulse"></div>
        <span className="text-xs text-neon-green font-mono uppercase tracking-wider">{agent.status}</span>
      </div>
    </div>
  )
}

export default function AgentTeam() {
  const ceo = agents[0]
  const team = agents.slice(1)

  return (
    <div className="glass-card gradient-border rounded-xl p-6 animate-section-enter section-delay-1">
      <div className="flex items-center gap-3 mb-6">
        <h2 className="text-2xl font-bold text-white">Agent Team</h2>
        <span className="text-xs font-mono text-slate-500 bg-polarity-darker/80 px-2 py-1 rounded border border-polarity-border">
          {agents.length} agents
        </span>
      </div>
      
      {/* CEO at the top */}
      <div className="flex justify-center mb-8">
        <div className="w-72">
          <AgentCard agent={ceo} index={0} isCeo={true} />
        </div>
      </div>

      {/* Connection lines visual hint */}
      <div className="flex justify-center mb-4">
        <div className="w-[1px] h-6 bg-gradient-to-b from-yellow-400/40 to-transparent"></div>
      </div>

      {/* Team Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {team.map((agent, index) => (
          <AgentCard key={agent.name} agent={agent} index={index + 1} isCeo={false} />
        ))}
      </div>
    </div>
  )
}
