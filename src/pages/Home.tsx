import About from "../conponents/About"
import Projects from "../conponents/Projects"

type Props = {}

function Home({}: Props) {
  return (
    <>
    <About />
    <Projects />
    </>
  )
}

export default Home