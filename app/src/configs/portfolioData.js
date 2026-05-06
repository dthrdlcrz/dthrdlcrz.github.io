// src/data/portfolioData.js
// Edit this file to update your portfolio without touching components

export const roles = [
  'Lead Software Developer',
  'Automation Developer',
  '.NET Developer',
  'Full Stack Developer',
]

export const stats = [
  { num: '2+', label: 'Years of experience' },
  { num: '.NET', label: 'C#, ASP.NET, VB.NET' },
  { num: 'UiPath', label: 'Automation Developer' },
]

export const aboutText = [
  "I'm a results-driven Lead Software Developer with 2+ years of experience specializing in .NET development, UI automation, and full-stack web applications.",
  "At PowerSolv Incorporated, I lead the full migration of legacy C++ systems to modern C# architecture, build UI automation tools for engineering workflows, and mentor junior developers — all within an Agile/Scrum environment. Currently advancing toward the UiPath Automation Developer Professional certification.",
  "I'm currently targeting roles in .NET development and automation/RPA, where I can apply my skills in C#, ASP.NET, and process automation to solve real engineering problems.",
]

export const aboutInfo = [
  { label: 'Location', value: 'Santa Maria, Bulacan, PH' },
  { label: 'Role', value: 'Lead Software Developer' },
  { label: 'Education', value: 'BS Computer Engineering — Magna Cum Laude' },
  { label: 'Target Roles', value: '.NET Developer · Automation Developer · RPA Developer' },
  { label: 'Status', value: 'Open to opportunities', green: true },
]

export const experiences = [
  {
    period: 'May 2024 – Present',
    company: 'PowerSolv Incorporated',
    title: 'Lead Software Developer',
    desc: 'Leading the full migration of legacy C++ software to modern C# architecture in Visual Studio. Implemented Jira and Bitbucket for task management and version control, and introduced Agile/Scrum standups to improve team alignment. As sole developer, modernized legacy VB.NET/ASP.NET WebForms applications — refactored outdated codebases, migrated legacy databases, and rebuilt UIs into cleaner, more maintainable designs. Also mentoring junior developers and providing technical support for end-users.',
    tags: ['C# / .NET', 'ASP.NET WebForms', 'VB.NET', 'MS SQL', 'Jira', 'Bitbucket', 'Agile / Scrum', 'Team Leadership'],
  },
  {
    period: 'Oct 2023 – May 2024',
    company: 'PowerSolv Incorporated',
    title: 'Junior Software Developer',
    desc: 'Designed and developed power system applications using C++ and Embarcadero RAD Studio. Sole developer on a full modernization of a legacy web-based app using VB.NET, ASP.NET, and MS SQL — refactored core logic from single-threaded to multi-threaded, delivering significantly faster performance and a cleaner user experience.',
    tags: ['C++', 'ASP.NET', 'VB.NET', 'MS SQL', 'Embarcadero IDE'],
  },
]

export const projects = [
  {
    num: '01',
    name: 'Distribution System Analysis Software (DSAS)',
    desc: 'Comprehensive power system analysis platform used by electric cooperatives and distribution utilities. Includes modules for load flow, loss segregation, reliability analysis, and short circuit studies. Maintained and enhanced the legacy codebase to ensure stability, improved computational accuracy, and delivered continuous patch updates for production deployments.',
    tags: ['C++', 'Embarcadero RAD Studio', 'Power Systems'],
    private: true,
  },
  {
    num: '02',
    name: 'Distribution Planning and Operations Software (DPOS)',
    desc: 'Next-generation platform built from the ground up to support advanced planning and operational analysis for distribution utilities. Designed to replace legacy systems with a scalable, maintainable architecture integrating multiple engineering analysis modules — including forecasting, simulation, and decision support.',
    tags: ['C++', 'Embarcadero RAD Studio', 'Power Systems'],
    private: true,
  },
  {
    num: '03',
    name: 'DSAS Web-Based System',
    desc: 'Sole developer on the full modernization of a legacy VB.NET and ASP.NET WebForms web-based application. Refactored outdated codebases, migrated and optimized legacy databases, and rebuilt the UI into a cleaner, more intuitive design. Converted core processing logic from single-threaded to multi-threaded execution, resulting in significantly improved speed and responsiveness.',
    tags: ['VB.NET', 'ASP.NET WebForms', 'MS SQL', 'Multi-threading'],
    private: true,
  },
  {
    num: '04',
    name: 'Legacy Software Migration (C++ to C#)',
    desc: 'Led the migration of DSAS and DPOS from legacy unmanaged C++ into modern managed C# architecture. Translated complex engineering logic while maintaining backward compatibility of core computational logic. Introduced multi-threading for performance gains, implemented an online patch update system, and improved overall maintainability, scalability, and developer productivity.',
    tags: ['C++', 'C#', '.NET', 'Multi-threading', 'Visual Studio'],
    private: true,
  },
  {
    num: '05',
    name: 'UI Automation for Engineering Workflows',
    desc: 'Automation system built using UiPath Studio to streamline repetitive engineering processes. Automated end-to-end workflows including data input, processing, and report generation using UiPath Studio, Robots, and Assistant — reducing manual intervention, minimizing human error, and improving turnaround time for engineering analysis.',
    tags: ['UiPath Studio', 'UiPath Robots', 'UiPath Assistant', 'RPA'],
    private: true,
  },
]

export const skillGroups = [
  {
    title: 'Languages',
    items: ['C# / .NET Framework', 'C / C++', 'VB.NET', 'Python', 'PHP'],
  },
  {
    title: 'Web Development',
    items: ['ASP.NET / WebForms', 'HTML / CSS / Bootstrap', 'JavaScript / jQuery', 'React', 'Node.js / Express.js'],
  },
  {
    title: 'Tools & Platforms',
    items: ['Microsoft Visual Studio', 'Embarcadero RAD Studio', 'Jira / Bitbucket / GitHub', 'MS SQL / MySQL'],
  },
  {
    title: 'Concepts',
    items: ['UiPath Studio · Robots · Assistant', 'OOP & Design Patterns', 'Agile / Scrum', 'API Integration', 'Team Leadership'],
  },
]

export const certGroups = [
  {
    title: 'UiPath Academy',
    items: [
      { name: 'Automation Explorer' },
      { name: 'Automation Developer Associate' },
      { name: 'Automation Developer Professional', inProgress: true },
    ],
  },
  {
    title: 'Udemy',
    items: [
      { name: 'The Complete Web Development Bootcamp' },
      { name: 'Complete Modern PHP Developer Course 2023' },
    ],
  },
  {
    title: 'freeCodeCamp',
    items: [
      { name: 'Responsive Web Design' },
      { name: 'JavaScript Algorithms & Data Structures' },
    ],
  },
  {
    title: 'Education',
    items: [
      { name: 'BS Computer Engineering' },
      { name: 'Polytechnic University of the Philippines' },
      { name: 'Magna Cum Laude (GPA 1.232)' },
      { name: 'Thesis: Arduino-based Diabetes Detection' },
    ],
  },
]

export const contactLinks = [
  {
    href: 'mailto:diethergdelacruz@gmail.com',
    label: 'diethergdelacruz@gmail.com',
    type: 'email',
  },
  {
    href: 'https://github.com/dthrdlcrz',
    label: 'GitHub',
    external: true,
    type: 'github',
  },
  {
    href: 'https://linkedin.com/in/dthrdlcrz/',
    label: 'LinkedIn',
    external: true,
    type: 'linkedin',
  },
  {
    href: 'tel:09763306895',
    label: '0976 330 6895',
    type: 'phone',
  },
]
