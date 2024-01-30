import styled from '@emotion/styled'
import { useEffect, useRef } from 'react'
import { Header } from '../../components/Header'
import { LoginResponseType, sessionCheck, updateJwt } from '../../apis/login'
import { useNavigate } from 'react-router'
import { localSessionKey } from '../../constants'

export function LoginPage() {
  const loadSDKFlagRef = useRef(false)
  const navigate = useNavigate()

  useEffect(() => {
    if (!loadSDKFlagRef.current) {
      loadSDKFlagRef.current = true
      loadSDKAndRenderGoogleLogin((session) => {
        // 로그인 성공하면 로컬스토리지에 저장
        localStorage.setItem(localSessionKey, JSON.stringify(session))
        navigate('/')
      })
    }
  }, [navigate])

  // 127.0.0.1에서는 구글로그인이 안되서 localhost로 리다이렉트
  if (location.host.includes('127.0.0.1')) {
    location.href = `http://localhost:${location.port}/my-note/login`
  }

  return (
    <>
      <Header />
      <StyledLoginPageDiv>
        <div id="googleLoginDiv"></div>
        <button
          onClick={async () => {
            const result = await sessionCheck()
            console.log('sessionCheck result:', result)
          }}
        >
          Session Check
        </button>
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
function loadSDKAndRenderGoogleLogin(
  callback: (session: LoginResponseType) => void
) {
  const script = document.createElement('script')
  script.src = 'https://accounts.google.com/gsi/client'
  script.async = true // main 스크립트 실행 > SDK 다운로드 > 리액트 실행 > SDK 실행
  document.body.appendChild(script)
  script.addEventListener('load', () => {
    renderGoogleLogin('googleLoginDiv', callback)
  })
}

function renderGoogleLogin(
  divId: string,
  callback: (session: LoginResponseType) => void
) {
  const google = window.google
  const client_id = import.meta.env.VITE_GOOGLE_OAUTH_CLIENT_ID
  console.log('renderGoogleLogin client_id:', client_id)
  google.accounts.id.initialize({
    client_id,
    callback: async (response: { credential: string }) => {
      const result = await updateJwt(response.credential)
      console.log('# login result:', result)
      callback(result)
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
