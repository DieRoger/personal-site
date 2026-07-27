'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight, GitBranch } from 'lucide-react'
import { Button } from '@/components/ui/button'

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden py-24 md:py-32">
      <div className="container mx-auto max-w-5xl px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl"
        >
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-4">
            Runjie Luo
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-2">
            Building AI Systems.
          </p>
          <p className="text-base text-muted-foreground mb-6 max-w-xl leading-relaxed">
            Data Science Undergraduate · AI Engineer
          </p>
          <div className="flex flex-wrap items-center gap-2 text-sm text-muted-foreground mb-8">
            <span className="px-2 py-0.5 rounded-md bg-secondary text-secondary-foreground">LLM</span>
            <span className="text-muted-foreground">|</span>
            <span className="px-2 py-0.5 rounded-md bg-secondary text-secondary-foreground">Agents</span>
            <span className="text-muted-foreground">|</span>
            <span className="px-2 py-0.5 rounded-md bg-secondary text-secondary-foreground">RAG</span>
          </div>
          <div className="flex items-center gap-4">
            <Button asChild>
              <Link href="/projects">
                View Projects <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </Button>
            <Button variant="outline" asChild>
              <a href="https://github.com/DieRoger" target="_blank" rel="noopener noreferrer">
                <GitBranch className="mr-1 h-4 w-4" /> GitHub
              </a>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
