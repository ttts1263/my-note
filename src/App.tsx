import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { HomePage } from './pages/home/HomePage'
import { AboutPage } from './pages/about/AboutPage'
import { routes } from './route'

// 페이지를 관리하는 라우터 역할

function App() {
  const router = createBrowserRouter(
    [
      {
        path: routes.home,
        element: <HomePage />,
      },
      {
        path: routes.about,
        element: <AboutPage />,
      },
    ],
    { basename: '/my-note' }
  )

  return <RouterProvider router={router} />
}

export default App
