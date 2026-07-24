# 个人品牌网站 — 完整技术文档 v1.0

## 一、项目概述

综合性个人品牌网站，融合**作品集展示**、**技术博客**、**数字花园（知识笔记）**和**个人主页/简历**四大模块。内容通过 Sanity Headless CMS 管理，前端使用 Next.js 14+ App Router 渲染，部署在 Vercel。

**核心目标：** 打造一个创意个性、高性能、可长期维护的个人品牌门户。

## 二、技术栈

| 层级 | 技术选型 | 版本 |
|------|---------|------|
| 框架 | Next.js (App Router) | 14+ |
| 语言 | TypeScript | 5.x |
| 样式 | TailwindCSS | 3.x |
| 动画 | Framer Motion | 11.x |
| CMS | Sanity (Headless) | v3 |
| 富文本 | @portabletext/react | 3.x |
| 图片工具 | next-sanity / @sanity/image-url | - |
| 代码高亮 | @sanity/code-input + highlight.js | - |
| 搜索 | Fuse.js（客户端模糊搜索） | 7.x |
| 部署 | Vercel | - |
| 分析 | Vercel Analytics | - |
| 类型生成 | sanity-typegen | - |

## 三、目录结构

```
personal-site/
├── src/
│   ├── app/                          # Next.js App Router
│   │   ├── layout.tsx                # 根布局（Header/Footer/主题）
│   │   ├── page.tsx                  # 首页
│   │   ├── about/
│   │   │   └── page.tsx              # 关于/简历页
│   │   ├── portfolio/
│   │   │   ├── page.tsx              # 作品集列表（?tag= 筛选）
│   │   │   └── [slug]/
│   │   │       └── page.tsx          # 作品详情
│   │   ├── blog/
│   │   │   ├── page.tsx              # 博客列表
│   │   │   └── [slug]/
│   │   │       └── page.tsx          # 文章详情（Portable Text）
│   │   ├── garden/
│   │   │   ├── page.tsx              # 数字花园列表
│   │   │   └── [slug]/
│   │   │       └── page.tsx          # 笔记详情（双向链接）
│   │   ├── search/
│   │   │   └── page.tsx              # 搜索结果页
│   │   ├── admin/
│   │   │   └── [[...index]]/
│   │   │       └── page.tsx          # Sanity Studio 入口
│   │   ├── api/
│   │   │   └── revalidate/
│   │   │       └── route.ts          # ISR Webhook 端点
│   │   ├── robots.ts                 # SEO
│   │   └── sitemap.ts
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Header.tsx
│   │   │   ├── Footer.tsx
│   │   │   ├── Navigation.tsx
│   │   │   └── ThemeToggle.tsx
│   │   ├── shared/
│   │   │   ├── SanityImage.tsx       # 封装的图片组件（urlForImage + blur）
│   │   │   ├── TagBadge.tsx
│   │   │   ├── Card.tsx
│   │   │   └── SearchInput.tsx
│   │   ├── home/
│   │   │   ├── HeroSection.tsx       # 首页英雄区（动态渐变背景）
│   │   │   ├── FeaturedProjects.tsx
│   │   │   ├── LatestPosts.tsx
│   │   │   └── SkillCloud.tsx
│   │   ├── portfolio/
│   │   │   ├── ProjectCard.tsx
│   │   │   ├── ProjectFilter.tsx
│   │   │   └── ProjectDetail.tsx
│   │   ├── blog/
│   │   │   ├── PostCard.tsx
│   │   │   ├── PostList.tsx
│   │   │   └── TableOfContents.tsx
│   │   ├── garden/
│   │   │   ├── NoteCard.tsx
│   │   │   └── BacklinksPanel.tsx    # 双向链接面板
│   │   └── portable-text/
│   │       ├── PTContent.tsx         # Portable Text 渲染器
│   │       ├── CodeBlock.tsx         # 代码块自定义渲染
│   │       ├── InternalLink.tsx      # 内部文档链接注解
│   │       └── ImageBlock.tsx        # 行内图片渲染
│   ├── lib/
│   │   ├── sanity/
│   │   │   ├── client.ts             # Sanity Client 配置
│   │   │   ├── queries.ts            # GROQ 查询集合
│   │   │   ├── image.ts              # urlForImage 工具函数
│   │   │   └── preview.ts            # Preview Mode 工具
│   │   ├── search.ts                 # Fuse.js 搜索工具
│   │   └── constants.ts
│   ├── types/
│   │   ├── sanity.generated.d.ts     # sanity-typegen 自动生成
│   │   └── index.ts                  # 手动补充类型
│   └── styles/
│       ├── globals.css
│       └── theme.ts                  # 设计 Token 定义
├── sanity/
│   ├── schema.ts                     # Schema 入口
│   ├── schemas/
│   │   ├── content.ts                # 统一 Content Schema
│   │   ├── project.ts                # Project Schema
│   │   ├── tag.ts                    # Tag Schema
│   │   └── category.ts              # Category Schema
│   ├── structure.ts                  # Studio 导航结构
│   └── utils/
│       └── portable-text.ts          # 自定义注解定义
├── sanity.config.ts                  # Sanity Studio 配置
├── sanity.cli.ts                     # Sanity CLI 配置
├── next.config.js
├── tailwind.config.ts
├── tsconfig.json
├── .env.local                        # 环境变量（本地）
├── .env.example
└── package.json
```

