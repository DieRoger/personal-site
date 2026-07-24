import type { StructureBuilder } from 'sanity/structure'

export const structure = (S: StructureBuilder) =>
  S.list()
    .title('内容管理')
    .items([
      S.listItem()
        .title('作品集')
        .schemaType('project')
        .child(S.documentTypeList('project').title('作品')),
      S.listItem()
        .title('博客文章')
        .schemaType('content')
        .child(
          S.documentList()
            .title('博客文章')
            .filter('_type == "content" && contentType == "blog"')
        ),
      S.listItem()
        .title('数字花园笔记')
        .schemaType('content')
        .child(
          S.documentList()
            .title('数字花园笔记')
            .filter('_type == "content" && contentType == "garden"')
        ),
      S.divider(),
      S.listItem()
        .title('标签管理')
        .schemaType('tag')
        .child(S.documentTypeList('tag').title('标签')),
    ])
