import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: '关于',
}

export default function AboutPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-20">
      <h1 className="text-3xl font-bold mb-8">关于我</h1>

      <div className="prose dark:prose-invert max-w-none space-y-6">
        <section>
          <h2 className="text-xl font-semibold mb-3">简介</h2>
          <p className="text-gray-600 dark:text-gray-300">
            全栈开发者，专注于构建优雅的 Web 应用。
            热爱开源，喜欢探索新技术，也乐于分享知识与经验。
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-3">技能</h2>
          <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 space-y-1">
            <li>前端：React, Next.js, TypeScript, TailwindCSS</li>
            <li>后端：Node.js, Python, PostgreSQL</li>
            <li>工具：Docker, Git, CI/CD</li>
            <li>设计：Figma, 响应式设计, 无障碍</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-3">联系方式</h2>
          <ul className="space-y-2 text-gray-600 dark:text-gray-300">
            <li>
              GitHub：{' '}
              <a href="#" className="text-indigo-500 hover:text-indigo-600">
                github.com/username
              </a>
            </li>
            <li>
              邮箱：{' '}
              <a href="mailto:hello@example.com" className="text-indigo-500 hover:text-indigo-600">
                hello@example.com
              </a>
            </li>
          </ul>
        </section>
      </div>
    </div>
  )
}
