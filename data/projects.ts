// ================================================
// ✏️ PROJECTS DATA
// Add, remove, or edit projects freely.
// ================================================

export interface Project {
  title:       string
  description: string
  tech:        string[]
  badge:       string
  liveLink:    string
  repoLink:    string
  accentColor: string  // hex or CSS color for preview gradient
}

export const PROJECTS: Project[] = [
  {
    title: 'Real-Time Ride Matching System',
    description:
    'Developed a proximity-based ride allocation engine using Redis GEO indexing to identify nearest drivers. Built bidirectional WebSocket communication achieving sub-150ms real-time ride updates and handled concurrency using atomic confirmation logic and JWT authentication.',
    tech: ['MongoDB', 'Redis GEO', 'WebSockets', 'JWT'],
    badge: 'Real-Time System',
    liveLink: '#',        // ✏️ Replace with your live URL
    repoLink: 'https://github.com/ankur-singh-viix/Uber_Backend_Node',        // ✏️ Replace with your GitHub repo URL
    accentColor: '#f59e0b',
  },
  {
    title: 'Hotel Management Backend',
    description:
      'Intelligent Node.js CLI that generates beautiful, production-ready websites from plain English using local LLMs (Ollama). Describe your site — get complete code in seconds.',
    tech: ['JavaScript', 'Node.js', 'OLLAMA','Mistral API'],
    badge: 'Management System',
    liveLink: '#',
    repoLink: 'https://github.com/ankur-singh-viix/Airbnb_dev/tree/main/Backend_Projects',
    accentColor: '#c084fc',
  },
  {
    title: 'Field Force Tracker (Full Stack)',
    description:
      'Retrieval-Augmented Generation chatbot powered by LangChain.js. Have intelligent conversations with your PDF documents. Supports Google Gemini and local Ollama models.',
    tech: ['React', 'Node.js', 'LangChain', 'Google Gemini', 'Express'],
    badge: 'Check it out',
    liveLink: '#',
    repoLink: 'https://github.com/ankur-singh-viix/Field-_Force-_Tracker_Nodejs',
    accentColor: '#818cf8',
  },
    {
    title: 'Group videocalling System',
    description:
    'Built a scalable video calling backend using Node.js, WebRTC, and Redis for signaling. Implemented real-time peer-to-peer connections with efficient room management and dynamic scaling to support multiple concurrent users.',
    tech: ['Node.js', 'WebRTC', 'Redis', 'Socket.IO'],
    badge: 'Real-Time Communication System',
    liveLink: '#',        // ✏️ Replace with your live URL
    repoLink: 'https://github.com/ankur-singh-viix/Video_Calling_App_Backend',        // ✏️ Replace with your GitHub repo URL
    accentColor: '#f59e0b',
  },
  // ✏️ ADD MORE PROJECTS BELOW following the same pattern:
  // {
  //   title: 'Your Project',
  //   description: 'What it does.',
  //   tech: ['Tech1', 'Tech2'],
  //   badge: 'Label',
  //   liveLink: 'https://...',
  //   repoLink: 'https://github.com/...',
  //   accentColor: '#22d3ee',
  // },
]
