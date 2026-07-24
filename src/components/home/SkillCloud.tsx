interface Skill {
  label: string
  level?: number // 1-5
}

const defaultSkills: Skill[] = [
  { label: 'TypeScript', level: 5 },
  { label: 'React', level: 5 },
  { label: 'Next.js', level: 4 },
  { label: 'Node.js', level: 4 },
  { label: 'Python', level: 3 },
  { label: 'TailwindCSS', level: 4 },
  { label: 'PostgreSQL', level: 3 },
  { label: 'Docker', level: 3 },
]

export default function SkillCloud({ skills = defaultSkills }: { skills?: Skill[] }) {
  return (
    <section className="py-16">
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-2xl font-bold mb-8">技能栈</h2>
        <div className="flex flex-wrap gap-3">
          {skills.map((skill) => (
            <span
              key={skill.label}
              className="px-4 py-2 rounded-full text-sm font-medium
                bg-gradient-to-r from-indigo-50 to-purple-50 dark:from-indigo-950/50 dark:to-purple-950/50
                border border-indigo-100 dark:border-indigo-900
                hover:from-indigo-100 hover:to-purple-100 dark:hover:from-indigo-900/50 dark:hover:to-purple-900/50
                transition-all cursor-default"
            >
              {skill.label}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
