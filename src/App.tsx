import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { HomePage } from './pages/home/HomePage'
import { MemoPage } from './pages/about/MemoPage'
import { routes } from './routes'

// 페이지를 관리하는 라우터 역할

function App() {
  const router = createBrowserRouter(
    [
      {
        path: routes.home,
        element: <HomePage />,
      },
      {
        path: routes.memo,
        element: <MemoPage />,
      },
    ],
    { basename: '/my-note' }
  )

  return <RouterProvider router={router} />
}

export default App
