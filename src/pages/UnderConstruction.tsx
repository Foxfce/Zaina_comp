import { motion } from "motion/react"

type Props = {}

function UnderConstruction({}: Props) {
  return (
    <div className="min-h-screen mb-4 bg-cover bg-center flex item-center w-full overflow-hidden" style={{ backgroundImage: "url('/header_img.png')" }} id='Header'>
      
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        transition={{ duration: 0.5 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="container text-center mx-auto my-auto py-4 px-6 md:px-20 lg:px-32 text-softperl-primary"
      >
        <h1 className="text-5xl sm:text-6xl md:text-[82px] flex justify-center w-full font-semibold pt-20">UNDER</h1>
        <h2 className="text-5xl sm:text-6xl md:text-[82px] flex justify-center w-full font-semibold">CONSTRUCTION</h2>
        <h3>We will be back with more content soon...</h3>
        <div className="space-x-6 mt-16">
          <a href="/" className="transition-all"><button className="btn-main-2 transition-all">Home</button></a>
        </div>

      </motion.div>
    </div >
  )
}

export default UnderConstruction