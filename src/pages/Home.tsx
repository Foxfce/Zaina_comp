import About from "../components/About"
import Contact from "../components/Contact"
import Projects from "../components/Projects"
import Testimonial from "../components/Testimonial"

type Props = {}

function Home({}: Props) {
  return (
    <>
    <About />
    <Projects />
    <Testimonial />
    <Contact />
    </>
  )
}

export default Home