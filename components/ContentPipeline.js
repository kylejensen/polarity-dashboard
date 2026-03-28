const stages = [
  { name: 'Inbox', count: 47, color: 'bg-slate-500', icon: '📥' },
  { name: 'Selected', count: 12, color: 'bg-blue-500', icon: '✓' },
  { name: 'Briefed', count: 8, color: 'bg-purple-500', icon: '📝' },
  { name: 'Drafted', count: 5, color: 'bg-yellow-500', icon: '✏️' },
  { name: 'Approved', count: 3, color: 'bg-green-500', icon: '✅' },
  { name: 'Posted', count: 24, color: 'bg-emerald-500', icon: '🚀' },
]

export default function ContentPipeline() {
  return (
    <div className="bg-polarity-card border border-polarity-border rounded-xl p-6">
      <h2 className="text-2xl font-bold text-white mb-6">Content Pipeline</h2>
      
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
        {stages.map((stage, index) => (
          <div key={stage.name} className="relative">
            <div className="bg-gradient-to-br from-polarity-darker to-polarity-card border border-polarity-border rounded-xl p-4 hover:border-blue-500/50 transition-all duration-300 hover:scale-105">
              <div className="flex flex-col items-center text-center gap-2">
                <div className="text-2xl">{stage.icon}</div>
                <div className={`text-3xl font-bold ${stage.color === 'bg-slate-500' ? 'text-slate-400' : stage.color === 'bg-blue-500' ? 'text-blue-400' : stage.color === 'bg-purple-500' ? 'text-purple-400' : stage.color === 'bg-yellow-500' ? 'text-yellow-400' : stage.color === 'bg-green-500' ? 'text-green-400' : 'text-emerald-400'}`}>
                  {stage.count}
                </div>
                <div className="text-sm text-slate-300 font-medium">{stage.name}</div>
              </div>
            </div>
            
            {/* Arrow connector */}
            {index < stages.length - 1 && (
              <div className="hidden lg:block absolute top-1/2 -right-3 transform -translate-y-1/2 text-slate-600 text-xl z-10">
                →
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="mt-6 pt-6 border-t border-polarity-border">
        <div className="flex items-center justify-between text-sm">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
            <span className="text-slate-400">Pipeline health: <span className="text-green-400 font-semibold">Excellent</span></span>
          </div>
          <div className="text-slate-400">
            Total items: <span className="text-white font-semibold">99</span>
          </div>
        </div>
      </div>
    </div>
  )
}
