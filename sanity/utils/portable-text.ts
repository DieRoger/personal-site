export const blockContent = {
  name: 'blockContent',
  title: '正文内容',
  type: 'array',
  of: [
    {
      type: 'block',
      styles: [
        { title: '正文', value: 'normal' },
        { title: '标题 1', value: 'h1' },
        { title: '标题 2', value: 'h2' },
        { title: '标题 3', value: 'h3' },
        { title: '标题 4', value: 'h4' },
        { title: '引用', value: 'blockquote' },
      ],
      marks: {
        decorators: [
          { title: '加粗', value: 'strong' },
          { title: '斜体', value: 'em' },
          { title: '代码', value: 'code' },
        ],
        annotations: [
          {
            name: 'link',
            title: '外部链接',
            type: 'object',
            fields: [{ name: 'href', title: 'URL', type: 'url' }],
          },
          {
            name: 'internalLink',
            title: '内部链接',
            type: 'object',
            fields: [
              { name: 'reference', title: '引用文档', type: 'reference', to: [{ type: 'content' }, { type: 'project' }] },
            ],
          },
        ],
      },
    },
    {
      type: 'image',
      options: { hotspot: true },
      fields: [
        { name: 'alt', title: '替代文本', type: 'string' },
        { name: 'caption', title: '图注', type: 'string' },
      ],
    },
    { type: 'codeBlock' },
  ],
}
