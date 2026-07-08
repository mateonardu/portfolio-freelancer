import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Projects from './components/Projects'
import Stack from './components/Stack'
import About from './components/About'
import Contact from './components/Contact'

export default function App() {
  return (
    <>
      <Navbar />
      <span id="top" />
      <main>
        <Hero />
        <Projects />
        <Stack />
        <About />
        <Contact />
      </main>
    </>
  )
}
