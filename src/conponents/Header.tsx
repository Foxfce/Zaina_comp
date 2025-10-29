import { Link } from "react-router-dom"
import { assets } from "../assets/mockup/assets.ts"
import NavBar from "./NavBar.tsx"

type Props = {}

function Header({ }: Props) {
  return (
    <div className="absolute top-0 left-0 w-full z-10">

      {/* Logo */}
      <div className="container mx-auto flex justify-between items-center py-4 px-6 md:px-20 lg:px-32 bg-transparent">
        <img src={assets.logo} alt="" />

        <NavBar />
      </div>
    </div>
  )
}

export default Header