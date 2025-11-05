import Header from "@/components/Header"
import About from "../components/About"
import Contact from "../components/Contact"
import Projects from "../components/Projects"
import Testimonial from "../components/Testimonial"
// import ProductsPreview from "@/components/products/ProductsPreview"

type Props = {}

function Home({}: Props) {
  return (
    <>
    <Header />
    <About />
    {/* <ProductsPreview /> */}
    <Projects />
    <Testimonial />
    <Contact />
    </>
  )
}

export default Home