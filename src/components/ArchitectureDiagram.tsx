import { motion } from 'framer-motion'

export default function ArchitectureDiagram({ steps, title }: { steps: string[]; title: string }) {
  return (
    <figure className="glass rounded-2xl p-5">
      <figcaption className="mb-4 text-sm text-slate-400">{title}</figcaption>
      <ol className="flex flex-col items-stretch gap-2 md:flex-row md:items-center">
        {steps.map((s, i) => (
          <li key={s} className="flex flex-1 items-center gap-2 md:flex-row">
            <motion.div initial={{ opacity: 0, y: 8 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
              className="flex-1 rounded-lg border border-accent/30 bg-accent/5 px-3 py-3 text-center text-sm text-white">{s}</motion.div>
            {i < steps.length - 1 && <span aria-hidden className="text-accent">→</span>}
          </li>
        ))}
      </ol>
    </figure>
  )
}
