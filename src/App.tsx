import { Suspense, lazy, useEffect } from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import Nav from './components/Nav'
import Footer from './components/Footer'
import Home from './pages/Home'

const ProjectDetails = lazy(() => import('./pages/ProjectDetails'))

function ScrollManager() {
  const { pathname, hash } = useLocation()
  useEffect(() => {
    if (hash) {
      const el = document.getElementById(hash.slice(1))
      if (el) { el.scrollIntoView(); return }
    }
    window.scrollTo(0, 0)
  }, [pathname, hash])
  return null
}

export default function App() {
  return (
    <>
      <a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded focus:bg-accent focus:px-3 focus:py-2 focus:text-ink">Skip to content</a>
      <ScrollManager />
      <Nav />
      <main id="main">
        <Suspense fallback={<div className="p-24 text-center">Loading…</div>}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects/:slug" element={<ProjectDetails />} />
            <Route path="*" element={<div className="px-6 py-40 text-center"><h1 className="text-3xl">Page not found</h1><a className="btn btn-primary mt-6" href="/">Back to home</a></div>} />
          </Routes>
        </Suspense>
      </main>
      <Footer />
    </>
  )
}
