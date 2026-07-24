export default {
  name: 'tag',
  title: '标签',
  type: 'document',
  fields: [
    { name: 'label', title: '名称', type: 'string', validation: (Rule: any) => Rule.required() },
    { name: 'slug', title: 'Slug', type: 'slug', options: { source: 'label' } },
    { name: 'color', title: '颜色', type: 'string', description: 'Hex color, e.g. #61DAFB' },
  ],
}
