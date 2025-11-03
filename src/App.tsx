import AppRouter from './routes/AppRouter'

import { Slide, ToastContainer } from 'react-toastify';

const App: React.FC = () => {
  return (
    <>
      <ToastContainer
        position="bottom-right"
        autoClose={5000}
        limit={3}
        hideProgressBar
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        transition={Slide}
      />
      <AppRouter />
    </>
  )
}

export default App