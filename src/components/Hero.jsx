import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import Spline from '@splinetool/react-spline'

export default function Hero({ theme }) {
  const overlayRef = useRef(null)
  const glowRef = useRef(null)

  useEffect(() => {
    if (!overlayRef.current) return
    overlayRef.current.animate(
      [
        { opacity: 0 },
        { opacity: 0.35 },
        { opacity: 0 }
      ],
      { duration: 2200, easing: 'ease-in-out' }
    )
  }, [])

  useEffect(() => {
    if (!glowRef.current) return
    glowRef.current.animate(
      [
        { transform: 'translate(-50%, -50%) scale(1)', opacity: 0.4 },
        { transform: 'translate(-50%, -50%) scale(1.08)', opacity: 0.6 },
        { transform: 'translate(-50%, -50%) scale(1)', opacity: 0.4 },
      ],
      { duration: 5000, iterations: Infinity, direction: 'alternate', easing: 'ease-in-out' }
    )
  }, [])

  return (
    <section className="relative h-[92vh] w-full overflow-hidden" id="top">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/a6HhFsV3-DN9Z-yP/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div ref={overlayRef} className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-black/40 dark:via-white/10 dark:to-white/20" />
      <div ref={glowRef} className="pointer-events-none absolute left-1/2 top-1/2 h-80 w-80 -translate-x-1/2 -translate-y-1/2 rounded-full blur-3xl" style={{ background: theme === 'dark' ? 'radial-gradient(40% 40% at 50% 50%, rgba(255,255,255,0.14), transparent)' : 'radial-gradient(40% 40% at 50% 50%, rgba(0,0,0,0.12), transparent)' }} />

      <div className="relative z-10 flex h-full items-center">
        <div className="mx-auto w-full max-w-6xl px-6">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="max-w-2xl"
          >
            <div className="inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs tracking-wide backdrop-blur-sm dark:border-white/10 border-black/10">
              <span className="inline-block h-1.5 w-1.5 rounded-full bg-emerald-500" />
              Now booking projects for Q1–Q2
            </div>
            <h1 className="mt-5 text-5xl font-semibold leading-tight text-black dark:text-white sm:text-6xl">
              We design and build remarkable digital products
            </h1>
            <p className="mt-4 text-base text-black/70 dark:text-white/70 sm:text-lg">
              A small, senior team crafting websites, SaaS and brand experiences with motion at the core.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a href="#contact" className="group inline-flex items-center gap-2 rounded-full bg-black px-5 py-3 text-white transition-all hover:-translate-y-0.5 hover:bg-black/90 dark:bg-white dark:text-black dark:hover:bg-white/90">
                Start a project
                <svg className="h-4 w-4 transition-transform group-hover:translate-x-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="M12 5l7 7-7 7"/></svg>
              </a>
              <a href="#work" className="inline-flex items-center gap-2 rounded-full border px-5 py-3 text-black transition-colors hover:bg-black/5 dark:border-white/20 dark:text-white dark:hover:bg-white/5">
                See our work
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
