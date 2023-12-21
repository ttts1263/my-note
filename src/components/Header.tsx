import styled from '@emotion/styled'
import { useLocation, useNavigate } from 'react-router'
import { routes } from '../routes'
import { useDarkModeStore } from '../zustand'

export function Header() {
  const { isDarkMode, toggleDarkMode } = useDarkModeStore()
  const navigate = useNavigate()
  const location = useLocation()
  const isHome = location.pathname === routes.home

  return (
    <StyledHeader className={isDarkMode ? 'dark-mode' : ''}>
      <StyledTitle>Simple Note</StyledTitle>

      <StyledLeftButtons>
        {isHome ? (
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
  font-size: 24px;
  text-align: center;
  background-color: white;
  color: black;

  &.dark-mode {
    background-color: #202124;
    color: white;
  }
`

const StyledTitle = styled.span`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`

const StyledLeftButtons = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  height: 24px;

  button {
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
