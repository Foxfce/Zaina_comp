import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Layout from '../pages/Layout'

type Props = {}

function AppRouter({ }: Props) {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<div>Home page</div>} />
          <Route path='/about' element={<div>About</div>} />
          <Route path='/catalogue' element={<div>Catalogue</div>} />
          <Route path='/services' element={<div className='text-primary'>บริการของเรา</div>} />
          <Route path='/project' element={<div>ผลงาน</div>} />
          <Route path='/news' element={<div>บทความ</div>} />
          <Route path='/contact' element={<div>ติดต่อ</div>} />
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