// ================================================
// ✏️ EXPERIENCE & EDUCATION DATA
// Add as many entries as you need.
// ================================================

export interface TimelineEntry {
  type:        'work' | 'education'
  date:        string
  role:        string      // Job title or Degree
  org:         string      // Company or University
  location?:   string
  description: string
  tags:        string[]
}

export const TIMELINE: TimelineEntry[] = [

  // ── Education ────────────────────────────────

  {
  type: 'education',
  date: '2022',
  role: 'Senior Secondary (PCM with Mathematics)',
  org: 'The Skyland Global Academy',
  location: 'Shahpur, Muzaffarnagar, India',
  description:
    'Completed Senior Secondary education with Physics, Chemistry, and Mathematics. Built strong analytical foundations in mathematics and problem-solving, which later supported my journey into programming and AI.',
  tags: ['Mathematics', 'Physics', 'Chemistry', 'Analytical Thinking'],
},

  {
    type: 'education',
    date: '2023 — Present',
    role: 'B.Sc[Hons] in Data Science and Artificial Intelligence',
    org:  'IIT Guwahati',
    location: 'Guwahati, India',
    description:
      'Pursuing a rigorous program in Web development and AI at one of India\'s premier institutes. Deep foundations in mathematics, algorithms, machine learning, and systems design.',
    tags: ['Web Development', 'AI/ML', 'Algorithms', 'c++','Java','Go','Python', 'Statistics'],
  },

  // ✏️ ADD MORE ENTRIES BELOW:
  // {
  //   type: 'work',
  //   date: 'Month Year — Month Year',
  //   role: 'Your Role',
  //   org:  'Company Name',
  //   description: 'What you accomplished.',
  //   tags: ['Tag1', 'Tag2'],
  // },
]
