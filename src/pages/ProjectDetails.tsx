import { useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import { ArrowLeft, ArrowRight, Github, Layers3 } from 'lucide-react'
import { motion } from 'framer-motion'
import { projects } from '../data/projects'
import ArchitectureDiagram from '../components/ArchitectureDiagram'
import Preview from '../components/Preview'
import Reveal from '../components/Reveal'

function Block({ title, items, text }: { title: string; items?: string[]; text?: string }) {
  if (!items?.length && !text) return null
  return <Reveal><section className="mt-12"><div className="mb-4 flex items-center gap-3"><span className="h-6 w-1 rounded-full bg-gradient-to-b from-cyan-300 to-blue-500" /><h2 className="text-2xl font-semibold">{title}</h2></div>{text && <p className="max-w-3xl leading-8 text-slate-300">{text}</p>}{items && <ul className="mt-4 max-w-3xl space-y-3">{items.map((item) => <li key={item} className="flex gap-3 leading-7 text-slate-300"><span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-300" />{item}</li>)}</ul>}</section></Reveal>
}

export default function ProjectDetails() {
  const { slug } = useParams()
  const p = projects.find((x) => x.slug === slug)
  useEffect(() => { if (p) document.title = `${p.title} | Priyanshu Pawar` }, [p])
  if (!p) return <div className="px-6 py-40 text-center"><h1 className="text-3xl">Project not found</h1><Link to="/#projects" className="btn btn-primary mt-6">Back to projects</Link></div>
  const idx = projects.indexOf(p)
  const next = projects[(idx + 1) % projects.length]
  return (
    <article className="relative min-h-screen overflow-hidden px-6 pb-24 pt-32">
      <div className="pointer-events-none absolute left-1/2 top-0 -z-10 h-[32rem] w-[55rem] -translate-x-1/2 rounded-full bg-blue-500/[0.08] blur-[130px]" />
      <div className="mx-auto max-w-4xl">
        <Link to="/#projects" className="inline-flex items-center gap-2 rounded-lg border border-white/[0.07] bg-white/[0.025] px-3 py-2 text-sm text-slate-400 transition hover:border-cyan-300/25 hover:text-cyan-100"><ArrowLeft size={14} /> All projects</Link>
        <motion.header initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .6 }} className="mt-9">
          <div className="flex flex-wrap items-center gap-3"><span className="font-mono text-xs uppercase tracking-[.16em] text-cyan-300">{p.category}</span><span className="status-pill">{p.status}</span></div>
          <h1 className="mt-4 text-4xl font-bold tracking-tight sm:text-6xl">{p.title}<span className="text-cyan-300">.</span></h1>
          <p className="mt-4 max-w-3xl text-lg leading-8 text-slate-400">{p.subtitle}</p>
          <div className="mt-6 flex flex-wrap gap-3">{p.github && <a href={p.github} target="_blank" rel="noreferrer" className="btn btn-primary"><Github size={15} /> GitHub repository</a>}{p.live && <a href={p.live} target="_blank" rel="noreferrer" className="btn btn-ghost">Live demo <ArrowRight size={15} /></a>}</div>
        </motion.header>
        {p.note && <p role="note" className="mt-8 rounded-xl border border-amber-300/20 bg-amber-300/[0.055] p-5 text-sm leading-7 text-amber-100/90">{p.note}</p>}
        <Reveal><div className="mt-10 overflow-hidden rounded-2xl border border-white/10 shadow-[0_25px_80px_rgba(0,0,0,.28)]"><Preview project={p} /></div></Reveal>
        <Block title="Project overview" text={p.description} />
        <Block title="Problem statement" text={p.problem} />
        <Block title="Project objectives" items={p.objectives} />
        <Block title="My contributions" items={p.contributions} />
        <Reveal><section className="mt-12"><div className="mb-4 flex items-center gap-3"><span className="h-6 w-1 rounded-full bg-gradient-to-b from-cyan-300 to-blue-500" /><h2 className="text-2xl font-semibold">Technologies used</h2></div><div className="flex flex-wrap gap-2">{p.tech.map((tech) => <span key={tech} className="tech-chip">{tech}</span>)}</div></section></Reveal>
        <Reveal><section className="mt-12 space-y-5"><div className="flex items-center gap-3"><span className="flex h-9 w-9 items-center justify-center rounded-xl border border-cyan-300/20 bg-cyan-300/[0.06] text-cyan-200"><Layers3 size={18} /></span><h2 className="text-2xl font-semibold">Architecture</h2></div><ArchitectureDiagram steps={p.architecture} title="System architecture" />{p.aiArchitecture && <ArchitectureDiagram steps={p.aiArchitecture} title="Separate AI service" />}</section></Reveal>
        <Block title="Key features" items={p.features} />
        <Block title="Database design" items={p.database} />
        <Block title="Security implementation" items={p.security} />
        <Block title="Technical challenges" items={p.challenges} />
        <Block title="Solutions implemented" items={p.solutions} />
        <Block title="Testing approach" items={p.testing} />
        <Block title="Future improvements" items={p.future} />
        <Block title="Live demonstration" text={p.live ? 'Available via the link above.' : 'No live demonstration is currently available.'} />
        <div className="mt-16 flex flex-col justify-between gap-4 border-t border-white/10 pt-7 sm:flex-row sm:items-center"><Link to="/#projects" className="btn btn-ghost"><ArrowLeft size={15} /> Back to projects</Link><Link to={`/projects/${next.slug}`} className="btn btn-primary">Next: {next.title} <ArrowRight size={15} /></Link></div>
      </div>
    </article>
  )
}
