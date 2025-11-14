import { useEffect } from 'react'
import { motion } from 'framer-motion'
import { Menu, Sun, Moon, ArrowUpRight } from 'lucide-react'

export default function Navbar({ theme, onToggleTheme }) {
  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark')
  }, [theme])

  return (
    <header className="fixed inset-x-0 top-0 z-30">
      <div className="mx-auto max-w-6xl px-4">
        <motion.nav
          initial={{ y: -24, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="mt-6 flex items-center justify-between rounded-full border bg-white/70 px-4 py-2 shadow-sm backdrop-blur-md dark:border-white/10 dark:bg-black/60"
        >
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-full bg-black dark:bg-white" />
            <span className="font-medium tracking-tight text-black dark:text-white">Flames Studio</span>
          </div>
          <div className="hidden items-center gap-6 md:flex">
            <a href="#work" className="text-sm text-black/70 transition-colors hover:text-black dark:text-white/70 dark:hover:text-white">Work</a>
            <a href="#services" className="text-sm text-black/70 transition-colors hover:text-black dark:text-white/70 dark:hover:text-white">Services</a>
            <a href="#about" className="text-sm text-black/70 transition-colors hover:text-black dark:text-white/70 dark:hover:text-white">About</a>
            <a href="#contact" className="inline-flex items-center gap-1 rounded-full bg-black px-3 py-1.5 text-sm text-white hover:bg-black/90 dark:bg-white dark:text-black dark:hover:bg-white/90">
              Let's talk <ArrowUpRight className="h-4 w-4" />
            </a>
          </div>
          <div className="flex items-center gap-2 md:gap-3">
            <button onClick={onToggleTheme} aria-label="Toggle theme" className="rounded-full border p-2 text-black hover:bg-black/5 dark:border-white/10 dark:text-white dark:hover:bg-white/10">
              {theme === 'dark' ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
            </button>
            <button className="rounded-full border p-2 text-black hover:bg-black/5 md:hidden dark:border-white/10 dark:text-white dark:hover:bg-white/10">
              <Menu className="h-4 w-4" />
            </button>
          </div>
        </motion.nav>
      </div>
    </header>
  )
}
