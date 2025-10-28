import { Link } from "react-router-dom"

type Props = {}

function Header({}: Props) {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/catalogue">Catalogue</Link>
      <Link to="/services">บริการของเรา</Link>
      <Link to="/project">ผลงาน</Link>
      <Link to="/news">บทความ</Link>
      <Link to="/contact">ติดต่อ</Link>
    </nav>
  )
}

export default Header