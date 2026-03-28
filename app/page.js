import AgentTeam from '@/components/AgentTeam'
import ContentPipeline from '@/components/ContentPipeline'
import ProjectTracker from '@/components/ProjectTracker'
import ActivityFeed from '@/components/ActivityFeed'
import Header from '@/components/Header'
import TerminalWidget from '@/components/TerminalWidget'

export default function Home() {
  return (
    <>
      {/* Scanline overlay */}
      <div className="scanline-overlay"></div>

      {/* Background effects layer */}
      <div className="fixed inset-0 pointer-events-none z-0">
        {/* Dot grid */}
        <div className="absolute inset-0 dot-grid-bg opacity-40"></div>
        
        {/* Glowing orbs */}
        <div className="glow-orb glow-orb-1"></div>
        <div className="glow-orb glow-orb-2"></div>
        <div className="glow-orb glow-orb-3"></div>

        {/* Floating particles */}
        <div className="particles-container">
          {Array.from({ length: 20 }, (_, i) => (
            <div key={i} className="particle"></div>
          ))}
        </div>
      </div>

      <main className="relative z-10 min-h-screen p-4 md:p-6 lg:p-8">
        <div className="max-w-[1400px] mx-auto space-y-6">
          <Header />
          
          <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
            {/* Main content - 2 columns */}
            <div className="xl:col-span-2 space-y-6">
              <AgentTeam />
              <ContentPipeline />
              <ProjectTracker />
              <TerminalWidget />
            </div>
            
            {/* Sidebar - 1 column */}
            <div className="xl:col-span-1">
              <ActivityFeed />
            </div>
          </div>

          {/* Footer */}
          <div className="text-center py-6">
            <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-neon-blue/20 to-transparent mb-4"></div>
            <p className="text-[10px] font-mono text-slate-600 uppercase tracking-[0.3em]">
              Polarity Labs © 2026 — Built by humans & agents
            </p>
          </div>
        </div>
      </main>
    </>
  )
}
