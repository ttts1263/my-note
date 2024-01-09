import styled from '@emotion/styled'
import { useEffect, useRef } from 'react'
import { Header } from '../../components/Header'
// import { jwtDecode } from 'jwt-decode'
import { updateJwt } from '../../apis/login'

export function LoginPage() {
  const loadSDKFlagRef = useRef(false)
  useEffect(() => {
    if (!loadSDKFlagRef.current) {
      loadSDKFlagRef.current = true
      loadSDKAndRenderGoogleLogin()
    }
  }, [])

  // 127.0.0.1에서는 구글로그인이 안되서 localhost로 리다이렉트
  if (location.host.includes('127.0.0.1')) {
    location.href = `http://localhost:${location.port}/my-note/login`
  }

  return (
    <>
      <Header />
      <StyledLoginPageDiv>
        <div id="googleLoginDiv"></div>
      </StyledLoginPageDiv>
    </>
  )
}

declare global {
  interface Window {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    google: any
  }
}

// Google Sign-In SDK 추가
function loadSDKAndRenderGoogleLogin() {
  const script = document.createElement('script')
  script.src = 'https://accounts.google.com/gsi/client'
  script.async = true // main 스크립트 실행 > SDK 다운로드 > 리액트 실행 > SDK 실행
  document.body.appendChild(script)
  script.addEventListener('load', () => {
    renderGoogleLogin('googleLoginDiv')
  })
}

function renderGoogleLogin(divId: string) {
  const google = window.google
  const client_id = import.meta.env.VITE_GOOGLE_OAUTH_CLIENT_ID
  console.log('renderGoogleLogin client_id:', client_id)
  google.accounts.id.initialize({
    client_id,
    callback: async (response: { credential: string }) => {
      // const decoded: { name: string; email: string; picture: string } =
      //   jwtDecode(response.credential)
      const result = await updateJwt(response.credential)
      console.log(result)
    },
  })
  google.accounts.id.renderButton(
    document.getElementById(divId),
    { theme: 'outline', size: 'large' } // customization attributes
  )
  google.accounts.id.prompt() // also display the One Tap dialog
}

const StyledLoginPageDiv = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`
