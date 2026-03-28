# 🚀 Polarity Labs Dashboard - Deployment Guide

## ✅ Project Status: COMPLETE & READY TO DEPLOY

Your Polarity Labs Dashboard is **fully built, tested, and ready for production**.

---

## 📸 What You Have

A **premium dark-mode AI agent command center** featuring:

✅ **Agent Team Display** - Kyle (CEO) + 7 AI agents with emojis, roles, and models  
✅ **Content Pipeline** - 6-stage visual pipeline (Inbox → Selected → Briefed → Drafted → Approved → Posted)  
✅ **Project Tracker** - 4 projects with progress bars (Lacking Inputs, NetScope, Maven, Zealist)  
✅ **Activity Feed** - Live agent activity stream with color-coded agents  
✅ **Responsive Design** - Looks amazing on all screen sizes  
✅ **Social Media Optimized** - Perfect for LinkedIn/Twitter screenshots  

**Tech Stack:**
- Next.js 15.5 (latest)
- Tailwind CSS 3.4
- Static export (no server needed)
- Zero security vulnerabilities

---

## 🌐 Deploy to Vercel (3 Methods)

### Method 1: Vercel CLI (FASTEST)

```bash
# Install Vercel CLI globally
npm install -g vercel

# Navigate to project
cd /data/.openclaw/workspace/polarity-dashboard

# Deploy
vercel --prod
```

**Follow the prompts:**
- Set up and deploy? → **Y**
- Which scope? → Select your account
- Link to existing project? → **N**
- Project name? → `polarity-dashboard`
- Directory? → `./`
- Override settings? → **N**

✅ **Your dashboard will be live in ~60 seconds** at `https://polarity-dashboard.vercel.app`

---

### Method 2: GitHub + Vercel (RECOMMENDED FOR ONGOING WORK)

1. **Push to GitHub:**
```bash
cd /data/.openclaw/workspace/polarity-dashboard
git init
git add .
git commit -m "Initial commit - Polarity Labs Dashboard"
git branch -M main
git remote add origin https://github.com/YOUR-USERNAME/polarity-dashboard.git
git push -u origin main
```

2. **Deploy via Vercel Dashboard:**
- Go to [vercel.com](https://vercel.com)
- Click **"New Project"**
- Import your GitHub repository
- Vercel will auto-detect Next.js settings
- Click **"Deploy"**

✅ **Auto-deploys on every git push**

---

### Method 3: Drag & Drop (EASIEST, NO CLI)

1. **Build the static site:**
```bash
cd /data/.openclaw/workspace/polarity-dashboard
npm run build
```

2. **Deploy:**
- Go to [vercel.com](https://vercel.com)
- Drag the entire `out/` folder onto the Vercel dashboard
- Wait ~30 seconds

✅ **Instant deployment, no GitHub needed**

---

## 📱 Local Preview (Before Deploy)

```bash
cd /data/.openclaw/workspace/polarity-dashboard

# Install dependencies (if not done)
npm install

# Run dev server
npm run dev
```

Open http://localhost:3000 in your browser.

---

## 🎨 Customization Guide

### Update Agent Data

**File:** `components/AgentTeam.js`

```javascript
const agents = [
  { 
    name: 'Kyle', 
    role: 'CEO', 
    emoji: '👑', 
    model: 'Human',
    status: 'leading',
    color: 'from-yellow-400 to-orange-500'
  },
  // Add/edit agents here...
]
```

### Update Pipeline Numbers

**File:** `components/ContentPipeline.js`

```javascript
const stages = [
  { name: 'Inbox', count: 47, color: 'bg-slate-500', icon: '📥' },
  { name: 'Selected', count: 12, color: 'bg-blue-500', icon: '✓' },
  // Update counts here...
]
```

### Update Projects

**File:** `components/ProjectTracker.js`

```javascript
const projects = [
  {
    name: 'Lacking Inputs',
    status: 'Active',
    progress: 65,  // Update progress %
    color: 'green',
    icon: '🎯',
    tasks: '12/18 tasks',  // Update task counts
    updated: '2 hours ago'
  },
  // Add/edit projects...
]
```

### Update Activity Feed

**File:** `components/ActivityFeed.js`

```javascript
const activities = [
  {
    agent: 'Athena',
    emoji: '🦉',
    action: 'Prioritized 5 new content ideas',
    time: '5 min ago',
    color: 'text-purple-400'
  },
  // Add/edit activities...
]
```

After editing, rebuild:
```bash
npm run build
vercel --prod  # or push to GitHub
```

---

## 📸 Perfect Social Media Screenshot

**For LinkedIn/Twitter:**

1. Open dashboard in browser (1920x1080 resolution)
2. Zoom to 100%
3. Screenshot the entire page
4. **Ideal crop: 1200x630** for social posts

**Pro tip:** The header "Polarity Labs | AI Agent Command Center" + the full grid layout makes an impressive hero image.

---

## 🔌 Connect to Notion API (Future Enhancement)

Currently uses **static data** (perfect for v1). To pull real-time data from Notion:

1. **Install Notion SDK:**
```bash
npm install @notionhq/client
```

2. **Get API Key:**
- Go to [notion.so/my-integrations](https://www.notion.so/my-integrations)
- Create new integration
- Copy the API key

3. **Add Environment Variables:**
```bash
# .env.local
NOTION_API_KEY=secret_xxxxxxxxxxxxx
NOTION_DATABASE_ID=xxxxxxxxxxxxx
```

4. **Create API Route:**
Create `app/api/notion/route.js` to fetch from Notion

5. **Update Components:**
Replace static data with API calls

---

## 📦 Project Structure

```
polarity-dashboard/
├── app/
│   ├── layout.js          # Root layout + metadata
│   ├── page.js            # Main dashboard page
│   └── globals.css        # Global styles + Tailwind
├── components/
│   ├── Header.js          # Top header with status
│   ├── AgentTeam.js       # Agent org chart
│   ├── ContentPipeline.js # Pipeline stages
│   ├── ProjectTracker.js  # Project cards
│   └── ActivityFeed.js    # Activity stream
├── out/                   # Static build output (after npm run build)
├── package.json           # Dependencies
├── tailwind.config.js     # Tailwind config
├── next.config.js         # Next.js config
├── jsconfig.json          # Path aliases
├── README.md              # Full documentation
└── DEPLOY.md              # This file
```

---

## 🎯 Next Steps

1. **Deploy Now:** Choose one of the 3 methods above
2. **Take Screenshot:** Use for your LinkedIn/Twitter post
3. **Share URL:** Post the live dashboard link
4. **Customize:** Update agent data, project status, etc.
5. **Iterate:** Wire up Notion API when ready

---

## 🐛 Troubleshooting

**Build fails?**
```bash
rm -rf .next node_modules
npm install
npm run build
```

**Port already in use?**
```bash
# Dev server uses random port if 3000 is taken
npm run dev
```

**Deployment issues?**
- Ensure `output: 'export'` is in `next.config.js` ✅ (already set)
- Check that `npm run build` succeeds locally first
- Vercel auto-detects Next.js, no extra config needed

---

## 💡 Built By

**Atlas 🗺️** - AI Agent Tech Lead  
*Shipped in one session. No iteration. Just vibes.*

---

**Ready to ship? Let's go! 🚀**

Choose your deployment method above and you'll have a live dashboard in under 2 minutes.
