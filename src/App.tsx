import { AppLayout } from '@containers/AppLayout'
import { UserProvider } from '@context/userContext'
import { WelcomePage } from '@pages/WelcomePage'
import { PaymentPage } from '@pages/PaymentPage'
import { SuccessPage } from '@pages/SuccessPage'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import '@styles/main.css'


const createRouter = () => {

  return createBrowserRouter([
    {
      path: '/',
      element: <AppLayout />,
      children: [
        {
          path: '/',
          element: <WelcomePage />,
          index: true,
        },
        {
          path: 'payment',
          element: <PaymentPage />,
        },
        {
          path: 'success',
          element: <SuccessPage />,
        },
      ],
    },
  ])
}

export default function App() {
  const router = createRouter();

  return (
    <UserProvider>
      { router ? <RouterProvider router={router} /> : <div className='loading-message'>Loading...</div> }
    </UserProvider>
  )
}
