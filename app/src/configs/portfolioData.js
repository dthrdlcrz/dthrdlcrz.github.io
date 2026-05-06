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
  "I'm a results-driven Lead Software Developer with 2+ years of experience specializing in .NET development, automation, and full-stack web applications.",
  "At PowerSolv Incorporated, I lead the full migration of legacy C++ systems to modern C# architecture, build automation tools for engineering workflows, and mentor junior developers — all within an Agile/Scrum environment. Currently advancing toward the UiPath Automation Developer Professional certification.",
  "I'm actively seeking roles in software development, .NET, web, or automation — where I can apply my expertise in C#, ASP.NET, and process automation to build reliable and impactful solutions.",
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
    desc: 'Leading the full migration of legacy C++ software to modern C# architecture in Visual Studio.  Took initiative in implementing Jira and Bitbucket for task management and version control, and introduced Agile/Scrum standups to improve team alignment and transparency. Maintained and enhanced legacy VB.NET/ASP.NET WebForms applications — resolved bugs, refactored outdated codebases, and improved UI consistency. Applied multi-threading to the newly migrated C# systems to further improve performance and responsiveness. Also mentoring junior developers and providing technical support for end-users.',
    tags: ['C# / .NET', 'C++', 'ASP.NET WebForms', 'VB.NET', 'MS SQL Server', 'Jira', 'Git / Bitbucket', 'Agile / Scrum', 'Embarcadero RAD Studio', 'Power System Applications', 'Team Leadership'],
  },
  {
    period: 'Oct 2023 – May 2024',
    company: 'PowerSolv Incorporated',
    title: 'Junior Software Developer',
    desc: 'Designed and developed power system applications (DSAS and DPOS) using C++ and Embarcadero RAD Studio. Served as sole developer on the full modernization of the DSAS web-based application using VB.NET, ASP.NET, and MS SQL — refactored the core logic from single-threaded to multi-threaded processing, resulting in significantly faster performance and a more responsive user experience.',
    tags: ['C++', 'ASP.NET WebForms', 'VB.NET', 'MS SQL Server', 'Trello', 'Embarcadero RAD Studio', 'Power System Applications'],
  },
]

export const projects = [
  {
    num: '01',
    name: 'Distribution System Analysis Software (DSAS)',
    desc: 'Comprehensive power system analysis platform used by electric cooperatives and distribution utilities. Includes modules for loss segregation, reliability analysis, and short circuit studies. Maintained and enhanced the legacy codebase to ensure stability, improved computational accuracy, and delivered continuous patch updates for production deployments.',
    tags: ['C++', 'Embarcadero RAD Studio', 'Power Systems'],
    private: true,
  },
  {
    num: '02',
    name: 'Distribution Planning and Operations Software (DPOS)',
    desc: 'Power distribution planning and operations software designed to support utilities in technical studies such as load forecasting, line and transformer sizing, substation expansion planning, optimal routing, MVAR mile optimization, and rate analysis. Developed to assist in evaluating distribution system requirements and planning decisions.',
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
      items: ['ASP.NET Core MVC / WebForms', 'HTML / CSS / Bootstrap', 'JavaScript / jQuery', 'React', 'Node.js / Express.js'],
  },
  {
    title: 'Tools & Platforms',
    items: ['UiPath Studio · Robots · Assistant', 'Microsoft Visual Studio', 'Embarcadero RAD Studio', 'Jira / Bitbucket / GitHub', 'MS SQL / MySQL'],
  },
  {
    title: 'Concepts',
      items: ['Automation', 'OOP & Design Patterns', 'Entity Framework Core', 'Agile / Scrum', 'API Integration', 'Team Leadership'],
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
      { name: 'Bulky Web using ASP.NET Core MVC, Entity Framework Core and ASP.NET Identity' },
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
