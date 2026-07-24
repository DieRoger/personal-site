'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden py-20 md:py-32">
      {/* 动态渐变背景 - 性能优化版 */}
      <motion.div
        className="hero-gradient absolute inset-0 -z-10 opacity-20 dark:opacity-10"
        style={{
          background: 'conic-gradient(from 230deg, #6366f1, #8b5cf6, #ec4899, #6366f1)',
        }}
        animate={{ rotate: 360, scale: [1, 1.05, 1] }}
        transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
      />

      <div className="max-w-5xl mx-auto px-4 text-center">
        <motion.h1
          className="text-4xl md:text-6xl font-bold mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
            你好，我是
          </span>
          <br />
          <span>开发者 / 设计师</span>
        </motion.h1>

        <motion.p
          className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          构建优雅的 Web 应用，记录技术思考，分享知识碎片。
          这里是我的作品集、博客和数字花园。
        </motion.p>

        <motion.div
          className="flex items-center justify-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <Link
            href="/portfolio"
            className="px-6 py-3 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 text-white font-medium hover:shadow-lg hover:shadow-indigo-500/25 transition-all"
          >
            查看作品
          </Link>
          <Link
            href="/about"
            className="px-6 py-3 rounded-full border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-200 font-medium hover:bg-gray-50 dark:hover:bg-gray-800 transition-all"
          >
            关于我
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
