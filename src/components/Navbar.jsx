import { useEffect } from 'react'
import { motion, useScroll, useSpring } from 'framer-motion'
import { Menu, Sun, Moon, ArrowUpRight } from 'lucide-react'

export default function Navbar({ theme, onToggleTheme }) {
  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark')
  }, [theme])

  const { scrollYProgress } = useScroll()
  const width = useSpring(scrollYProgress, { stiffness: 120, damping: 20, mass: 0.2 })

  return (
    <header className="fixed inset-x-0 top-0 z-30">
      <div className="mx-auto max-w-6xl px-4">
        <motion.nav
          initial={{ y: -24, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="mt-6 flex items-center justify-between rounded-full border bg-white/60 px-4 py-2 shadow-sm ring-1 ring-black/5 backdrop-blur-md dark:border-white/10 dark:bg-black/50 dark:ring-white/5"
        >
          <a href="#top" className="group flex items-center gap-2">
            <div className="h-8 w-8 rounded-full bg-gradient-to-br from-black to-black/60 ring-1 ring-black/10 dark:from-white dark:to-white/70 dark:ring-white/10" />
            <span className="font-medium tracking-tight text-black transition-colors group-hover:text-black/70 dark:text-white dark:group-hover:text-white/80">Flames Studio</span>
          </a>
          <div className="hidden items-center gap-6 md:flex">
            {[
              { href: '#work', label: 'Work' },
              { href: '#services', label: 'Services' },
              { href: '#about', label: 'About' },
            ].map((l) => (
              <a key={l.href} href={l.href} className="relative text-sm text-black/70 transition-colors hover:text-black dark:text-white/70 dark:hover:text-white">
                <span className="after:absolute after:-bottom-1 after:left-0 after:h-px after:w-0 after:bg-current after:transition-all hover:after:w-full">
                  {l.label}
                </span>
              </a>
            ))}
            <a href="#contact" className="group inline-flex items-center gap-1 rounded-full bg-black px-3 py-1.5 text-sm text-white transition-all hover:-translate-y-0.5 hover:shadow-lg hover:shadow-black/20 dark:bg-white dark:text-black dark:hover:shadow-white/10">
              Let's talk <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </a>
          </div>
          <div className="flex items-center gap-2 md:gap-3">
            <button onClick={onToggleTheme} aria-label="Toggle theme" className="rounded-full border p-2 text-black transition-colors hover:bg-black/5 dark:border-white/10 dark:text-white dark:hover:bg-white/10">
              {theme === 'dark' ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
            </button>
            <button className="rounded-full border p-2 text-black md:hidden transition-colors hover:bg-black/5 dark:border-white/10 dark:text-white dark:hover:bg-white/10">
              <Menu className="h-4 w-4" />
            </button>
          </div>
        </motion.nav>
      </div>
      <motion.div className="pointer-events-none absolute bottom-0 left-0 h-0.5 bg-black/60 dark:bg-white/60" style={{ width: width }} />
    </header>
  )
}
