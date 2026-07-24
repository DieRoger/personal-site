export default {
  name: 'content',
  title: '内容',
  type: 'document',
  fields: [
    { name: 'title', title: '标题', type: 'string', validation: (Rule: any) => Rule.required() },
    { name: 'slug', title: 'Slug', type: 'slug', options: { source: 'title', maxLength: 96 } },
    {
      name: 'contentType',
      title: '内容类型',
      type: 'string',
      options: {
        list: [
          { title: '博客文章', value: 'blog' },
          { title: '数字花园笔记', value: 'garden' },
        ],
        layout: 'radio',
      },
      validation: (Rule: any) => Rule.required(),
    },
    { name: 'excerpt', title: '摘要', type: 'text', rows: 3 },
    { name: 'body', title: '正文', type: 'blockContent' },
    { name: 'tags', title: '标签', type: 'array', of: [{ type: 'reference', to: [{ type: 'tag' }] }] },
    { name: 'publishedAt', title: '发布日期', type: 'datetime' },
    { name: 'featured', title: '精选', type: 'boolean', initialValue: false },
  ],
}
