
import NavBar from "./NavBar.tsx"
import {motion} from "motion/react";

type Props = {}

function Header({ }: Props) {
  return (
    <div className="min-h-screen mb-4 bg-cover bg-center flex item-center w-full overflow-hidden" style={{ backgroundImage: "url('/header_img.png')" }} id='Header'>
      <NavBar />
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        transition={{ duration: 0.5 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="container text-center mx-auto my-auto py-4 px-6 md:px-20 lg:px-32 text-softperl-primary"
      >
        <h2 className="text-5xl sm:text-6xl md:text-[82px] inline-block max-w-3xl font-semibold pt-20">ZAINA INTERNATIONAL</h2>
        <h3>Premium curtains and home décor crafted with care and installed by professionals</h3>
        <div className="space-x-6 mt-16">
          <a href="#Projects"><button className="btn-transparent transition-all">Products</button></a>
          <a href="#Contact"><button className="btn-main-2 transition-all">Contact Us</button></a>
        </div>

      </motion.div>
    </div >
  )
}

export default Header