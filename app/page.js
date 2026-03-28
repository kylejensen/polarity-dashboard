import AgentTeam from '@/components/AgentTeam'
import ContentPipeline from '@/components/ContentPipeline'
import ProjectTracker from '@/components/ProjectTracker'
import ActivityFeed from '@/components/ActivityFeed'
import Header from '@/components/Header'

export default function Home() {
  return (
    <main className="min-h-screen p-6 lg:p-8">
      <div className="max-w-[1400px] mx-auto space-y-6">
        <Header />
        
        <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
          {/* Main content - 2 columns */}
          <div className="xl:col-span-2 space-y-6">
            <AgentTeam />
            <ContentPipeline />
            <ProjectTracker />
          </div>
          
          {/* Sidebar - 1 column */}
          <div className="xl:col-span-1">
            <ActivityFeed />
          </div>
        </div>
      </div>
    </main>
  )
}
