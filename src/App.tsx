import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { HomePage } from './pages/home/HomePage'
import { MemoPage } from './pages/memo/MemoPage'
import { routes } from './routes'
import { LoginPage } from './pages/login/LoginPage'
import { PageProvider } from './PageProvider'

// 페이지를 관리하는 라우터 역할

function App() {
  const router = createBrowserRouter(
    [
      {
        path: routes.home,
        element: <PageProvider children={<HomePage />} />,
      },
      {
        path: routes.memo,
        element: <PageProvider children={<MemoPage />} />,
      },
      {
        path: routes.login,
        element: <PageProvider children={<LoginPage />} />,
      },
    ],
    { basename: '/my-note' }
  )

  return <RouterProvider router={router} />
}

export default App
