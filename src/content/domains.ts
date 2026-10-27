export type Domain = { id: string; name: string; core: boolean; summary: string; topics: string[] }

export const domains: Domain[] = [
  {
    id: 'soft-skills',
    name: 'Soft Skills & Communication',
    core: true,
    summary: 'Workplace communication and career readiness.',
    topics: ['Communication', 'Workplace etiquette', 'Presentation skills', 'Career development'],
  },
  {
    id: 'digital-marketing',
    name: 'Digital Marketing',
    core: true,
    summary: 'Practical digital marketing with industry tools.',
    topics: ['SEO and SEM', 'Social media marketing', 'Content strategy', 'Campaign analytics'],
  },
  {
    id: 'finance',
    name: 'Finance',
    core: true,
    summary: 'Financial basics and reporting for beginners and job seekers.',
    topics: ['Financial fundamentals', 'Accounting principles', 'Excel-based financial reporting'],
  },
  {
    id: 'human-resources',
    name: 'Human Resources',
    core: true,
    summary: 'HR concepts as they apply in the workplace.',
    topics: [
      'HR fundamentals',
      'Recruitment concepts',
      'Employee lifecycle',
      'HR compliance basics',
    ],
  },
  {
    id: 'tally-erp',
    name: 'Tally ERP',
    core: true,
    summary: 'Hands-on accounting software training.',
    topics: ['Tally ERP 9', 'Tally Prime'],
  },
  {
    id: 'advanced-excel',
    name: 'Advanced Excel',
    core: false,
    summary: 'Excel for reporting and analysis.',
    topics: ['VLOOKUP', 'Pivot Tables', 'Dashboards'],
  },
  {
    id: 'microsoft-office',
    name: 'Microsoft Office',
    core: false,
    summary: 'Everyday office tools for the workplace.',
    topics: ['MS Office Suite'],
  },
  {
    id: 'basic-computer',
    name: 'Basic Computer',
    core: false,
    summary: 'Core computer applications for first-time learners.',
    topics: [],
  },
]
