import { useState } from 'react'
import { site } from '../config'

type Status = { kind: 'idle' | 'sending' | 'ok' | 'error'; msg?: string }
const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

export default function ContactForm() {
  const [status, setStatus] = useState<Status>({ kind: 'idle' })
  const [errors, setErrors] = useState<Record<string, string>>({})

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const form = e.currentTarget
    const d = Object.fromEntries(new FormData(form)) as Record<string, string>
    const err: Record<string, string> = {}
    if (!d.name?.trim()) err.name = 'Enter your name.'
    if (!emailRe.test(d.email ?? '')) err.email = 'Enter a valid email address.'
    if ((d.message ?? '').trim().length < 10) err.message = 'Write at least 10 characters.'
    setErrors(err)
    if (Object.keys(err).length) return
    if (!site.formEndpoint) {
      setStatus({ kind: 'error', msg: 'This form is not connected to a mail service yet, so nothing was sent. Please use the email or LinkedIn links.' })
      return
    }
    setStatus({ kind: 'sending' })
    try {
      const res = await fetch(site.formEndpoint, { method: 'POST', headers: { 'Content-Type': 'application/json', Accept: 'application/json' }, body: JSON.stringify(d) })
      if (!res.ok) throw new Error()
      setStatus({ kind: 'ok', msg: 'Message sent. Thank you, I will reply soon.' })
      form.reset()
    } catch {
      setStatus({ kind: 'error', msg: 'The message could not be sent. Please try again or use the email or LinkedIn links.' })
    }
  }

  const field = 'mt-1 w-full rounded-lg border border-line bg-white/[0.04] px-3 py-2.5 text-white placeholder:text-slate-500'
  return (
    <form onSubmit={onSubmit} noValidate className="glass space-y-4 rounded-2xl p-6">
      {(['name', 'email'] as const).map((n) => (
        <div key={n}>
          <label htmlFor={n} className="text-sm text-slate-300">{n === 'name' ? 'Name' : 'Email'}</label>
          <input id={n} name={n} type={n === 'email' ? 'email' : 'text'} className={field} aria-invalid={!!errors[n]} aria-describedby={errors[n] ? `${n}-e` : undefined} />
          {errors[n] && <p id={`${n}-e`} className="mt-1 text-sm text-red-400">{errors[n]}</p>}
        </div>
      ))}
      <div>
        <label htmlFor="message" className="text-sm text-slate-300">Message</label>
        <textarea id="message" name="message" rows={5} className={field} aria-invalid={!!errors.message} aria-describedby={errors.message ? 'message-e' : undefined} />
        {errors.message && <p id="message-e" className="mt-1 text-sm text-red-400">{errors.message}</p>}
      </div>
      <button className="btn btn-primary" disabled={status.kind === 'sending'}>{status.kind === 'sending' ? 'Sending…' : 'Send message'}</button>
      {status.msg && <p role="status" className={status.kind === 'ok' ? 'text-emerald-400' : 'text-amber-300'}>{status.msg}</p>}
    </form>
  )
}
