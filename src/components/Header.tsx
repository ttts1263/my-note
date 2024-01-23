import styled from '@emotion/styled'
import { useLocation, useNavigate } from 'react-router'
import { routes } from '../routes'
import { useDarkModeStore } from '../zustand'
import { Link } from 'react-router-dom'
import { LoginResponseType } from '../apis/login'

export function Header() {
  const { isDarkMode, toggleDarkMode } = useDarkModeStore()
  const navigate = useNavigate()
  const location = useLocation()
  const isHomePage = location.pathname === routes.home
  const session = localStorage.getItem('my-note-session')
  let userData: LoginResponseType['userData'] = {
    email: '',
    name: '',
    picture: '',
  }
  try {
    userData = session ? JSON.parse(session).userData : {}
  } catch (error) {
    console.error(error)
  }

  return (
    <StyledHeader className={isDarkMode ? 'dark-mode' : ''}>
      <StyledLeftButtons>
        {isHomePage ? (
          <span>{` `}</span>
        ) : (
          <StyledBackButton
            className={isDarkMode ? 'dark-mode' : ''}
            onClick={() => {
              navigate(routes.home)
            }}
          >
            {`<`}
          </StyledBackButton>
        )}
        <StyledTitle>Simple Note</StyledTitle>
      </StyledLeftButtons>

      <StyledRightButtons>
        <button
          className={isDarkMode ? 'dark-mode' : ''}
          onClick={() => {
            toggleDarkMode()
            localStorage.setItem('dark-mode', isDarkMode ? 'false' : 'true')
          }}
        >
          다크모드
        </button>

        {!userData.name ? (
          <Link to={routes.login}>로그인</Link>
        ) : (
          <div>{userData.name}</div>
        )}
      </StyledRightButtons>
    </StyledHeader>
  )
}

const StyledHeader = styled.header`
  position: fixed;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  z-index: 1;

  display: flex;
  align-items: center; // 세로
  justify-content: space-between; // 가로

  width: 360px;
  padding: 8px;
  font-size: 14px;
  text-align: center;
  background-color: white;
  color: black;

  &.dark-mode {
    background-color: #202124;
    color: white;
  }
`

const StyledTitle = styled.span`
  font-size: 24px;
`

const StyledLeftButtons = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4px;
  height: 24px;

  button,
  a {
    font-size: 14px;
    text-decoration: none;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 4px;

    background: none;
    border: none;
    outline: none;
    cursor: pointer;
    height: 24px;
    :hover {
      background-color: lightgray;
    }
    &.dark-mode {
      color: white;
      :hover {
        background-color: none;
      }
    }
  }
`

const StyledRightButtons = StyledLeftButtons

const StyledBackButton = styled.button`
  &.dark-mode {
    color: white;
  }
`
