import { ArrowUp, Github, Linkedin } from 'lucide-react'
import { site } from '../config'

export default function Footer() {
  return (
    <footer className="site-footer px-6 py-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-5 sm:flex-row">
        <div><p className="font-display text-lg font-bold text-white">PSP<span className="text-cyan-300">.</span></p><p className="mt-1 text-xs text-slate-500">© {new Date().getFullYear()} Priyanshu Shankar Pawar. Graduate Software Engineer, United Kingdom.</p></div>
        <div className="flex items-center gap-3"><a href={site.github} target="_blank" rel="noreferrer" aria-label="GitHub" className="social-icon"><Github size={16} /></a><a href={site.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn" className="social-icon"><Linkedin size={16} /></a><a href="#home" className="back-top" aria-label="Back to top"><ArrowUp size={16} /></a></div>
      </div>
    </footer>
  )
}
