import { useState } from 'react'
import { createMemo, deleteMemo, getMemos, updateMemos } from '../../apis/memo'
import { Header } from '../../components/Header'
import styled from '@emotion/styled'

export function HomePage() {
  // 데이터를 가져옴 (초기 데이터)
  const defaultmemos = getMemos()
  const [memos, setMemos] = useState(defaultmemos)

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

        <StyledSaveButton
          onClick={() => {
            const result = updateMemos(memos)
            setMemos(result)
            console.log(result)
          }}
        >
          저장
        </StyledSaveButton>

        <div>
          {memos.map((memo) => {
            return (
              <StyledMemo key={memo.id}>
                <StyledDeleteButton
                  onClick={() => {
                    deleteMemo(memo.id)
                    setMemos(getMemos())
                  }}
                >
                  X
                </StyledDeleteButton>
                <textarea
                  defaultValue={memo.text}
                  onChange={(event) => {
                    const value = event.target.value
                    setMemos((memos) => {
                      const newMemos = memos.map((item) => {
                        if (item.id === memo.id) {
                          return {
                            id: memo.id,
                            text: value,
                          }
                        }
                        return item
                      })
                      return newMemos
                    })
                  }}
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
`

const StyledMemo = styled.div`
  position: relative;
  margin-bottom: 32px;
  padding: 12px;
  border-radius: 12px;
  box-shadow: 5px 5px 10px 3px lightgray;
  background-color: #fefe6d;
  font-size: 100px;
  textarea {
    display: block; //inline, block
    font-size: 20px;
    width: 100%;
    min-height: 240px;
    background-color: unset;
    border: 0;
    outline: 0;
    resize: none;
  }
`

const StyledDeleteButton = styled.button`
  position: absolute;
  top: 12px;
  right: 12px;
`

const StyledSaveButton = styled.button`
  position: fixed;
  bottom: 30px;
  right: 30px; // TODO: 반응형 화면에 맞추기
  z-index: 10;
  border-radius: 50%;
  height: 50px;
  width: 50px;
`