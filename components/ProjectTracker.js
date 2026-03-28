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
    bg: 'bg-green-500/10',
    text: 'text-green-400',
    border: 'border-green-500/30',
    progress: 'bg-green-500'
  },
  yellow: {
    bg: 'bg-yellow-500/10',
    text: 'text-yellow-400',
    border: 'border-yellow-500/30',
    progress: 'bg-yellow-500'
  },
  gray: {
    bg: 'bg-slate-500/10',
    text: 'text-slate-400',
    border: 'border-slate-500/30',
    progress: 'bg-slate-500'
  }
}

export default function ProjectTracker() {
  return (
    <div className="bg-polarity-card border border-polarity-border rounded-xl p-6">
      <h2 className="text-2xl font-bold text-white mb-6">Project Tracker</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {projects.map((project) => {
          const colors = statusColors[project.color]
          return (
            <div 
              key={project.name}
              className={`bg-gradient-to-br from-polarity-darker to-polarity-card border ${colors.border} rounded-xl p-5 hover:scale-[1.02] transition-all duration-300`}
            >
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="text-3xl">{project.icon}</div>
                  <div>
                    <h3 className="text-lg font-bold text-white">{project.name}</h3>
                    <p className="text-sm text-slate-400">{project.tasks}</p>
                  </div>
                </div>
                <div className={`${colors.bg} ${colors.text} px-3 py-1 rounded-full text-xs font-semibold border ${colors.border}`}>
                  {project.status}
                </div>
              </div>

              {/* Progress bar */}
              <div className="mb-3">
                <div className="flex items-center justify-between text-sm mb-2">
                  <span className="text-slate-400">Progress</span>
                  <span className={`font-semibold ${colors.text}`}>{project.progress}%</span>
                </div>
                <div className="w-full bg-polarity-darker rounded-full h-2 overflow-hidden">
                  <div 
                    className={`h-full ${colors.progress} rounded-full transition-all duration-500`}
                    style={{ width: `${project.progress}%` }}
                  />
                </div>
              </div>

              <div className="text-xs text-slate-500">
                Updated {project.updated}
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
