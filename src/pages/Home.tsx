import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { ArrowUpRight, BriefcaseBusiness, Code2, GraduationCap, Layers3, ShieldCheck, Sparkles } from 'lucide-react'
import Hero from '../components/Hero'
import Reveal from '../components/Reveal'
import ProjectCard from '../components/ProjectCard'
import ContactForm from '../components/ContactForm'
import { projects } from '../data/projects'
import { skills } from '../data/skills'
import { site } from '../config'

const sectionMeta: Record<string, string> = { about: 'A little introduction', skills: 'Tools of the trade', projects: 'Selected work', education: 'Academic background', contact: 'Let’s connect' }
function Section({ id, title, intro, children }: { id: string; title: string; intro?: string; children: React.ReactNode }) {
  return <section id={id} className="section-shell scroll-mt-20 px-6 py-20 sm:py-28"><div className="mx-auto max-w-6xl"><Reveal><div className="section-heading"><span className="section-eyebrow">{sectionMeta[id]}</span><h2 className="mt-3 text-3xl font-semibold tracking-tight text-white sm:text-4xl">{title}<span className="text-cyan-300">.</span></h2>{intro && <p className="mt-4 max-w-2xl leading-7 text-slate-400">{intro}</p>}</div></Reveal><div className="mt-10 sm:mt-12">{children}</div></div></section>
}

