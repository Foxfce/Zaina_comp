import { Outlet } from 'react-router-dom'
import Header from '../conponents/Header'
import Footer from '../conponents/Footer'
import useHashLinkScroll from '../utils/useHashLinkScroll';

type Props = {}

function Layout({ }: Props) {
  useHashLinkScroll();

    return (
        <div className='w-full overflow-hidden'>
            <Header />
            <Outlet />
            <Footer />
        </div>
    )
}

export default Layout