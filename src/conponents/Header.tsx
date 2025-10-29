import { Link } from "react-router-dom"
import { assets } from "../assets/mockup/assets.ts"

type Props = {}

function Header({ }: Props) {
  return (
    <div className="absolute top-0 left-0 w-full z-10">

      {/* Logo */}
      <div className="container mx-auto flex justify-between items-center py-4 px-6 md:px-20 lg:px-32 bg-transparent">
        <img src={assets.logo} alt="" />

        <nav className="hidden md:flex gap-7">
          <Link to="/" className="cursor-pointer hover:text-primary">Home</Link>
          <Link to="/about" className="cursor-pointer hover:text-primary">About</Link>
          <Link to="/catalogue" className="cursor-pointer hover:text-primary">Catalogue</Link>
          <Link to="/services" className="cursor-pointer hover:text-primary">บริการของเรา</Link>
          <Link to="/project" className="cursor-pointer hover:text-primary">ผลงาน</Link>
          <Link to="/news" className="cursor-pointer hover:text-primary">บทความ</Link>
          <Link to="/contact" className="cursor-pointer hover:text-primary">ติดต่อ</Link>
          <Link to="/pallete" className="cursor-pointer hover:text-primary">Pallete</Link>
        </nav>
      </div>
    </div>
  )
}

export default Header