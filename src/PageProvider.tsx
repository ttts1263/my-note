import { ReactNode, useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router'
import { sessionCheck } from './apis/login'
import { logoutAII } from './utils'

export function PageProvider({ children }: { children: ReactNode }) {
  const location = useLocation()
  const navigate = useNavigate()

  useEffect(() => {
    console.log(location)
    sessionCheck().catch((error) => {
      console.error(error)
      // 로그아웃
      // 프론트: localStorage에서 localSessionKey 삭제
      // 백엔드: logout api 호출해서 백엔드 쿠키 삭제
      logoutAII(navigate)
    })
  }, [location, navigate])

  return <>{children}</>
}
