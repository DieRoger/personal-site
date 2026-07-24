export default {
  name: 'project',
  title: '作品',
  type: 'document',
  fields: [
    { name: 'title', title: '项目名称', type: 'string', validation: (Rule: any) => Rule.required() },
    { name: 'slug', title: 'Slug', type: 'slug', options: { source: 'title', maxLength: 96 } },
    { name: 'description', title: '简短描述', type: 'text', rows: 2 },
    { name: 'thumbnail', title: '缩略图', type: 'image', options: { hotspot: true } },
    { name: 'images', title: '截图/图片集', type: 'array', of: [{ type: 'image', options: { hotspot: true } }] },
    { name: 'techStack', title: '技术栈', type: 'array', of: [{ type: 'reference', to: [{ type: 'tag' }] }] },
    { name: 'liveUrl', title: '线上链接', type: 'url' },
    { name: 'repoUrl', title: '源码链接', type: 'url' },
    { name: 'body', title: '详细说明', type: 'blockContent' },
    { name: 'featured', title: '精选', type: 'boolean', initialValue: false },
    { name: 'order', title: '排序权重', type: 'number' },
  ],
}
