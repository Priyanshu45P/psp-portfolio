import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import { Download, Menu, X } from 'lucide-react'
import { site } from '../config'

const links = [
  ['Home', '/#home'], ['About', '/#about'], ['Skills', '/#skills'],
  ['Projects', '/#projects'], ['Education', '/#education'], ['Contact', '/#contact'],
] as const

export default function Nav() {
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState('home')
  const [scrolled, setScrolled] = useState(false)
  const { pathname } = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    if (pathname !== '/') return
    const ids = links.map(([, href]) => href.split('#')[1])
    const obs = new IntersectionObserver((entries) => entries.forEach((entry) => entry.isIntersecting && setActive(entry.target.id)), { rootMargin: '-38% 0px -54% 0px' })
    ids.forEach((id) => { const el = document.getElementById(id); if (el) obs.observe(el) })
    return () => obs.disconnect()
  }, [pathname])

  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${scrolled ? 'nav-scrolled' : 'nav-transparent'}`}>
      <nav aria-label="Primary" className="mx-auto flex h-[76px] max-w-6xl items-center justify-between px-6">
        <Link to="/#home" className="brand-mark" aria-label="PSP, home"><span>PSP</span><i>.</i></Link>
        <ul className="hidden items-center gap-1 md:flex">
          {links.map(([label, href]) => {
            const id = href.split('#')[1]
            const on = pathname === '/' && active === id
            return <li key={id}><Link to={href} aria-current={on ? 'page' : undefined} className={`nav-link ${on ? 'nav-link-active' : ''}`}>{label}{on && <motion.span layoutId="nav-active" className="nav-active-line" />}</Link></li>
          })}
        </ul>
        <a href={site.cv} download className="btn btn-ghost hidden md:inline-flex"><Download size={15} /> Download CV</a>
        <button className="mobile-menu-button md:hidden" onClick={() => setOpen(!open)} aria-expanded={open} aria-label={open ? 'Close menu' : 'Open menu'}>{open ? <X /> : <Menu />}</button>
      </nav>
      <AnimatePresence>
        {open && <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: .25 }} className="mobile-nav md:hidden"><ul className="mx-auto flex max-w-6xl flex-col gap-1 px-6 py-4">{links.map(([label, href]) => <li key={label}><Link to={href} onClick={() => setOpen(false)} className="block rounded-lg px-3 py-3 text-sm text-slate-300 hover:bg-white/5 hover:text-cyan-200">{label}</Link></li>)}<li className="pt-2"><a href={site.cv} download className="btn btn-primary w-full justify-center"><Download size={15} /> Download CV</a></li></ul></motion.div>}
      </AnimatePresence>
    </header>
  )
}
