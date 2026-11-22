import type { Project } from '../data/projects'

/** Clearly-labelled illustrative preview. NOT a real screenshot. */
export default function Preview({ project }: { project: Project }) {
  return (
    <div className="relative h-40 overflow-hidden border-b border-line bg-gradient-to-br from-electric/15 via-ink to-violet/15" role="img"
      aria-label={`Illustrative preview for ${project.title}. Not a real screenshot.`}>
      <div className="absolute left-4 top-4 flex gap-1.5">{[0, 1, 2].map((i) => <span key={i} className="h-2 w-2 rounded-full bg-white/20" />)}</div>
      <div className="absolute inset-x-4 bottom-4 top-10 grid grid-cols-[1fr_2fr] gap-2">
        <div className="space-y-2 rounded-md bg-white/5 p-2">{[70, 50, 60, 40].map((w, i) => <div key={i} className="h-2 rounded bg-white/15" style={{ width: `${w}%` }} />)}</div>
        <div className="grid grid-cols-2 gap-2">{[0, 1, 2, 3].map((i) => <div key={i} className="rounded-md bg-white/5" />)}</div>
      </div>
      <span className="absolute right-3 top-3 rounded bg-black/50 px-2 py-0.5 font-mono text-[10px] text-slate-300">Illustrative preview</span>
    </div>
  )
}
