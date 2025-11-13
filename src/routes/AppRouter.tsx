import { BrowserRouter, Routes, Route } from 'react-router-dom'

import { ROUTE } from '../constants/routes'

import Layout from '../pages/Layout'
import Home from '../pages/Home'
import About from '../components/About'
import UnderConstruction from '@/pages/UnderConstruction'
import MissingPage from '@/pages/MissingPage'
import Catalogue from '@/pages/Catalogue'

type Props = {}

function AppRouter({ }: Props) {

  return (
    <BrowserRouter>
      <Routes>
        <Route path={ROUTE.HOME} element={<Layout />}>
          <Route index element={<Home />} />
          <Route path={ROUTE.ABOUT.replace("#", '')} element={<About />} />
          <Route path={ROUTE.CATALOGUE.replace("#", '')+'/:product'} element={<Catalogue />} />
          <Route path={ROUTE.SERVICE.replace("#", '')} element={<UnderConstruction />} />
          <Route path={ROUTE.WORK.replace("#", '')} element={<UnderConstruction />} />
          <Route path={ROUTE.NEW.replace("#", '')} element={<UnderConstruction />} />
          <Route path={ROUTE.CONTACT.replace("#", '')} element={<UnderConstruction />} />
          <Route path='*' element={<MissingPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default AppRouter