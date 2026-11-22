
import { motion } from 'framer-motion'
import {
  ArrowDown,
  ArrowUpRight,
  Download,
  Github,
  Linkedin,
  MapPin,
  Terminal,
} from 'lucide-react'
import { site } from '../config'

const CV_DOWNLOAD_NAME = 'Priyanshu-Pawar-Software-Engineer-CV.pdf'

const badges = [
  'Java',
  'JavaScript',
  'TypeScript',
  'React',
  'Node.js',
  'Express.js',
  'PostgreSQL',
  'Python',
]

const codeLines = [
  {
    n: '01',
    parts: [
      { t: 'public class ', c: 'text-violet-300' },
      { t: 'Engineer', c: 'text-cyan-300' },
      { t: ' {', c: 'text-slate-300' },
    ],
  },
  {
    n: '02',
    parts: [
      { t: '  private String name = ', c: 'text-slate-300' },
      { t: '"Priyanshu Pawar"', c: 'text-emerald-300' },
      { t: ';', c: 'text-slate-300' },
    ],
  },
  {
    n: '03',
    parts: [
      { t: '  private String role = ', c: 'text-slate-300' },
      { t: '"Graduate Software Engineer"', c: 'text-emerald-300' },
      { t: ';', c: 'text-slate-300' },
    ],
  },
  {
    n: '04',
    parts: [
      { t: '  private String focus = ', c: 'text-slate-300' },
      { t: '"Backend & Full Stack"', c: 'text-emerald-300' },
      { t: ';', c: 'text-slate-300' },
    ],
  },
  { n: '05', parts: [{ t: '', c: '' }] },
  {
    n: '06',
    parts: [
      { t: '  public boolean ', c: 'text-violet-300' },
      { t: 'buildReliableSoftware', c: 'text-cyan-300' },
      { t: '() {', c: 'text-slate-300' },
    ],
  },
  {
    n: '07',
    parts: [
      { t: '    return ', c: 'text-violet-300' },
      { t: 'true', c: 'text-amber-300' },
      { t: ';', c: 'text-slate-300' },
    ],
  },
  { n: '08', parts: [{ t: '  }', c: 'text-slate-300' }] },
  { n: '09', parts: [{ t: '}', c: 'text-slate-300' }] },
]

