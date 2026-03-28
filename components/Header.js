export default function Header() {
  return (
    <div className="mb-8">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            Polarity Labs
          </h1>
          <p className="text-slate-400 mt-2 text-lg">AI Agent Command Center</p>
        </div>
        
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2 bg-polarity-card border border-polarity-border rounded-lg px-4 py-2">
            <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
            <span className="text-sm text-slate-300 font-medium">All Systems Operational</span>
          </div>
        </div>
      </div>
    </div>
  )
}
