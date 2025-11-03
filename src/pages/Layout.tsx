import { Outlet } from 'react-router-dom'
import Header from '../components/Header'
import Footer from '../components/Footer'
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