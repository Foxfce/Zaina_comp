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
          <Route path='/services' element={<div>บริการของเรา</div>} />
          <Route path='/project' element={<div>ผลงาน</div>} />
          <Route path='/news' element={<div>บทความ</div>} />
          <Route path='/contact' element={<div>ติดต่อ</div>} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default AppRouter