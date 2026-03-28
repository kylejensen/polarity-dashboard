'use client'

const projects = [
  {
    name: 'Lacking Inputs',
    status: 'Active',
    progress: 65,
    color: 'green',
    icon: '🎯',
    tasks: '12/18 tasks',
    updated: '2 hours ago'
  },
  {
    name: 'NetScope',
    status: 'Paused',
    progress: 40,
    color: 'yellow',
    icon: '🌐',
    tasks: '8/20 tasks',
    updated: '3 days ago'
  },
  {
    name: 'Maven',
    status: 'Paused',
    progress: 30,
    color: 'yellow',
    icon: '📊',
    tasks: '6/20 tasks',
    updated: '1 week ago'
  },
  {
    name: 'Zealist',
    status: 'Shelved',
    progress: 15,
    color: 'gray',
    icon: '📦',
    tasks: '3/20 tasks',
    updated: '2 weeks ago'
  },
]

const statusColors = {
  green: {
    bg: 'bg-neon-green/10',
    text: 'text-neon-green',
    border: 'border-neon-green/30',
    progress: 'from-neon-green/80 to-neon-green',
    glow: 'rgba(57, 255, 20, 0.15)',
    barGlow: '0 0 8px rgba(57, 255, 20, 0.4)',
  },
  yellow: {
    bg: 'bg-yellow-500/10',
    text: 'text-yellow-400',
    border: 'border-yellow-500/30',
    progress: 'from-yellow-500/80 to-yellow-400',
    glow: 'rgba(245, 158, 11, 0.15)',
    barGlow: '0 0 8px rgba(245, 158, 11, 0.4)',
  },
  gray: {
    bg: 'bg-slate-500/10',
    text: 'text-slate-400',
    border: 'border-slate-500/30',
    progress: 'from-slate-500/80 to-slate-400',
    glow: 'rgba(100, 116, 139, 0.15)',
    barGlow: '0 0 8px rgba(100, 116, 139, 0.4)',
  }
}

export default function ProjectTracker() {
  return (
    <div className="glass-card gradient-border rounded-xl p-6 animate-section-enter section-delay-3">
      <div className="flex items-center gap-3 mb-6">
        <h2 className="text-2xl font-bold text-white">Project Tracker</h2>
        <div className="flex-1 h-[1px] bg-gradient-to-r from-neon-purple/20 to-transparent"></div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {projects.map((project, index) => {
          const colors = statusColors[project.color]
          return (
            <div 
              key={project.name}
              className={`glass-card holo-shimmer rounded-xl p-5 border ${colors.border} hover:scale-[1.02] transition-all duration-300 animate-breathe`}
              style={{ 
                animationDelay: `${index * 0.5}s`,
                boxShadow: `0 0 20px ${colors.glow}`
              }}
            >
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="text-3xl">{project.icon}</div>
                  <div>
                    <h3 className="text-lg font-bold text-white">{project.name}</h3>
                    <p className="text-xs text-slate-500 font-mono">{project.tasks}</p>
                  </div>
                </div>
                <div className={`${colors.bg} ${colors.text} px-3 py-1 rounded-full text-[10px] font-bold border ${colors.border} uppercase tracking-wider`}>
                  {project.status}
                </div>
              </div>

              {/* Animated Progress bar */}
              <div className="mb-3">
                <div className="flex items-center justify-between text-xs mb-2">
                  <span className="text-slate-500 font-mono uppercase tracking-wider">Progress</span>
                  <span className={`font-bold font-mono ${colors.text}`}>{project.progress}%</span>
                </div>
                <div className="w-full bg-polarity-darker/80 rounded-full h-2 overflow-hidden relative">
                  <div 
                    className={`h-full bg-gradient-to-r ${colors.progress} rounded-full animate-progress progress-delay-${index + 1}`}
                    style={{ 
                      width: `${project.progress}%`,
                      boxShadow: colors.barGlow
                    }}
                  />
                </div>
              </div>

              <div className="text-[10px] text-slate-600 font-mono">
                Updated {project.updated}
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
