import styled from '@emotion/styled'
import { useNavigate } from 'react-router'
import { routes } from '../routes'

export function Header() {
  const navigate = useNavigate()

  return (
    <StyledHeader>
      <button
        onClick={() => {
          navigate(routes.home)
        }}
      >{`<`}</button>
      <span className="header">헤더</span>
    </StyledHeader>
  )
}

const StyledHeader = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1;
  width: 100%;
  padding: 8px;
  font-size: 24px;
  background-color: white;
  text-align: center;
`
