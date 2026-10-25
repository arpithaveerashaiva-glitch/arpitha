export type Domain = {
  id: string
  name: string
  core: boolean // core domains sit in the selector row; others are supporting skills
  summary: string
  topics: string[]
}

const TBD = '[Description to be supplied by Arpitha]'

export const domains: Domain[] = [
  { id: 'soft-skills', name: 'Soft Skills & Communication', core: true, summary: TBD, topics: [] },
  { id: 'digital-marketing', name: 'Digital Marketing', core: true, summary: TBD, topics: [] },
  { id: 'finance', name: 'Finance', core: true, summary: TBD, topics: [] },
  { id: 'human-resources', name: 'Human Resources', core: true, summary: TBD, topics: [] },
  { id: 'tally-erp', name: 'Tally ERP', core: true, summary: TBD, topics: [] },
  { id: 'advanced-excel', name: 'Advanced Excel', core: false, summary: TBD, topics: [] },
  { id: 'microsoft-office', name: 'Microsoft Office', core: false, summary: TBD, topics: [] },
]
