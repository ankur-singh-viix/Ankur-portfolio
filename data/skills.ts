// ================================================
// ✏️ SKILLS DATA
// Add, remove, or edit entries freely.
// level = 0 to 100 (shown as progress bar)
// ================================================

export interface Skill {
  name:  string
  icon:  string
  level: number
  category: 'frontend' | 'backend' | 'ai' | 'tools'
}

export const SKILLS: Skill[] = [
  // ── Frontend ────────────────────────────────
  { name: 'React',       icon: '⚛️',  level: 92, category: 'frontend' },
  { name: 'Next.js',     icon: '▲',   level: 88, category: 'frontend' },
  { name: 'TypeScript',  icon: '📘',  level: 82, category: 'frontend' },
  { name: 'TailwindCSS', icon: '🎨',  level: 94, category: 'frontend' },
  { name: 'Three.js',    icon: '🔷',  level: 70, category: 'frontend' },

  // ── Backend ─────────────────────────────────
  { name: 'Node.js',     icon: '🟩',  level: 85, category: 'backend' },
  { name: 'Express.js',  icon: '🚂',  level: 82, category: 'backend' },
  { name: 'MongoDB',     icon: '🍃',  level: 80, category: 'backend' },
  { name : 'mySQL', icon: '🐬', level: 78, category: 'backend' },
  { name: 'Go',          icon: '🐹',  level: 75, category: 'backend' },
  { name: 'typescript',    icon: '📘',  level: 82, category: 'backend' },
  { name: 'C++',         icon: '⚙️',  level: 80, category: 'backend' },

  // ── AI / ML ─────────────────────────────────
  // { name: 'LangChain',   icon: '🔗',  level: 85, category: 'ai' },
  { name: 'GenAI',       icon: '🤖',  level: 88, category: 'ai' },
  { name: 'Ollama',      icon: '🦙',  level: 78, category: 'ai' },
  { name: 'RAG Systems', icon: '🧠',  level: 82, category: 'ai' },

  // ── Tools ───────────────────────────────────
  { name: 'Git',         icon: '📦',  level: 90, category: 'tools' },
  // { name: 'AWS',         icon: '☁️',  level: 65, category: 'tools' },
  { name: 'Docker',      icon: '🐳',  level: 68, category: 'tools' },
  { name: 'Linux',       icon: '🐧',  level: 75, category: 'tools' },
  

]
