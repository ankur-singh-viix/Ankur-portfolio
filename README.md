# ✦ Ankur Singh —  Developer Portfolio

A **Next.js 14** dark-luxury portfolio with sacred geometry Three.js WebGL, gold/violet spiritual aesthetic, GSAP animations, and fully data-driven content.

---

## ⚡ Quick Start (in VS Code terminal)

```bash
# 1. Install dependencies
npm install

# 2. Run dev server
npm run dev

# 3. Open browser at
http://localhost:3000
```

---

## 📁 Project Structure

```
portfolio/
├── app/
│   ├── layout.tsx        ← SEO metadata — edit your name/description
│   ├── page.tsx          ← Assembles all sections
│   └── globals.css       ← Full design system (CSS variables, fonts, utilities)
│
├── components/
│   ├── Cursor.tsx         ← Custom gold sacred cursor
│   ├── Navbar.tsx         ← Floating glass nav — edit links
│   ├── ThreeScene.tsx     ← Three.js WebGL sacred geometry background
│   ├── Hero.tsx           ← Full-screen hero with typing animation
│   ├── About.tsx          ← Bio + stats — ADD YOUR PHOTO HERE
│   ├── Skills.tsx         ← Tilt cards with skill bars
│   ├── ProjectCard.tsx    ← Reusable project card component
│   ├── Projects.tsx       ← Projects grid section
│   ├── Timeline.tsx       ← Work + Education timeline
│   ├── Contact.tsx        ← Glass contact form + socials
│   └── Footer.tsx         ← Minimal sacred footer
│
├── data/
│   ├── skills.ts          ← ✏️ ADD/EDIT your skills here
│   ├── projects.ts        ← ✏️ ADD/EDIT your projects here
│   └── experience.ts      ← ✏️ ADD/EDIT work + education here
│
├── utils/
│   └── animations.ts      ← GSAP helper functions
│
└── public/
    └── profile.jpg        ← ✏️ PUT YOUR PHOTO HERE (then update About.tsx)
```

---

## ✏️ What to Change

### 1. Your Name & Meta
Edit `app/layout.tsx`:
```tsx
export const metadata: Metadata = {
  title: 'Your Name — Your Title',
  description: 'Your personal description...',
}
```

### 2. Add Your Photo
- Copy your photo to `public/profile.jpg`
- Open `components/About.tsx`
- Find the comment `✏️ REPLACE with your actual photo` and uncomment:
```tsx
<Image src="/profile.jpg" alt="Your Name" fill style={{ objectFit: 'cover' }} />
```

### 3. Edit Skills (`data/skills.ts`)
```ts
{ name: 'React', icon: '⚛️', level: 92, category: 'frontend' },
// level = 0 to 100
// category = 'frontend' | 'backend' | 'ai' | 'tools'
```

### 4. Add Projects (`data/projects.ts`)
```ts
{
  title: 'Your Project Name',
  description: 'Brief description.',
  tech: ['Next.js', 'TypeScript', 'OpenAI'],
  badge: 'AI App',
  liveLink: 'https://your-demo.com',   // or '#' if none
  repoLink: 'https://github.com/...',  // or '#' if private
  accentColor: '#f59e0b',              // any hex color
},
```

### 5. Add Experience/Education (`data/experience.ts`)
```ts
{
  type: 'work',                    // 'work' or 'education'
  date: 'Jun 2024 — Dec 2024',
  role: 'Your Job Title',
  org:  'Company Name',
  description: 'What you did and achieved.',
  tags: ['React', 'Node.js'],
},
```

### 6. Update Social Links (`components/Contact.tsx`)
```tsx
const SOCIALS = [
  { label: 'LinkedIn',  href: 'https://linkedin.com/in/yourhandle', icon: 'linkdin' },
  { label: 'GitHub',    href: 'https://github.com/ankur-singh-viix',      icon: 'github' },
  // ...
]
```

### 7. Change Theme Colors (`app/globals.css`)
```css
:root {
  --gold:   #f59e0b;   /* Primary sacred accent — change to your color */
  --lotus:  #c084fc;   /* Secondary accent */
  --aura:   #818cf8;   /* Tertiary */
}
```

---

## 🚀 Deploy to Vercel (Free)

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel

# Done! Your site is live
```

Or connect your GitHub repo at **vercel.com** for auto-deploys.

---

## 🛠 Tech Stack

| Tech | Purpose |
|---|---|
| Next.js 14 (App Router) | Framework |
| TypeScript | Type safety |
| Tailwind CSS | Utility styling |
| Three.js | WebGL 3D sacred geometry |
| GSAP | Scroll + entrance animations |
| Framer Motion | (available for additional transitions) |

---

## 🙏 Spiritual Design Philosophy

- **Gold** (`#f59e0b`) = Light, wisdom, divine inspiration  
- **Violet** (`#c084fc`) = Transformation, higher consciousness  
- **Indigo** (`#818cf8`) = Intuition, deep knowing  
- **Cinzel** font = Ancient authority, timeless presence  
- **Sacred geometry** = Icosahedron (water/mind), Tetrahedron (fire), Octahedron (air)

---

*"The code we write is a reflection of the clarity within us."*
