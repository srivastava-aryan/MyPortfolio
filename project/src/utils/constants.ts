export const SKILLS = [
  { name: 'React', level: 95, category: 'Frontend' },
  { name: 'TypeScript', level: 80, category: 'Frontend' },
  { name: 'Node.js', level: 88, category: 'Backend' },
  // { name: 'Python', level: 75, category: 'Backend' },
  { name: 'MongoDB', level: 70, category: 'Database' },
  { name: 'PostgreSQL', level: 30, category: 'Database' },
  { name: 'C++ Problem solving', level: 78, category: 'Programming' },
  // { name: 'Docker', level: 75, category: 'DevOps' },
];

export const PROJECTS = [
  {
    id: 1,
    title: 'TrackSub',
    description: 'Full-stack subscription tracker built with React, Node.js, and MongoDB integration.',
    image: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=800',
    technologies: ['React', 'Node.js', 'MongoDB', 'Express'],
    liveUrl: 'https://tracksub.aryansri.tech/',
    githubUrl: 'https://github.com/srivastava-aryan/Tracksub',
  },
  {
    id: 2,
    title: 'Codebase-Navigator',
    description: 'AI-powered platform that lets developers chat with any GitHub repository using Retrieval-Augmented Generation (RAG), delivering accurate answers with source-level traceability.',
    image: 'https://images.pexels.com/photos/3184454/pexels-photo-3184454.jpeg?auto=compress&cs=tinysrgb&w=800',
    technologies: ['LangChain', 'ChromaDB', 'Node.js', 'TypeScript', 'OpenAI'],
    liveUrl: 'https://codebase-nav.onrender.com',
    githubUrl: 'https://github.com/srivastava-aryan/codebase-navigator',
  },
  {
    id: 3,
    title: 'AI Meeting Notes Summarizer',
    description: 'AI-powered meeting summarizer for crisp, actionable notes.',
    image: 'https://images.pexels.com/photos/8386434/pexels-photo-8386434.jpeg?auto=compress&cs=tinysrgb&w=800',
    technologies: ['TypeScript', 'Express', 'OpenAI API', 'Node.js'],
    liveUrl: 'https://aimeet.aryansri.tech',
    githubUrl: 'https://github.com/srivastava-aryan/MangoDesk',
  },
];

export const DSA_PLATFORMS = [
  {
    name: 'LeetCode',
    username: 'your_username',
    solved: 170,
    rating: 1650,
    badge: 'Beginner',
    color: 'from-orange-500 to-yellow-500',
    bgColor: 'bg-orange-50 dark:bg-orange-900/20',
    textColor: 'text-orange-600 dark:text-orange-400',
  },
  {
    name: 'CodeChef',
    username: 'your_username',
    solved: 40,
    rating: 1200,
    badge: '4 Star',
    color: 'from-amber-500 to-orange-500',
    bgColor: 'bg-amber-50 dark:bg-amber-900/20',
    textColor: 'text-amber-600 dark:text-amber-400',
  },
  {
    name: 'Codeforces',
    username: 'your_username',
    solved: 20,
    rating: 1400,
    badge: 'Beginner',
    color: 'from-cyan-500 to-blue-500',
    bgColor: 'bg-cyan-50 dark:bg-cyan-900/20',
    textColor: 'text-cyan-600 dark:text-cyan-400',
  },
  {
    name: 'HackerRank',
    username: 'your_username',
    solved: 70,
    rating: 2100,
    badge: '5 Star',
    color: 'from-green-500 to-emerald-500',
    bgColor: 'bg-green-50 dark:bg-green-900/20',
    textColor: 'text-green-600 dark:text-green-400',
  },
];

export const NAVIGATION = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Contact', href: '#contact' },
];