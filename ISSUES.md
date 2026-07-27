# Portfolio Website V2 — Issue Tracker

**目标：** Top 50 Master Application Portfolio
**定位：** AI Engineer Portfolio

---

## Phase 0 — 项目审计与准备

### Issue #0 — Existing Codebase Analysis
- **优先级：** ⭐
- **任务：**
  - [ ] 分析当前 Next.js 结构与路由
  - [ ] 识别可复用组件、页面、样式、依赖
  - [ ] 列出已废弃的依赖
  - [ ] 创建迁移分析文档 `docs/migration-analysis.md`
- **交付：** codebase 分析报告，迁移计划

---

## Phase 1 — 设计系统重置

### Issue #1 — Geist 字体集成 (#2 on GitHub)
- **优先级：** ⭐
- [ ] 通过 `next/font/google` 引入 Geist 字体
- [ ] 配置全局字体变量（app/layout.tsx）
- [ ] 支持多种字重
- [ ] 优化加载性能
- **验收：** 所有页面使用 Geist，无旧字体依赖

### Issue #2 — 配色系统重设计 (#3 on GitHub)
- **优先级：** ⭐⭐
- **参考：** Vercel / Linear / Anthropic
- **新 Token：**
  - Light: background=white, foreground=neutral-900, muted=neutral-500, border=neutral-200, accent=blue
  - Dark: background=zinc-950, foreground=zinc-100
- [ ] 更新 tailwind.config.ts
- [ ] 重写 globals.css
- [ ] 移除旧彩色 Token
- **验收：** 组件使用设计 Token，Dark mode 兼容

### Issue #3 — Lucide 图标迁移 (#4 on GitHub)
- **优先级：** ⭐
- [ ] 安装 lucide-react
- [ ] 卸载 react-icons
- [ ] 全局替换图标引用
- **验收：** 单一图标源，tree-shaking 生效

### Issue #4 — Dark Mode (next-themes) (#5 on GitHub)
- **优先级：** ⭐
- [ ] 安装 next-themes
- [ ] 替换 ThemeToggle 组件
- [ ] 添加 ThemeProvider 到 layout
- [ ] 支持 Light / Dark / System
- **验收：** 导航栏含主题切换，偏好持久化

### Issue #5 — shadcn/ui 集成 (#6 on GitHub)
- **优先级：** ⭐⭐
- [ ] 运行 `npx shadcn@latest init` (Neutral 色系)
- [ ] 安装基础组件：Button, Card, Badge, Dialog, DropdownMenu, NavigationMenu
- [ ] 组件统一放在 `@/components/ui/`
- **验收：** 可复用组件库可用

### Issue #6 — 动效系统标准化 (#7 on GitHub)
- **优先级：** ⭐
- **允许：** fade / slide / hover / page transition
- **避免：** 过度浮动动画、复杂特效
- [ ] 移除 conic-gradient 动态背景
- [ ] 添加页面过渡动画
- [ ] 添加卡片 hover + 图片 zoom
- **验收：** 动画简洁专业

### Issue #7 — 清理 Sanity 依赖 (#8 on GitHub)
- **优先级：** ⭐
- [ ] 卸载所有 Sanity 相关包
- [ ] 删除 sanity/ 目录
- [ ] 删除 sanity.config.ts / sanity.cli.ts
- [ ] 清理 src/lib/sanity/
- [ ] 删除 .env 中 Sanity 变量
- **验收：** 无未使用的 CMS 依赖

---

## Phase 2 — 核心 Portfolio 页面

### Issue #8 — 首页 Hero (#9 on GitHub)
- **优先级：** ⭐⭐
- **布局：**
  - `Runjie Luo` (大字排版)
  - `Building AI Systems.` (副标题)
  - Data Science Undergraduate / AI Engineer / LLM | Agents | RAG
  - 按钮: View Projects → /projects ; GitHub → 外部链接