## 四、Sanity Schema 设计

### 4.1 Content（统一内容模型 — 博客 & 数字花园）

```typescript
// sanity/schemas/content.ts
export default {
  name: 'content',
  title: '内容',
  type: 'document',
  fields: [
    { name: 'title', title: '标题', type: 'string', validation: Rule => Rule.required() },
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
      validation: Rule => Rule.required(),
    },
    { name: 'excerpt', title: '摘要', type: 'text', rows: 3 },
    { name: 'body', title: '正文', type: 'blockContent' },
    { name: 'tags', title: '标签', type: 'array', of: [{ type: 'reference', to: [{ type: 'tag' }] }] },
    { name: 'publishedAt', title: '发布日期', type: 'datetime' },
    { name: 'featured', title: '精选', type: 'boolean', initialValue: false },
  ],
}
```

### 4.2 Project（作品集）

```typescript
export default {
  name: 'project',
  title: '作品',
  type: 'document',
  fields: [
    { name: 'title', title: '项目名称', type: 'string' },
    { name: 'slug', title: 'Slug', type: 'slug', options: { source: 'title' } },
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
```

### 4.3 Tag（标签/技术栈 — 统一管理）

```typescript
export default {
  name: 'tag',
  title: '标签',
  type: 'document',
  fields: [
    { name: 'label', title: '名称', type: 'string' },
    { name: 'slug', title: 'Slug', type: 'slug', options: { source: 'label' } },
    { name: 'color', title: '颜色', type: 'string', description: 'Hex color, e.g. #61DAFB' },
  ],
}
```

### 4.4 Portable Text 自定义注解

```typescript
const blockContent = {
  name: 'blockContent',
  title: '正文内容',
  type: 'array',
  of: [
    { type: 'block' },
    { type: 'image', options: { hotspot: true }, fields: [{ name: 'alt', title: '替代文本', type: 'string' }] },
    { type: 'codeBlock' },
    {
      type: 'object',
      name: 'internalLink',
      title: '内部链接',
      fields: [
        { name: 'reference', title: '引用文档', type: 'reference', to: [{ type: 'content' }, { type: 'project' }] },
      ],
    },
  ],
}
```

## 五、数据流与 GROQ 查询

### 5.1 核心查询模式

```typescript
// 首页：精选作品 + 最新文章
const HOME_QUERY = `
{
  "featuredProjects": *[_type == "project" && featured == true] | order(order asc) [0...4] {
    title, slug, description, thumbnail, techStack[]->{label, slug, color}
  },
  "latestPosts": *[_type == "content" && contentType == "blog"] | order(publishedAt desc) [0...5] {
    title, slug, excerpt, publishedAt, tags[]->{label, slug}
  },
  "latestNotes": *[_type == "content" && contentType == "garden"] | order(publishedAt desc) [0...5] {
    title, slug, excerpt, publishedAt, tags[]->{label, slug}
  }
}
`

// 作品集列表（带标签筛选）
const PORTFOLIO_QUERY = `
  *[_type == "project" && (!defined($tag) || $tag in techStack[]->slug.current)] 
  | order(order asc) {
    title, slug, description, thumbnail, techStack[]->{label, slug, color}
  }
`

// 数字花园：双向链接查询
const NOTE_WITH_BACKLINKS_QUERY = `
{
  "note": *[_type == "content" && contentType == "garden" && slug.current == $slug][0] {
    title, excerpt, body, publishedAt, tags[]->{label, slug},
    "links": body[][_type == "internalLink"].reference->{_type, slug, title}
  },
  "backlinks": *[_type == "content" && contentType == "garden" && references(*[_type=="content" && slug.current == $slug][0]._id)] {
    title, "slug": slug.current
  }
}
`
```

### 5.2 ISR + Webhook 更新流程

```
用户编辑 Sanity → Sanity Webhook → POST /api/revalidate → 
{ revalidate: token } → res.revalidate('/blog/...') → 
下次访问时返回最新静态内容
```

