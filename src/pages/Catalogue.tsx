import { motion } from "motion/react";
import { Outlet, useParams } from "react-router-dom"


type Props = {}

function Catalogue({ }: Props) {
  const {product} = useParams();

  return (
    <>
      <div className="min-h-80 bg-cover bg-center flex item-center w-full overflow-hidden" style={{ backgroundImage: "url('/header_img.png')" }}>
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          transition={{ duration: 0.5 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="container text-center mx-auto my-auto py-4 px-6 md:px-20 lg:px-32 text-softperl-primary"
        >
          <h2 className="text-2xl sm:text-3xl md:text-[64px] inline-block max-w-3xl pt-20">PRODUCT</h2>
        </motion.div>
      </div>

      <div className="container flex flex-col justify-center items-center mx-auto px-6 md:px-20 lg:px-32 w-full">
        <Outlet />
      </div>
    </>
  )
}

export default Catalogue