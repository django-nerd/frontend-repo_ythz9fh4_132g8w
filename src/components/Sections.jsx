import { useEffect, useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import gsap from 'gsap'

export function Services() {
  const cards = [
    { title: 'Product Design', desc: 'Interfaces, UX, systems and motion for web and mobile.' },
    { title: 'Web Engineering', desc: 'High-performance sites and apps built with modern stacks.' },
    { title: 'Brand & Visual', desc: 'Identity systems, art direction and launch collateral.' },
  ]

  return (
    <section id="services" className="relative mx-auto max-w-6xl px-6 py-24">
      <div className="mb-12 flex items-end justify-between">
        <h2 className="text-3xl font-semibold text-black dark:text-white sm:text-4xl">What we do</h2>
        <p className="max-w-md text-sm text-black/60 dark:text-white/60">We blend design, code and storytelling into crisp digital experiences. Small team, senior minds, fast delivery.</p>
      </div>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {cards.map((c, i) => (
          <motion.div
            key={c.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="group rounded-2xl border p-6 transition-colors hover:bg-black/5 dark:border-white/10 dark:hover:bg-white/5"
          >
            <div className="text-sm uppercase tracking-widest text-black/60 dark:text-white/60">0{i + 1}</div>
            <h3 className="mt-2 text-xl font-medium text-black dark:text-white">{c.title}</h3>
            <p className="mt-2 text-sm text-black/70 dark:text-white/70">{c.desc}</p>
            <div className="mt-6 h-8 w-8 rounded-full border transition-colors group-hover:bg-black group-hover:text-white dark:border-white/10" />
          </motion.div>
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
      gsap.fromTo(
        '.work-card',
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6, stagger: 0.1, ease: 'power2.out', scrollTrigger: { trigger: el, start: 'top 80%' } }
      )
    }, el)
    return () => ctx.revert()
  }, [])

  const projects = [
    { title: 'Mynte-inspired Portfolio', tag: 'Website', img: 'https://images.unsplash.com/photo-1556761175-4b46a572b786?q=80&w=1887&auto=format&fit=crop' },
    { title: 'SaaS Analytics', tag: 'Web App', img: 'https://images.unsplash.com/photo-1556157382-97eda2d62296?q=80&w=1974&auto=format&fit=crop' },
    { title: 'Brand Motion Reel', tag: 'Motion', img: 'https://images.unsplash.com/photo-1518779578993-ec3579fee39f?q=80&w=1974&auto=format&fit=crop' },
  ]

  return (
    <section id="work" ref={ref} className="mx-auto max-w-6xl px-6 py-24">
      <div className="mb-10 flex items-end justify-between">
        <h2 className="text-3xl font-semibold text-black dark:text-white sm:text-4xl">Selected work</h2>
        <a href="#contact" className="text-sm text-black/60 underline-offset-4 hover:underline dark:text-white/60">All projects</a>
      </div>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((p) => (
          <div key={p.title} className="work-card group relative overflow-hidden rounded-2xl border dark:border-white/10">
            <img src={p.img} alt="" className="h-56 w-full object-cover transition-transform duration-500 group-hover:scale-105" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            <div className="absolute bottom-4 left-4 right-4">
              <div className="text-xs uppercase tracking-widest text-white/70">{p.tag}</div>
              <div className="text-lg font-medium text-white">{p.title}</div>
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
    <section id="contact" className="relative mx-auto max-w-6xl px-6 py-24">
      <motion.div style={{ scale }} className="rounded-3xl border p-10 text-center dark:border-white/10">
        <h3 className="text-2xl font-medium text-black dark:text-white sm:text-3xl">Have an idea? Let's build it.</h3>
        <p className="mx-auto mt-2 max-w-xl text-sm text-black/70 dark:text-white/70">We help startups and brands ship faster: strategy, design, engineering and motion. Drop a line and we’ll get back within 24h.</p>
        <a href="mailto:hello@flames.studio" className="mt-6 inline-flex items-center gap-2 rounded-full bg-black px-6 py-3 text-white hover:bg-black/90 dark:bg-white dark:text-black dark:hover:bg-white/90">
          hello@flames.studio
        </a>
      </motion.div>
    </section>
  )
}
