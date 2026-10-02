import { useEffect } from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import { Navbar } from './components/Navbar'
import { Footer } from './components/Footer'
import { NoticeModal } from './components/NoticeModal'
import Home from './pages/Home'
import Pods from './pages/Pods'
import ApnaPC from './pages/ApnaPC'
import About from './pages/About'
import StartPod from './pages/StartPod'
import Stories from './pages/Stories'
import Donate from './pages/Donate'
import Contact from './pages/Contact'

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior })
  }, [pathname])
  return null
}

function NotFound() {
  return (
    <section className="shell flex min-h-[60vh] flex-col items-center justify-center py-24 text-center">
      <p className="font-display text-[4rem] leading-none font-extrabold text-brand-600">404</p>
      <h1 className="mt-4 text-[1.8rem] font-extrabold">This page isn’t in the lesson plan.</h1>
      <p className="mt-3 max-w-md text-[0.95rem] leading-relaxed text-ink-600">
        The link you followed doesn’t exist in this student concept site. Try the home page — or the official Apni Pathshala
        website if you were looking for something real.
      </p>
      <div className="mt-7 flex flex-wrap justify-center gap-3">
        <a href="/" className="rounded-full bg-brand-600 px-5 py-3 font-semibold text-white shadow-glow hover:bg-brand-700">
          Back home
        </a>
        <a
          href="https://www.apnipathshala.org"
          target="_blank"
          rel="noreferrer noopener"
          className="rounded-full border border-ink-200 px-5 py-3 font-semibold text-ink-800 hover:border-brand-300"
        >
          Official site ↗
        </a>
      </div>
    </section>
  )
}

export default function App() {
  return (
    <div className="flex min-h-screen flex-col bg-white">
      <ScrollToTop />
      <Navbar />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pods" element={<Pods />} />
          <Route path="/apna-pc" element={<ApnaPC />} />
          <Route path="/about" element={<About />} />
          <Route path="/start-a-pod" element={<StartPod />} />
          <Route path="/stories" element={<Stories />} />
          <Route path="/donate" element={<Donate />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
      <NoticeModal />
    </div>
  )
}
