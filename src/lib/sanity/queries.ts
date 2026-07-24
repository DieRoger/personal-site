export const HOME_QUERY = `
{
  "featuredProjects": *[_type == "project" && featured == true] | order(order asc) [0...4] {
    title,
    slug,
    description,
    thumbnail,
    techStack[]->{label, slug, color}
  },
  "latestPosts": *[_type == "content" && contentType == "blog"] | order(publishedAt desc) [0...5] {
    title,
    slug,
    excerpt,
    publishedAt,
    tags[]->{label, slug}
  },
  "latestNotes": *[_type == "content" && contentType == "garden"] | order(publishedAt desc) [0...5] {
    title,
    slug,
    excerpt,
    publishedAt,
    tags[]->{label, slug}
  }
}
`

export const PORTFOLIO_QUERY: string = `
  *[_type == "project" && (!defined($tag) || $tag in techStack[]->slug.current)] 
  | order(order asc) {
    title, slug, description, thumbnail, techStack[]->{label, slug, color}
  }
`

export const PORTFOLIO_SINGLE_QUERY = `
  *[_type == "project" && slug.current == $slug][0] {
    title, slug, description, thumbnail, images, techStack[]->{label, slug, color},
    liveUrl, repoUrl, body, featured, order
  }
`

export const CONTENT_LIST_QUERY = `
  *[_type == "content" && contentType == $contentType] | order(publishedAt desc) {
    title, slug, excerpt, publishedAt, tags[]->{label, slug}, featured
  }
`

export const CONTENT_SINGLE_QUERY = `
  *[_type == "content" && slug.current == $slug][0] {
    title, slug, excerpt, body, publishedAt, tags[]->{label, slug}, featured, contentType
  }
`

export const NOTE_WITH_BACKLINKS_QUERY = `
{
  "note": *[_type == "content" && contentType == "garden" && slug.current == $slug][0] {
    title, excerpt, body, publishedAt, tags[]->{label, slug},
    "links": body[][_type == "internalLink"].reference->{_type, slug, title}
  },
  "backlinks": *[_type == "content" && references(*[_type=="content" && slug.current == $slug][0]._id)] {
    title, "slug": slug.current
  }
}
`

export const SEARCH_QUERY = `
  {
    "projects": *[_type == "project"] { _type, title, "slug": slug.current, description, techStack[]->{label} },
    "contents": *[_type == "content"] { _type, title, "slug": slug.current, excerpt, contentType, tags[]->{label} }
  }
`
