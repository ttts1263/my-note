import { getMemos } from '../../apis/memo'
import { Header } from '../../components/Header'
import styled from '@emotion/styled'

export function HomePage() {
  // 데이터를 가져옴 (초기 데이터)
  const memos = getMemos()

  // 데이터를 수정

  return (
    <main>
      <Header />

      <button>메모 추가</button>

      <div>
        {memos.map((memo) => {
          return (
            <StyledMemo>
              <textarea>{memo.text}</textarea>
            </StyledMemo>
          )
        })}
      </div>
    </main>
  )
}

const StyledMemo = styled.div`
  margin-bottom: 32px;
  padding: 12px;
  border-radius: 12px;
  box-shadow: 5px 5px 10px 3px lightgray;
  background-color: #fefe6d;
  font-size: 100px;
  textarea {
    font-size: 20px;
    width: 100%;
    min-height: 240px;
    background-color: unset;
    border: 0;
    outline: 0;
    resize: none;
  }
`
