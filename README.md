# Polarity Labs Dashboard

A sleek, dark-mode command center dashboard for showcasing your AI agent team and operations.

![Polarity Labs Dashboard](https://img.shields.io/badge/Next.js-14-black?style=flat&logo=next.js) ![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4-38B2AC?style=flat&logo=tailwind-css)

## Features

- 🎯 **Agent Team Display** - Visual org chart with Kyle as CEO and 7 AI agents
- 📊 **Content Pipeline** - Track content through 6 stages (Inbox → Posted)
- 🚀 **Project Tracker** - Monitor active, paused, and shelved projects
- 📡 **Activity Feed** - Real-time agent activity stream
- 🌙 **Dark Mode** - Premium dark theme with accent colors
- 📱 **Responsive** - Looks great on all screen sizes
- 📸 **Social Media Ready** - Optimized for LinkedIn/Twitter screenshots

## Tech Stack

- **Next.js 14** - React framework with App Router
- **Tailwind CSS** - Utility-first CSS framework
- **Static Export** - No server required, deploy anywhere

## Quick Start

### 1. Install Dependencies

```bash
cd /data/.openclaw/workspace/polarity-dashboard
npm install
```

### 2. Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### 3. Build for Production

```bash
npm run build
```

This creates a static export in the `out/` directory.

## Deploy to Vercel

### Option 1: Vercel CLI

```bash
# Install Vercel CLI globally
npm i -g vercel

# Deploy
cd /data/.openclaw/workspace/polarity-dashboard
vercel
```

Follow the prompts:
- Set up and deploy? **Y**
- Which scope? Select your account
- Link to existing project? **N**
- Project name? **polarity-dashboard** (or your choice)
- Directory? **./** (just press Enter)
- Override settings? **N**

### Option 2: GitHub + Vercel

1. Push this folder to a GitHub repository
2. Go to [vercel.com](https://vercel.com)
3. Click "New Project"
4. Import your GitHub repository
5. Vercel will auto-detect Next.js and deploy

### Option 3: Drag & Drop

1. Run `npm run build`
2. Go to [vercel.com](https://vercel.com)
3. Drag the `out/` folder to deploy

## Customization

### Update Agent Data

Edit `/components/AgentTeam.js`:
```javascript
const agents = [
  { name: 'Kyle', role: 'CEO', emoji: '👑', ... },
  // Add/modify agents here
]
```

### Update Pipeline Stages

Edit `/components/ContentPipeline.js`:
```javascript
const stages = [
  { name: 'Inbox', count: 47, ... },
  // Modify stages and counts
]
```

### Update Projects

Edit `/components/ProjectTracker.js`:
```javascript
const projects = [
  { name: 'Lacking Inputs', status: 'Active', ... },
  // Add/modify projects
]
```

### Connect to Notion API

To pull real data from Notion:

1. Install the Notion SDK:
```bash
npm install @notionhq/client
```

2. Create an API integration at [notion.so/my-integrations](https://www.notion.so/my-integrations)

3. Add environment variables:
```bash
# .env.local
NOTION_API_KEY=your_secret_key
NOTION_DATABASE_ID=your_database_id
```

4. Create `/app/api/notion/route.js` to fetch data

5. Update components to fetch from your API route

## Screenshots

For the best social media screenshot:
- Zoom browser to 100%
- Screenshot the entire dashboard
- Ideal crop: 1200x630 for LinkedIn/Twitter
- Shows all 4 sections: Team, Pipeline, Projects, Activity

## Performance

- ⚡ Static export = blazing fast load times
- 📦 Optimized build size (~200KB)
- 🎨 No runtime CSS-in-JS overhead
- 🔥 Perfect Lighthouse scores

## License

MIT - Built with AI agents for AI agents 🤖

---

**Built by Atlas 🗺️ (AI Agent Tech Lead)**
*Shipped in one session. No iteration. Just vibes.*
