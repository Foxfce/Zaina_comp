import { BrowserRouter, Routes, Route } from 'react-router-dom'

import {ROUTE} from '../constants/routes'

import Layout from '../pages/Layout'

type Props = {}

function AppRouter({ }: Props) {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={ROUTE.HOME} element={<Layout />}>
          <Route index element={<div className='mt-64'>Home page</div>} />
          <Route path={ROUTE.ABOUT} element={<div>About</div>} />
          <Route path={ROUTE.CATALOGUE} element={<div>Catalogue</div>} />
          <Route path={ROUTE.SERVICE} element={<div className='text-primary'>บริการของเรา</div>} />
          <Route path={ROUTE.WORK} element={<div>ผลงาน</div>} />
          <Route path={ROUTE.NEW} element={<div>บทความ</div>} />
          <Route path={ROUTE.CONTACT} element={<div>ติดต่อ</div>} />
          <Route path='/pallete' element={
            <>
              <div className='text-primary'>{`Primary\n`}</div>
              <div className='text-secondary'>{`Secondary\n`}</div>
              <div className='text-red-primary'>{`Red Primary\n`}</div>
              <div className='text-red-secondary'>{`Red Secondary\n`}</div>
              <div className='text-softperl-primary'>{`White primary\n`}</div>
              <div className='text-softperl-secondary'>{`White secondary\n`}</div>
              <div className='text-obsidianblack-primary'>{`Black primary\n`}</div>
              <div className='text-obsidianblack-secondary'>{`Black secondary\n`}</div>
              <div>
                <button className='text-center'>Button That Long</button>
              </div>
              <button className='btn-main shadow-red-primary shadow-xs'>Button Primary</button>
            </>
          } />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default AppRouter