```typescript
// app/api/revalidate/route.ts
export async function POST(request: Request) {
  const secret = request.headers.get('x-vercel-revalidation-secret')
  if (secret !== process.env.REVALIDATION_SECRET) return Response.json({ message: 'Invalid secret' }, { status: 401 })

  const { _type, slug } = await request.json()
  
  if (_type === 'project') await revalidatePath('/portfolio')
  if (_type === 'content') {
    await revalidatePath('/blog')
    await revalidatePath('/garden')
    if (slug) await revalidatePath(`/${slug}`)
  }
  
  return Response.json({ revalidated: true })
}
```

## 六、路由设计

| 路由 | 页面 | 数据来源 | 渲染策略 |
|------|------|---------|---------|
| `/` | 首页 | HOME_QUERY | ISR (revalidate: 3600) |
| `/about` | 关于/简历 | 静态数据 | Static |
| `/portfolio` | 作品集 | PORTFOLIO_QUERY | ISR (revalidate: 3600) |
| `/portfolio/[slug]` | 作品详情 | 单条查询 | ISR (revalidate: 3600) |
| `/blog` | 博客列表 | CONTENT_LIST_QUERY(contentType=blog) | ISR |
| `/blog/[slug]` | 文章详情 | 单条查询 | ISR |
| `/garden` | 数字花园列表 | CONTENT_LIST_QUERY(contentType=garden) | ISR |
| `/garden/[slug]` | 笔记详情 | NOTE_WITH_BACKLINKS_QUERY | ISR |
| `/search?q=` | 搜索结果 | Fuse.js 客户端搜索 | Client-side |
| `/admin` | Sanity Studio | - | Client-side (SPA) |

## 七、环境变量

```env
# .env.local / .env.example
NEXT_PUBLIC_SANITY_PROJECT_ID=your_project_id
NEXT_PUBLIC_SANITY_DATASET=development
NEXT_PUBLIC_SANITY_API_VERSION=2024-01-01
SANITY_API_READ_TOKEN=skxxxx
REVALIDATION_SECRET=your_secret_string
NEXT_PUBLIC_SITE_URL=https://your-domain.com
```

## 八、创意视觉设计规范

### 8.1 配色系统

```typescript
const theme = {
  colors: {
    primary: { from: '#6366f1', to: '#8b5cf6' },
    accent: '#f472b6',
    surface: { light: '#ffffff', dark: '#0f172a' },
    text: { light: '#1e293b', dark: '#e2e8f0' },
    muted: { light: '#94a3b8', dark: '#64748b' },
  },
  fonts: {
    heading: 'Inter, system-ui, sans-serif',
    body: 'Inter, system-ui, sans-serif',
    mono: 'JetBrains Mono, monospace',
  },
  gradients: {
    hero: 'conic-gradient(from 230deg, #6366f1, #8b5cf6, #ec4899, #6366f1)',
  }
}
```

### 8.2 动态渐变背景（性能优化版）

```tsx
<motion.div
  className="absolute inset-0 -z-10"
  style={{ background: 'conic-gradient(from 230deg, #6366f1, #8b5cf6, #ec4899, #6366f1)' }}
  animate={{ rotate: 360, scale: [1, 1.05, 1] }}
  transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
/>
```

### 8.3 A11y 降级

```css
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}
```

## 九、部署流程

1. GitHub 创建仓库，推送代码
2. Vercel 导入仓库，配置环境变量
3. Sanity 后台 — CORS origins 添加 Vercel 生产域名
4. Sanity 后台 — 创建 Webhook，指向 `https://your-domain.com/api/revalidate`
5. Vercel — 设置自定义域名 + SSL
6. Sanity CLI — 切换数据集为 production，`sanity deploy` 部署 Studio（如需独立部署）
7. 验收检查：ISR 更新、搜索功能、Preview Mode、A11y、Lighthouse ≥ 90

## 十、验收标准

- [ ] 所有页面正常渲染，无 404/500
- [ ] 作品集 URL 筛选 (`/portfolio?tag=React`) 可分享、浏览器回退正常
- [ ] 博客/花园内容通过 Portable Text 正确渲染（含代码高亮）
- [ ] 数字花园笔记展示双向引用链接
- [ ] 站内搜索按类型（作品/文章/笔记）正确过滤
- [ ] Sanity 编辑后 Webhook 触发 ISR 更新（无需重新部署）
- [ ] Preview Mode 可实时预览草稿
- [ ] Dark/Light 模式切换正常
- [ ] `prefers-reduced-motion` 降级生效
- [ ] Lighthouse Desktop ≥ 95, Mobile ≥ 90
- [ ] 响应式布局在 Mobile/Tablet/Desktop 均正常