- [ ] 大字排版，最小化布局，响应式
- **验收：** Hero 首屏可见

### Issue #9 — Featured Skills (#10 on GitHub)
- **优先级：** ⭐
- 三张卡片：
  - AI Agents: LangGraph, LLM, Multi-Agent
  - Document Intelligence: OCR, RAG, Vector Search
  - Software Engineering: FastAPI, Docker, Cloud Native
- [ ] 可复用 Card 组件
- **验收：** 卡片 hover 交互

### Issue #10 — Featured Project: AuditFlow (#11 on GitHub)
- **优先级：** ⭐⭐
- **内容：** AuditFlow — AI-powered Intelligent Auditing Platform
- **展示：** Screenshot + Description + Tech Stack + GitHub + Status
- **技术栈：** Python, FastAPI, LangGraph, PGVector, Docker, DeepSeek
- **验收：** 项目成为首页核心

### Issue #11 — Latest Blog (#12 on GitHub)
- **优先级：** ⭐
- [ ] 使用 MDX 内容源
- [ ] 最新 3 篇卡片布局：Title + Date + Category + Read Time
- **验收：** 自动获取最新文章

### Issue #12 — About 页面 (#13 on GitHub)
- **优先级：** ⭐⭐⭐
- **结构：**
  - Hero: About Runjie Luo
  - Education Timeline: University → Projects → Future Goals
  - Skills 分组:
    - Programming: Python, Java, TypeScript, SQL
    - AI: PyTorch, LLM, RAG, Agents
    - Backend: FastAPI, PostgreSQL, Docker
- **验收：** 专业的申请 Profile

### Issue #13 — Projects 页面 (#14 on GitHub)
- **优先级：** ⭐⭐
- Grid 布局，每张卡片：Image + Title + Description + Tech Stack + GitHub + Demo
- **项目：** AuditFlow ⭐⭐⭐⭐⭐ / Job Hunter ⭐⭐⭐⭐ / Financial Analysis ⭐⭐⭐⭐
- **验收：** 易于后续扩展

### Issue #14 — Project Detail 系统 (#15 on GitHub)
- **优先级：** ⭐⭐⭐⭐
- 动态路由：`projects/[slug]`
- 数据源：`content/projects/` 或 `data/projects.ts`
- **页面结构：** Hero → Overview → Architecture Diagram → Features → Development Timeline → Engineering Challenges → Future Roadmap → Links
- **验收：** 新增项目只需编辑数据文件

---

## Phase 3 — 收尾

### Issue #15 — Resume + Contact + SEO (#16 on GitHub)
- **优先级：** ⭐⭐⭐
- **Resume：** PDF 预览 + 下载按钮
- **Contact：** GitHub / Email / LinkedIn / Google Scholar (future)
- **SEO：** metadata / OpenGraph / Twitter Card / sitemap / robots.txt
- **性能：** Lighthouse Performance >95, SEO 100, Accessibility >95

---

## 最终目录目标

```
src/
├── app/
│   ├── page.tsx              # Home
│   ├── about/page.tsx
│   ├── projects/page.tsx
│   ├── projects/[slug]/page.tsx
│   ├── blog/page.tsx
│   ├── resume/page.tsx
│   └── contact/page.tsx
├── components/
│   ├── ui/                   # shadcn/ui
│   ├── layout/               # Header, Footer, Nav
│   └── project/              # ProjectCard, ProjectDetail
├── content/
│   ├── projects/             # MDX or JSON
│   └── blog/                 # MDX
├── data/
│   ├── projects.ts
│   └── skills.ts
├── lib/
├── styles/
│   └── globals.css
```

## 执行顺序

```
Step 1: Issue #0 (Codebase Audit) + Phase 1 全部完成
Step 2: Homepage (Issues #8-#11)
Step 3: About (Issue #12)
Step 4: Projects (Issue #13)
Step 5: Project Detail (Issue #14)
Step 6: Resume + Contact + SEO (Issue #15)
```
