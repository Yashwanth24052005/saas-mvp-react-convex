# SaaS MVP – React + Convex

📊 A simple **full-stack SaaS MVP** built with **React + Convex**.  
Features real-time docs, a Kanban-style task board, and a live analytics dashboard.

---

## 🚀 Tech Stack
- [React (Vite + TypeScript)](https://react.dev/)
- [Convex](https://convex.dev/) – realtime backend
- [Recharts](https://recharts.org/) – charts
- Plain CSS (custom styling)

---

## 🛠️ Setup & Run

### Prerequisites
- Node.js 18+
- npm (comes with Node.js)
- Convex CLI (`npm install -g convex`)

### Steps
``bash
# 1. Clone this repo
git clone https://github.com/Yashwanth24052005/saas-mvp-react-convex.git
cd saas-mvp-react-convex

# 2. Install dependencies
npm install
This prints a public URL like:

https://nice-sky-123.convex.cloud

Configure environment

Create a file called .env.local in the project root:

VITE_CONVEX_URL=https://nice-sky-123.convex.cloud
Run the app
npm run dev


Now open http://localhost:5173
 🎉

✨ Features

Create and edit Docs

Simple Kanban Tasks (todo → doing → done)

Dashboard with KPIs (docs count, tasks count, completion %)

Real-time updates powered by Convex

⚠️ Warning

Do not commit your .env.local file (it contains secrets).

Do not commit node_modules/ (it makes the repo heavy).
Make sure you have a proper .gitignore:

node_modules/
.env.local






# 3. Start Convex (opens browser to link your project)
convex dev
