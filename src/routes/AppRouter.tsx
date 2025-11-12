import { BrowserRouter, Routes, Route } from 'react-router-dom'

import { ROUTE } from '../constants/routes'

import Layout from '../pages/Layout'
import Home from '../pages/Home'
import About from '../components/About'
import UnderConstruction from '@/pages/UnderConstruction'
import MissingPage from '@/pages/MissingPage'
import Catalogue from '@/pages/Catalogue'
import CatalogueIndex from '@/components/CatalogueIndex'

type Props = {}

function AppRouter({ }: Props) {

  return (
    <BrowserRouter>
      <Routes>
        <Route path={ROUTE.HOME} element={<Layout />}>
          <Route index element={<Home />} />
          <Route path={ROUTE.ABOUT.replace("#", '')} element={<About />} />
          <Route path={ROUTE.CATALOGUE.replace("#", '')} element={<Catalogue />}>
            <Route index element={<CatalogueIndex />} />
            <Route path={ROUTE.ROLLER_BLIND} element={<UnderConstruction />} />
            <Route path={ROUTE.VERTICAL_BLIND} element={<UnderConstruction />} />
            <Route path={ROUTE.WOODEN_BLIND} element={<UnderConstruction />} />
            <Route path={ROUTE.EYELET_CURTAIN} element={<UnderConstruction />} />
            <Route path={ROUTE.INT_FILM} element={<UnderConstruction />} />
            <Route path={ROUTE.VINYL_TILE} element={<UnderConstruction />} />
            <Route path={ROUTE.SKYLIGHT} element={<UnderConstruction />} />
            <Route path={ROUTE.MOTOR_SYSTEM} element={<UnderConstruction />} />
          </Route>
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