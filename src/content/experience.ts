export type Role = {
  title: string
  org: string
  dates: string
  current?: boolean
  duties: string[]
}

// Ended roles first, current roles last.
export const roles: Role[] = [
  {
    title: 'Software & Computer Skills Trainer',
    org: 'KTM Institute of Technology and Multimedia',
    dates: 'Apr 2022 – Dec 2024',
    duties: [
      'Delivered structured classroom training in MS Office Suite, Advanced Excel (VLOOKUP, Pivot Tables, Dashboards), Tally ERP 9, and core computer applications to 250+ learners from diverse academic backgrounds.',
      'Designed differentiated exercises, assessments, and performance-based activities for beginner, intermediate, and advanced tracks.',
      'Provided hands-on training in accounting software, Excel-based reporting, and workplace-oriented digital skills.',
      'Monitored learner progress through assessments and practical activities, delivering targeted support to improve outcomes.',
    ],
  },
  {
    title: 'Digital & AI-Integrated Career Guidance Trainer',
    org: 'Aarav Institute for Management Services',
    dates: 'Aug 2026 – Sep 2026',
    duties: [
      'Delivered digital and AI-integrated training programmes across multiple colleges and educational institutions.',
      'Facilitated sessions on practical application of digital tools and AI-assisted learning methods.',
      'Ran career guidance and employability development workshops for college student groups.',
      'Customised session content to each group’s academic background, career interests, and skill level.',
    ],
  },
  {
    title: 'Digital Marketing, Finance & Soft Skills Trainer',
    org: 'TechnoTut Solutions LLP',
    dates: 'Nov 2022 – Present',
    current: true,
    duties: [
      'Designed and delivered multi-domain training programmes spanning Digital Marketing, Finance, and Soft Skills.',
      'Built customised training modules, practical assignments, activities, and assessments mapped to learner requirements.',
      'Facilitated practical sessions on digital marketing concepts, industry-standard tools, financial fundamentals, and professional communication.',
      'Ran classroom training, mentoring, and project-based learning with continuous performance tracking.',
      'Guided learners through industry-oriented projects that improved job readiness and applied professional capability.',
    ],
  },
  {
    title: 'Human Resource & Finance Trainer',
    org: 'GenLearnY',
    dates: 'Jun 2026 – Present',
    current: true,
    duties: [
      'Deliver structured training programmes in Human Resource Management and Finance to job-oriented learner cohorts.',
      'Build curriculum covering practical HR concepts, workplace processes, financial fundamentals, and industry applications.',
      'Design interactive sessions, activities, assessments, and hands-on exercises that convert theory into applied capability.',
      'Mentor learners on career readiness, closing the gap between academic knowledge and workplace expectations.',
    ],
  },
]
