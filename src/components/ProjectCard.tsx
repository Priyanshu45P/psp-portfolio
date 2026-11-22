import { useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowUpRight, Github } from 'lucide-react'
import { motion } from 'framer-motion'
import type { Project } from '../data/projects'
import Preview from './Preview'

export default function ProjectCard({ p }: { p: Project }) {
  const ref = useRef<HTMLElement>(null)
  const [transform, setTransform] = useState('')
  const move = (e: React.MouseEvent) => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches || window.innerWidth < 768) return
    const el = ref.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    const x = (e.clientX - rect.left) / rect.width - .5
    const y = (e.clientY - rect.top) / rect.height - .5
    setTransform(`perspective(1100px) rotateY(${x * 5}deg) rotateX(${-y * 5}deg) translateY(-4px)`)
  }
  return (
    <motion.article ref={ref} onMouseMove={move} onMouseLeave={() => setTransform('')} style={{ transform, transition: 'transform .22s ease-out' }}
      initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-50px' }}
      className="project-card group flex flex-col overflow-hidden rounded-2xl">
      <div className="relative"><Preview project={p} /><div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-300/70 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" /></div>
      <div className="flex flex-1 flex-col p-6 sm:p-7">
        <div className="mb-4 flex flex-wrap items-center justify-between gap-2 text-xs"><span className="font-mono uppercase tracking-[.13em] text-slate-500">{p.category}</span><span className="status-pill">{p.status}</span></div>
        <h3 className="text-xl font-semibold tracking-tight text-white transition-colors group-hover:text-cyan-200">{p.title}</h3>
        <p className="mt-2 text-sm leading-7 text-slate-400">{p.description}</p>
        <ul className="mt-5 flex flex-wrap gap-2">{p.tech.slice(0, 6).map((x) => <li key={x} className="tech-chip">{x}</li>)}</ul>
        <div className="mt-auto flex flex-wrap gap-3 pt-6">
          <Link to={`/projects/${p.slug}`} className="btn btn-primary">Case study <ArrowUpRight size={15} /></Link>
          {p.github && <a href={p.github} target="_blank" rel="noreferrer" className="btn btn-ghost"><Github size={15} /> GitHub</a>}
          {p.live && <a href={p.live} target="_blank" rel="noreferrer" className="btn btn-ghost">Live demo</a>}
        </div>
      </div>
    </motion.article>
  )
}
