import { Outlet } from 'react-router-dom'
import Header from '../conponents/Header'
import Footer from '../conponents/Footer'

type Props = {}

function Layout({ }: Props) {
    return (
        <>
            <Header />
            <Outlet />
            <Footer />
        </>
    )
}

export default Layout