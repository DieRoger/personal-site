import Fuse from 'fuse.js'

export interface SearchItem {
  _type: 'project' | 'content'
  title: string
  slug: string
  description?: string
  excerpt?: string
  contentType?: 'blog' | 'garden'
  tags?: { label: string }[]
  techStack?: { label: string }[]
}

export function createSearchIndex(items: SearchItem[]) {
  return new Fuse(items, {
    keys: [
      { name: 'title', weight: 2 },
      { name: 'description', weight: 1 },
      { name: 'excerpt', weight: 1 },
      { name: 'tags.label', weight: 1.5 },
      { name: 'techStack.label', weight: 1.5 },
    ],
    threshold: 0.4,
    includeScore: true,
  })
}
