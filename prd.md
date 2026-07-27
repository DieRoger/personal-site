# Portfolio Website PRD

**Project Name**

Runjie Luo Portfolio

**Version**

V2.0

**Author**

Runjie Luo

**Target**

Top 50 Master Application Portfolio

------

# 1. Product Positioning

## Goal

Build a professional AI Engineer Portfolio instead of a personal homepage.

The website should communicate one core message within the first five seconds:

> Runjie Luo is a Data Science undergraduate building production-level AI Systems powered by Large Language Models.

The website is designed for:

- Graduate admission committees
- Recruiters
- Researchers
- Open Source contributors
- Engineers

------

# 2. Design Philosophy

Inspired by

- Apple
- Vercel
- Linear
- Anthropic
- Stripe

Keywords

- Minimal
- Modern
- Elegant
- Professional
- Fast
- Clean
- Lots of whitespace
- Typography-first
- Content-focused

Avoid

❌ Heavy animations

❌ Fancy gradients everywhere

❌ Gaming style

❌ Too colorful

❌ Over-designed UI

Animation should only improve user experience.

------

# 3. Tech Stack

Framework

Next.js (App Router)

Language

TypeScript

Style

Tailwind CSS

Component Library

shadcn/ui

Animation

Framer Motion

Icons

Lucide React

Content

MDX

Deployment

Vercel

Analytics

Google Analytics

SEO

next-seo

Image

next/image

Code Highlight

Shiki

Fonts

Geist

Fallback

Inter

------

# 4. Website Structure

```
/

Home

/about

/projects

/projects/[slug]

/resume

/blog

/blog/[slug]

/contact

404

sitemap

robots.txt
```

Future

```
/research
```

------

# 5. Navigation

Top Navigation

```
Logo

About

Projects

Resume

Blog

Contact

GitHub Icon

Dark Mode Toggle
```

Sticky Navigation

Transparent when top

Blur after scrolling

Smooth transition

------

# 6. Home Page

## Hero Section

Large typography

```
Runjie Luo
```

Subtitle

```
Building AI Systems.
```

Description

```
Data Science Undergraduate

AI Engineer

LLM

AI Agents

RAG

Document Intelligence
```

Buttons

Primary

```
View Projects
```

Secondary

```
GitHub
```

Background

Pure white

No illustration

Small floating grid animation acceptable

------

## Featured Skills

Three cards

```
AI Agents
```

Description

```
Multi-agent workflows powered by LLMs.
```

------

```
Document Intelligence
```

Description

```
OCR

Chunking

Retrieval

Knowledge Graph
```

------

```
Software Engineering
```

Description

```
Backend

Docker

FastAPI

Cloud Native
```

------

## Featured Project

Large project card

AuditFlow

Content

- Image
- Summary
- Tech Stack
- GitHub
- Demo
- Detail

------

## Latest Blog

Latest 3 articles

Card layout

------

## Footer

GitHub

Email

Copyright

------

# 7. About Page

Introduction

```
Hi, I'm Runjie Luo.

I am a Data Science undergraduate passionate about Artificial Intelligence and Software Engineering.

I enjoy building production-level AI systems using LLMs, Retrieval-Augmented Generation, Agentic Workflows and Modern Backend Technologies.
```

------

Timeline

```
Education

Projects

Future Goals
```

------

Interest

Cards

Artificial Intelligence

LLMs

AI Agents

Document Intelligence

Cloud Native

Backend Engineering

------

Skills

Grouped

Programming

```
Python

Java

JavaScript

TypeScript

SQL
```

Framework

```
FastAPI

Next.js

React

LangGraph
```

Database

```
PostgreSQL

PGVector

Redis
```

AI

```
PyTorch

Transformers

RAG

Embedding

Vector Search
```

DevOps

```
Docker

Git

Linux

Nginx
```

------

# 8. Projects Page

Grid layout

Each card contains

Project Image

Title

Description

Tech Stack

Status

GitHub

Demo

Detail

------

Featured

⭐⭐⭐⭐⭐

AuditFlow

------

Financial Analysis System

------

Job Hunter

------

Future

AI Career Copilot

Enterprise RAG

Knowledge Graph Explorer

------

# 9. Project Detail Page

Every project should have independent page.

Structure

------

Hero

Project Name

Tagline

Status

GitHub

Demo

------

Overview

Project introduction

------

Architecture

Architecture diagram

Interactive image

------

Timeline

```
v0.1

Document Parser

↓

v0.2

Embedding Pipeline

↓

v0.3

Knowledge Agent

↓

v0.4

Workflow Engine

↓

v0.5

Frontend Dashboard

↓

v1.0

Release
```

------

Features

Cards

------

Tech Stack

Badges

------

Challenges

Engineering challenges

Solutions

Lessons learned

------

Gallery

GIF

Screenshot

Architecture

Demo

------

Links

GitHub

Demo

Documentation

------

# 10. Resume Page

PDF Preview

Download Button

Sections

Education

Skills

Projects

Experience

Awards

Certifications

------

# 11. Blog

List Page

Cards

Category

Date

Reading Time

Tags

------

Article Page

