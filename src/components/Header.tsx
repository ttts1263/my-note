import styled from '@emotion/styled'
import { useNavigate } from 'react-router'
import { routes } from '../routes'

export function Header() {
  const navigate = useNavigate()

  return (
    <StyledHeader>
      {/* TODO: 버튼을 왼쪽에 위치시키기 */}
      <Leftbutton
        onClick={() => {
          navigate(routes.home)
        }}
      >
        {`<`}
      </Leftbutton>
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
const Leftbutton = styled.button`
  position: fixed;
  left: 40%;
`