export default function Hero() {
  return (
    <section
      id="home"
      className="hero-section relative flex min-h-[92vh] items-center overflow-hidden px-6 pb-20 pt-28 sm:min-h-screen"
    >
      {/* Background */}
      <div className="grid-bg absolute inset-0" aria-hidden="true" />

      <div className="hero-orb hero-orb-blue" aria-hidden="true" />
      <div className="hero-orb hero-orb-cyan" aria-hidden="true" />

      <div
        className="pointer-events-none absolute inset-0 opacity-30"
        aria-hidden="true"
      >
        <div className="absolute left-[12%] top-[20%] h-px w-24 bg-gradient-to-r from-transparent via-cyan-300 to-transparent" />
        <div className="absolute bottom-[22%] right-[12%] h-px w-32 bg-gradient-to-r from-transparent via-blue-400 to-transparent" />
      </div>

      <div className="relative mx-auto grid w-full max-w-6xl items-center gap-14 lg:grid-cols-[1.08fr_.92fr] lg:gap-12">

        {/* Introduction */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.8,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-cyan-300/20 bg-cyan-300/[0.06] px-3.5 py-2 text-xs font-medium tracking-wide text-cyan-200">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
            </span>
            OPEN TO GRADUATE & JUNIOR OPPORTUNITIES
          </div>

          <p className="mb-3 text-lg text-slate-400">
            Hello, I'm
          </p>

          <h1 className="font-display text-4xl font-bold leading-[1.06] tracking-tight text-white sm:text-5xl xl:text-6xl">
            Priyanshu <span className="gradient-text">Pawar.</span>
          </h1>

          <h2 className="mt-5 max-w-2xl text-xl font-semibold leading-snug text-slate-200 sm:text-2xl">
            Graduate Software Engineer building{' '}
            <span className="text-cyan-300">reliable backend</span>{' '}
            and full-stack applications.
          </h2>

          <p className="mt-5 max-w-xl text-base leading-8 text-slate-400">
            MSc Advanced Computer Science graduate from the University of
            Leicester. I build practical software with Java, React, Node.js
            and SQL, with a focus on maintainable APIs, data-driven systems
            and thoughtful user experiences.
          </p>

          <div className="mt-5 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-slate-400">
            <span className="inline-flex items-center gap-2">
              <MapPin size={15} className="text-cyan-300" />
              United Kingdom
            </span>

            <span className="inline-flex items-center gap-2">
              <span className="h-1 w-1 rounded-full bg-cyan-300" />
              Open to relocation
            </span>
          </div>

          {/* Technology badges */}
          <ul
            className="mt-6 flex max-w-xl flex-wrap gap-2"
            aria-label="Core technologies"
          >
            {badges.map((badge, i) => (
              <motion.li
                key={badge}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.35 + i * 0.06 }}
                className="tech-chip"
              >
                {badge}
              </motion.li>
            ))}
          </ul>

          {/* Action buttons */}
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#projects"
              className="btn btn-primary group"
            >
              Explore projects
              <ArrowUpRight
                size={16}
                className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </a>

            {/* CV download: uses the shared site.cv configuration */}
            <a
              href={site.cv}
              download={CV_DOWNLOAD_NAME}
              type="application/pdf"
              className="btn btn-ghost"
              aria-label="Download Priyanshu Pawar's CV as PDF"
            >
              <Download size={16} />
              Download CV
            </a>

            <a
              href="#contact"
              className="btn btn-ghost"
            >
              Contact me
            </a>
          </div>

          {/* Social links */}
          <div className="mt-7 flex items-center gap-4">
            <a
              href={site.github}
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="social-icon"
            >
              <Github size={18} />
            </a>

            <a
              href={site.linkedin}
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="social-icon"
            >
              <Linkedin size={18} />
            </a>

            <span className="h-px w-12 bg-white/10" />

            <span className="text-xs tracking-wide text-slate-500">
              BUILD · LEARN · IMPROVE
            </span>
          </div>
        </motion.div>

        {/* Animated Java code editor */}
        <motion.div
          className="relative mx-auto w-full max-w-[540px]"
          initial={{ opacity: 0, scale: 0.92, y: 24 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{
            duration: 0.9,
            delay: 0.18,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          <motion.div
            className="editor-glow absolute -inset-5 rounded-[2rem]"
            animate={{
              opacity: [0.45, 0.8, 0.45],
              scale: [1, 1.035, 1],
            }}
            transition={{
              duration: 7,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />

          <motion.div
            className="editor-window relative"
            whileHover={{
              rotateX: -2,
              rotateY: 2,
              y: -5,
            }}
            transition={{
              type: 'spring',
              stiffness: 140,
              damping: 18,
            }}
            style={{
              transformStyle: 'preserve-3d',
              perspective: 1000,
            }}
          >
            <div className="editor-titlebar">
              <div className="flex items-center gap-2">
                <span className="window-dot bg-rose-400" />
                <span className="window-dot bg-amber-300" />
                <span className="window-dot bg-emerald-400" />
              </div>

              <div className="flex items-center gap-2 text-xs text-slate-400">
                <Terminal size={13} />
                <span className="font-mono">Engineer.java</span>
              </div>

              <span className="text-[10px] uppercase tracking-[.18em] text-slate-600">
                Java
              </span>
            </div>

            <div className="editor-tab">
              <span className="h-1.5 w-1.5 rounded-full bg-cyan-300" />
              src
              <span className="text-slate-600">/</span>
              Engineer.java
              <span className="ml-auto text-slate-600">UTF-8</span>
            </div>

            <div className="overflow-x-auto px-3 py-5 sm:px-6 sm:py-7">
              <pre
                className="font-mono text-[11px] leading-[2.25] sm:text-[13px]"
                aria-label="Animated Java code sample"
              >
                <code>
                  {codeLines.map((line, index) => (
                    <motion.span
                      key={line.n}
                      className="block whitespace-pre"
                      initial={{ opacity: 0, x: -8 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{
                        delay: 0.7 + index * 0.13,
                        duration: 0.35,
                      }}
                    >
                      <span className="mr-5 inline-block w-4 select-none text-right text-slate-700">
                        {line.n}
                      </span>

                      {line.parts.map((part, j) => (
                        <span key={j} className={part.c}>
                          {part.t}
                        </span>
                      ))}
                    </motion.span>
                  ))}
                </code>
              </pre>
            </div>

            <div className="editor-status">
              <span className="inline-flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                Ready to build
              </span>
              <span>Ln 09, Col 2</span>
              <span>Java 21</span>
            </div>
          </motion.div>

          {/* Floating information cards */}
          <motion.div
            className="floating-note floating-note-top"
            animate={{
              y: [0, -9, 0],
              rotate: [0, 1.5, 0],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          >
            <span className="note-icon text-cyan-300">{'{ }'}</span>
            <span>
              <strong>Clean code</strong>
              <small>Maintainable by design</small>
            </span>
          </motion.div>

          <motion.div
            className="floating-note floating-note-bottom"
            animate={{
              y: [0, 8, 0],
              rotate: [0, -1.5, 0],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          >
            <span className="note-icon text-emerald-300">✓</span>
            <span>
              <strong>Problem solver</strong>
              <small>Build · test · improve</small>
            </span>
          </motion.div>

          <motion.div
            className="absolute -right-3 -top-7 -z-10 h-24 w-24 rounded-full border border-cyan-300/10"
            animate={{ rotate: 360 }}
            transition={{
              duration: 35,
              repeat: Infinity,
              ease: 'linear',
            }}
          />
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <a
        href="#about"
        aria-label="Scroll to About"
        className="absolute bottom-7 left-1/2 hidden -translate-x-1/2 text-slate-500 transition hover:text-cyan-300 sm:block"
      >
        <motion.span
          className="block"
          animate={{ y: [0, 7, 0] }}
          transition={{
            duration: 2,
            repeat: Infinity,
          }}
        >
          <ArrowDown size={19} />
        </motion.span>
      </a>
    </section>
  )
}
