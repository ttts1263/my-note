import { useState } from 'react'
import { createMemo, deleteMemo, getMemos } from '../../apis/memo'
import { Header } from '../../components/Header'
import styled from '@emotion/styled'
import { useNavigate } from 'react-router'

export function HomePage() {
  // 데이터를 가져옴 (초기 데이터)
  const defaultmemos = getMemos()
  const [memos, setMemos] = useState(defaultmemos)

  const navigate = useNavigate()

  return (
    <StyledPageDiv>
      <main>
        <Header />

        <button
          onClick={() => {
            console.log('click')
            const result = createMemo()
            setMemos(result)
          }}
        >
          메모 추가
        </button>

        <div>
          {memos.map((memo) => {
            return (
              <StyledMemo
                key={memo.id}
                onClick={() => {
                  navigate(`memo?memoId=${memo.id}`)
                }}
              >
                <StyledDeleteButton
                  onClick={() => {
                    // 한번 물어보기
                    if (confirm('정말 삭제하시겠습니까?')) {
                      setMemos(deleteMemo(memo.id))
                    }
                  }}
                >
                  X
                </StyledDeleteButton>
                {/* 여기 아래에 담아야함 */}
                <textarea
                  readOnly //  <---- 이름 그대로 읽기 전용, const와 다른 느낌이라고 함
                  defaultValue={memo.text}
                  // onChange={(event) => {
                  //   const value = event.target.value
                  //   setMemos((memos) => {
                  //     const newMemos = memos.map((item) => {
                  //       if (item.id === memo.id) {
                  //         return {
                  //           id: memo.id,
                  //           text: value,
                  //         }
                  //       }
                  //       return item
                  //     })
                  //     return newMemos
                  //   })
                  // }}
                />
              </StyledMemo>
            )
          })}
        </div>
      </main>
    </StyledPageDiv>
  )
}

const StyledPageDiv = styled.div`
  max-width: 360px;
  margin: auto;
  padding-top: 48px;
  background-color: blue;
`

const StyledMemo = styled.div`
  position: relative;
  margin-bottom: 32px;
  padding: 12px;
  border-radius: 12px;
  box-shadow: 5px 5px 10px 3px lightgray;
  background-color: #fefe6d;
  font-size: 100px;
  cursor: pointer;

  textarea {
    display: block; //inline, block
    font-size: 20px;
    width: 100%;
    min-height: 240px;
    background-color: unset;
    border: 0;
    outline: 0;
    resize: none;
    cursor: pointer;
  }
`

const StyledDeleteButton = styled.button`
  position: absolute;
  top: 12px;
  right: 12px;
`