Large typography

TOC

Syntax Highlight

Copy Button

Reading Progress

Back to Top

Share

------

Topics

AuditFlow

LLM

Agent

LangGraph

Prompt Engineering

RAG

OCR

Chunking

PGVector

DeepSeek

Software Engineering

------

# 12. Contact

Simple layout

GitHub

Email

LinkedIn

Google Scholar (Future)

Copy Email Button

------

# 13. Theme

Support

Light

Dark

System

Remember preference

------

# 14. Responsive Design

Desktop

Tablet

Mobile

Navigation

Hamburger Menu

Cards become single column

------

# 15. SEO

Each page

Title

Description

OpenGraph

Twitter Card

Structured Data

robots

sitemap

favicon

------

# 16. Performance

Lighthouse

Performance

95+

Accessibility

95+

Best Practice

100

SEO

100

------

# 17. Accessibility

Keyboard Navigation

ARIA

Contrast

Alt Text

Focus Ring

------

# 18. Animation

Use Framer Motion only

Page Transition

Fade

Slide

Card Hover

Image Zoom

Navigation Blur

Nothing excessive

------

# 19. Color System

Primary

Neutral Gray

Background

White

Dark

\#09090B

Accent

Blue only for links

No rainbow palette

------

# 20. Typography

Geist

Inter

Hierarchy

Hero

64px

Section

36px

Subtitle

24px

Body

18px

Small

14px

------

# 21. Content Strategy

The website should present growth instead of only results.

AuditFlow should include

```
Idea

↓

Research

↓

Architecture

↓

Prototype

↓

MVP

↓

Production
```

Every project should show

Problem

Solution

Architecture

Tech Stack

Lessons Learned

Future Plan

This demonstrates engineering thinking rather than just coding ability.

------

# 22. Future Roadmap

## V1 (Current)

Complete

- Home
- About
- Projects
- Contact
- Responsive
- Dark Mode
- GitHub Integration

Goal

Establish a professional online presence.

------

## V2

After AuditFlow MVP

Add

Project Detail Pages

Architecture Diagrams

Demo Videos

Resume Viewer

Project Timeline

Blog System

SEO

Analytics

------

## V3

Before Graduate Application

Internationalization (English / Chinese)

Research Page

Publication Section

Google Scholar

Speaking / Awards

Blog (10+ Articles)

Case Studies

Advanced SEO

------

# 23. Development Requirements for Codex

## Code Quality

- Use Next.js App Router.
- Follow a feature-based folder structure.
- Ensure all components are reusable.
- Use TypeScript with strict mode.
- Prefer Server Components where appropriate.
- Use Client Components only when interaction is required.
- Implement dark mode with next-themes.
- Optimize all images using `next/image`.
- Keep animations subtle with Framer Motion.
- Ensure accessibility (ARIA, keyboard navigation).
- Achieve Lighthouse scores above 95.

## UI & UX

- Maintain a clean, minimal aesthetic inspired by Vercel and Linear.
- Keep consistent spacing using an 8px grid system.
- Limit content width for readability.
- Use smooth page transitions and hover effects.
- Avoid visual clutter and unnecessary decorations.

## Data Architecture

- Store project information in structured JSON/TypeScript data files or MDX.
- Store blog posts as MDX with frontmatter.
- Separate content from UI logic for maintainability.
- Design the project system to easily support future additions.

## Extensibility

The architecture should support future additions without major refactoring:

- Research page
- Publication management
- Multi-language support (i18n)
- CMS integration (optional)
- RSS feed
- Search functionality
- Project filtering by technology
- Tag-based blog navigation

## Expected Deliverables

Codex should produce:

1. A fully responsive production-ready portfolio website.
2. Clean, modular, maintainable codebase.
3. Reusable UI components.
4. Optimized SEO configuration.
5. Dark/light theme support.
6. Blog system based on MDX.
7. Project detail pages with timeline support.
8. GitHub repository integration.
9. Resume preview and download functionality.
10. Deployment-ready configuration for Vercel.

------

# 24. 当前针对你的优化建议（相比普通 Portfolio）

结合你目前的规划（AuditFlow 为主项目、申请 Top50 硕士），我建议增加几个差异化模块，这会让网站更像一个持续演进的工程项目，而不是作品展示页：

| 模块                     | 作用                                                         |
| ------------------------ | ------------------------------------------------------------ |
| **Now**                  | 展示你当前正在做的事情（例如："Building AuditFlow v0.6"）    |
| **Project Timeline**     | 展示项目从 v0.1 到 v1.0 的演进过程，体现持续迭代能力         |
| **Tech Radar**           | 展示目前掌握、正在学习、计划学习的技术                       |
| **Architecture Gallery** | 收录 AuditFlow、Job Hunter 等项目的架构图                    |
| **Engineering Notes**    | 简短记录踩坑和技术思考，可作为 Blog 的轻量版                 |
| **GitHub Activity**      | 展示最近提交、贡献热力图或最近仓库（避免空白 GitHub 给人的印象） |
| **Featured Metrics**     | 如项目 Star、提交次数、文章数、完成项目数等，适度量化成果    |