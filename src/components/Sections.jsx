import { useEffect, useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export function Services() {
  const ref = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      const cards = gsap.utils.toArray('.service-card')
      cards.forEach((card, i) => {
        gsap.fromTo(
          card,
          { y: 24, opacity: 0, rotate: -0.5 },
          {
            y: 0,
            opacity: 1,
            rotate: 0,
            duration: 0.7,
            ease: 'power3.out',
            delay: i * 0.08,
            scrollTrigger: { trigger: card, start: 'top 80%' },
          }
        )
      })
    }, ref)
    return () => ctx.revert()
  }, [])

  const items = [
    { title: 'Product Design', desc: 'Interfaces, UX, systems and motion for web and mobile.', accent: 'from-emerald-400/40' },
    { title: 'Web Engineering', desc: 'High-performance sites and apps built with modern stacks.', accent: 'from-blue-400/40' },
    { title: 'Brand & Visual', desc: 'Identity systems, art direction and launch collateral.', accent: 'from-pink-400/40' },
  ]

  return (
    <section id="services" ref={ref} className="relative mx-auto max-w-6xl px-6 py-28">
      <div className="mb-12 flex items-end justify-between">
        <h2 className="text-4xl font-semibold text-black dark:text-white sm:text-5xl">Capabilities</h2>
        <p className="max-w-md text-sm text-black/60 dark:text-white/60">Design, code and motion under one roof. We ship fast without cutting corners.</p>
      </div>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((c, i) => (
          <div key={c.title} className="service-card group relative overflow-hidden rounded-2xl border p-6 dark:border-white/10">
            <div className={`pointer-events-none absolute -right-6 -top-6 h-28 w-28 rounded-full bg-gradient-to-br ${c.accent} to-transparent blur-2xl`} />
            <div className="text-sm uppercase tracking-widest text-black/60 dark:text-white/60">0{i + 1}</div>
            <h3 className="mt-3 text-xl font-medium text-black dark:text-white">{c.title}</h3>
            <p className="mt-2 text-sm text-black/70 dark:text-white/70">{c.desc}</p>
            <div className="mt-6 inline-flex items-center gap-2 text-sm text-black/70 transition-transform group-hover:translate-x-0.5 dark:text-white/70">
              Explore
              <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="M12 5l7 7-7 7"/></svg>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export function Work() {
  const ref = useRef(null)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const ctx = gsap.context(() => {
      const cards = gsap.utils.toArray('.work-card')
      gsap.fromTo(cards, { y: 40, opacity: 0, rotateX: -10 }, { y: 0, opacity: 1, rotateX: 0, duration: 0.8, stagger: 0.12, ease: 'power3.out', scrollTrigger: { trigger: el, start: 'top 75%' } })
    }, el)
    return () => ctx.revert()
  }, [])

  const projects = [
    { title: 'Mynte-inspired Portfolio', tag: 'Website', img: 'https://images.unsplash.com/photo-1556761175-4b46a572b786?q=80&w=1887&auto=format&fit=crop' },
    { title: 'SaaS Analytics', tag: 'Web App', img: 'https://images.unsplash.com/photo-1556157382-97eda2d62296?q=80&w=1974&auto=format&fit=crop' },
    { title: 'Brand Motion Reel', tag: 'Motion', img: 'https://images.unsplash.com/photo-1518779578993-ec3579fee39f?q=80&w=1974&auto=format&fit=crop' },
  ]

  return (
    <section id="work" ref={ref} className="mx-auto max-w-6xl px-6 py-28">
      <div className="mb-10 flex items-end justify-between">
        <h2 className="text-4xl font-semibold text-black dark:text-white sm:text-5xl">Selected work</h2>
        <a href="#contact" className="text-sm text-black/60 underline-offset-4 hover:underline dark:text-white/60">All projects</a>
      </div>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((p) => (
          <div key={p.title} className="work-card group relative overflow-hidden rounded-2xl border ring-1 ring-black/5 transition-transform hover:-translate-y-1 dark:border-white/10 dark:ring-white/5">
            <img src={p.img} alt="" className="h-64 w-full object-cover transition-transform duration-700 group-hover:scale-105" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
            <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
              <div>
                <div className="text-xs uppercase tracking-widest text-white/70">{p.tag}</div>
                <div className="text-lg font-medium text-white">{p.title}</div>
              </div>
              <div className="grid h-9 w-9 place-items-center rounded-full bg-white/90 text-black transition-transform group-hover:translate-x-0.5 dark:bg-black/80 dark:text-white">
                <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="M12 5l7 7-7 7"/></svg>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export function CTA() {
  const { scrollYProgress } = useScroll()
  const scale = useTransform(scrollYProgress, [0.7, 1], [1, 1.04])

  return (
    <section id="contact" className="relative mx-auto max-w-6xl px-6 py-28">
      <motion.div style={{ scale }} className="relative overflow-hidden rounded-3xl border p-10 text-center ring-1 ring-black/5 dark:border-white/10 dark:ring-white/5">
        <div className="pointer-events-none absolute -left-10 -top-10 h-40 w-40 rounded-full bg-gradient-to-br from-emerald-400/30 to-transparent blur-2xl" />
        <h3 className="text-3xl font-medium text-black dark:text-white sm:text-4xl">Have an idea? Let's build it.</h3>
        <p className="mx-auto mt-2 max-w-xl text-sm text-black/70 dark:text-white/70">We help startups and brands ship faster: strategy, design, engineering and motion. Drop a line and we’ll get back within 24h.</p>
        <a href="mailto:hello@flames.studio" className="mt-6 inline-flex items-center gap-2 rounded-full bg-black px-6 py-3 text-white transition-all hover:-translate-y-0.5 hover:shadow-lg hover:shadow-black/20 dark:bg-white dark:text-black dark:hover:shadow-white/10">
          hello@flames.studio
        </a>
      </motion.div>
    </section>
  )
}
