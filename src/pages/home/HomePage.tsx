import { getMemos } from '../../apis/memo'
import { Header } from '../../components/Header'
import styled from '@emotion/styled'

export function HomePage() {
  const memos = getMemos()

  return (
    <main>
      <Header />

      <button>메모 추가</button>

      <div>
        {memos.map((memo) => {
          return (
            <StyledMemo>
              <div>{memo.id}</div>
              <div className="text">{memo.text}</div>
            </StyledMemo>
          )
        })}
      </div>
    </main>
  )
}

const StyledMemo = styled.div`
  background-color: yellow;
  div {
    color: blue;
  }
  .text {
    font-size: 40px;
  }
`
