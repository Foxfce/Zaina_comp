import { Outlet } from 'react-router-dom'
import Footer from '../components/Footer'
import useHashLinkScroll from '../utils/useHashLinkScroll';
import NavBar from '@/components/NavBar';

type Props = {}

function Layout({ }: Props) {
  useHashLinkScroll();

    return (
        <div className='w-full overflow-hidden'>
            <NavBar />
            <Outlet />
            <Footer />
        </div>
    )
}

export default Layout