export default function Home() {
  const [cat, setCat] = useState(Object.keys(skills)[0])
  useEffect(() => { document.title = 'Priyanshu Pawar | Graduate Software Engineer' }, [])
  return <>
    <Hero />

    <Section id="about" title="Engineering with purpose" intro="I enjoy turning complex problems into practical, reliable software—from database design and API development to polished user-facing applications.">
      <div className="grid gap-6 lg:grid-cols-[1.2fr_.8fr]">
        <Reveal><div className="surface-card h-full p-7 sm:p-8"><div className="mb-5 flex h-11 w-11 items-center justify-center rounded-xl border border-cyan-300/20 bg-cyan-300/[0.07] text-cyan-200"><Code2 size={21} /></div><div className="space-y-4 text-[15px] leading-8 text-slate-300">
          <p>I am a Graduate Software Engineer with an MSc in Advanced Computer Science from the University of Leicester. I enjoy building modern web applications, backend services, database-driven systems and practical software solutions.</p>
          <p>My strengths are software engineering fundamentals, Java and object-oriented programming, REST API development, database modelling, authentication and authorisation, testing and problem-solving.</p>
          <p>I believe in building software that is reliable, maintainable, secure and useful to real users.</p>
        </div></div></Reveal>
        <Reveal delay={.12}><div className="surface-card h-full p-7 sm:p-8"><div className="mb-5 flex h-11 w-11 items-center justify-center rounded-xl border border-violet-300/20 bg-violet-300/[0.07] text-violet-200"><BriefcaseBusiness size={20} /></div><h3 className="text-lg font-semibold text-white">Career focus</h3><p className="mt-2 text-sm leading-6 text-slate-400">Roles I am currently targeting:</p><ul className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-1">{['Graduate Software Engineer', 'Junior Software Developer', 'Graduate Java Developer', 'Backend Software Engineer', 'Full-Stack Developer', 'Application Developer'].map((role, i) => <motion.li key={role} initial={{ opacity: 0, x: 8 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * .05 }} className="flex items-center gap-3 text-sm text-slate-300"><span className="h-1.5 w-1.5 rounded-full bg-cyan-300" />{role}</motion.li>)}</ul><div className="mt-6 rounded-xl border border-emerald-300/15 bg-emerald-300/[0.04] px-4 py-3 text-sm text-emerald-200">Open to relocation anywhere in the United Kingdom.</div></div></Reveal>
      </div>
    </Section>

    <Section id="skills" title="Technical toolkit" intro="A practical mix of languages, frameworks and engineering foundations. Select a category to explore the technologies.">
      <div className="surface-card p-6 sm:p-8"><div role="tablist" aria-label="Skill categories" className="flex flex-wrap gap-2">{Object.keys(skills).map((category) => <button key={category} role="tab" aria-selected={cat === category} onClick={() => setCat(category)} className={`skill-tab ${cat === category ? 'skill-tab-active' : ''}`}>{category}</button>)}</div>
        <AnimatePresence mode="wait"><motion.ul key={cat} role="tabpanel" initial={{ opacity: 0, y: 14, filter: 'blur(4px)' }} animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }} exit={{ opacity: 0, y: -8 }} transition={{ duration: .3 }} className="mt-7 flex min-h-24 flex-wrap content-start gap-3">{skills[cat].map((skill, i) => <motion.li key={skill} initial={{ opacity: 0, scale: .92 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: i * .035 }} className="skill-pill">{skill}</motion.li>)}</motion.ul></AnimatePresence>
      </div>
      <div className="mt-5 grid gap-3 sm:grid-cols-3"><div className="mini-feature"><Layers3 size={17} /><span>Full-stack development</span></div><div className="mini-feature"><ShieldCheck size={17} /><span>Secure application design</span></div><div className="mini-feature"><Sparkles size={17} /><span>Continuous learning</span></div></div>
    </Section>

    <Section id="projects" title="Projects & case studies" intro="Academic and personal projects, described as they are. Explore the technical decisions, architecture, security, testing and implementation details behind each project.">
      <div className="mb-7 flex items-center justify-between gap-4"><p className="text-sm text-slate-500">{projects.length} detailed case studies</p><span className="hidden items-center gap-2 text-xs text-slate-500 sm:inline-flex"><span className="h-1.5 w-1.5 rounded-full bg-cyan-300" /> Explore the engineering behind the build</span></div>
      <div className="grid gap-6 md:grid-cols-2">{projects.map((project) => <ProjectCard key={project.slug} p={project} />)}</div>
    </Section>

    <Section id="education" title="Education" intro="The academic foundation behind my software engineering practice.">
      <Reveal><div className="surface-card relative overflow-hidden p-7 sm:p-9"><div className="absolute right-0 top-0 h-48 w-48 rounded-full bg-blue-400/[0.07] blur-3xl" /><div className="relative flex flex-col gap-5 sm:flex-row sm:items-start"><div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-cyan-300/20 bg-cyan-300/[0.07] text-cyan-200"><GraduationCap size={23} /></div><div className="flex-1"><div className="flex flex-wrap items-center gap-3"><h3 className="text-xl font-semibold text-white">MSc Advanced Computer Science</h3><span className="status-pill">2024–2026</span></div><p className="mt-2 text-sm font-medium text-cyan-200">University of Leicester, United Kingdom</p><p className="mt-4 max-w-3xl leading-7 text-slate-400">Postgraduate study covering software engineering, full-stack development, databases and applied AI. My MSc final project is Abhyasa, a full-stack English-learning platform with speech recognition.</p><div className="mt-5 flex flex-wrap gap-2"><span className="tech-chip">Software Engineering</span><span className="tech-chip">Full-stack Development</span><span className="tech-chip">Databases</span><span className="tech-chip">Applied AI</span></div></div></div></div></Reveal>
    </Section>

    <Section id="contact" title="Let’s build something useful" intro="Open to graduate and junior software engineering roles across the UK. If you are hiring or would like to discuss a project, I would be pleased to hear from you.">
      <div className="grid gap-6 lg:grid-cols-[.82fr_1.18fr]">
        <Reveal><div className="surface-card h-full p-7 sm:p-8"><h3 className="text-lg font-semibold text-white">Find me online</h3><p className="mt-2 text-sm leading-6 text-slate-400">The best way to connect is through LinkedIn or GitHub.</p><div className="mt-6 space-y-3">{site.email ? <a className="contact-link" href={`mailto:${site.email}`}>Email <ArrowUpRight size={15} /></a> : <p className="rounded-xl border border-dashed border-white/10 p-4 text-sm text-slate-500">Email not configured yet. Add it in <code>src/config.ts</code>.</p>}<a className="contact-link" href={site.linkedin} target="_blank" rel="noreferrer">LinkedIn <ArrowUpRight size={15} /></a><a className="contact-link" href={site.github} target="_blank" rel="noreferrer">GitHub <ArrowUpRight size={15} /></a><a className="contact-link contact-link-primary" href={site.cv} download>Download CV <ArrowUpRight size={15} /></a></div></div></Reveal>
        <Reveal delay={.12}><div className="h-full"><ContactForm /></div></Reveal>
      </div>
    </Section>
  </>
}
