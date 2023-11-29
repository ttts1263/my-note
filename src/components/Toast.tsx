import styled from '@emotion/styled'

export function Toast() {
  return <StyledToastDiv>토스트</StyledToastDiv>
}

const StyledToastDiv = styled.div`
  position: fixed;
  z-index: 999;
  bottom: -10px;
  left: 50%;
  transform: translate(-50%, 100%);

  padding: 12px;
  background-color: white;
  color: black;
  border-radius: 12px;
  box-shadow: 3px 3px 5px 3px lightgray;
  white-space: nowrap;
  animation: toast 3s ease;

  // 애니메이션
  @keyframes toast {
    0% {
      bottom: -10px;
    }
    50% {
      bottom: 100px;
    }
    100% {
      bottom: -10px;
    }
  }
`
