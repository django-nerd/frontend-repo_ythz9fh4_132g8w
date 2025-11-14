import { useState, useEffect } from 'react'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import { Services, Work, CTA } from './components/Sections'

function App() {
  const [theme, setTheme] = useState('dark')

  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark')
  }, [theme])

  return (
    <div className={`min-h-screen w-full bg-white text-black dark:bg-black dark:text-white`}>
      <Navbar theme={theme} onToggleTheme={() => setTheme((t) => (t === 'dark' ? 'light' : 'dark'))} />
      <main>
        <Hero theme={theme} />
        <Services />
        <Work />
        <CTA />
      </main>
      <footer className="border-t py-10 text-center text-sm text-black/60 dark:border-white/10 dark:text-white/60">
        © {new Date().getFullYear()} Flames Studio — All rights reserved.
      </footer>
    </div>
  )
}

export default App
