import Navbar from "@/components/Navbar"
import Hero from "@/components/Hero"
import About from "@/components/About"
import Blog from "@/components/Blog"
import Events from "@/components/Events"

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <About />
      <Blog />
      <Events />
    </main>
  )
}
