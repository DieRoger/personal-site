import Card from '@/components/shared/Card'
import TagBadge from '@/components/shared/TagBadge'
import SanityImage from '@/components/shared/SanityImage'

interface Project {
  title: string
  slug: { current: string }
  description?: string
  thumbnail?: any
  techStack?: { label: string; slug: string; color?: string }[]
}

interface FeaturedProjectsProps {
  projects: Project[]
}

export default function FeaturedProjects({ projects }: FeaturedProjectsProps) {
  if (!projects?.length) return null

  return (
    <section className="py-16">
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-2xl font-bold mb-8">精选作品</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project) => (
            <Card
              key={project.slug.current}
              title={project.title}
              description={project.description}
              href={`/portfolio/${project.slug.current}`}
            >
              {project.thumbnail && (
                <div className="relative aspect-video rounded-lg overflow-hidden bg-gray-100 dark:bg-gray-800">
                  <SanityImage
                    source={project.thumbnail}
                    alt={project.title}
                    width={600}
                    height={340}
                    className="object-cover w-full h-full"
                  />
                </div>
              )}
              {project.techStack && (
                <div className="flex flex-wrap gap-1.5 mt-3">
                  {project.techStack.map((tag) => (
                    <TagBadge key={tag.slug} label={tag.label} color={tag.color} />
                  ))}
                </div>
              )}
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
