import { useSearchParams } from 'react-router-dom'
import { getMemo, updateMemo } from '../../apis/memo'
import styled from '@emotion/styled'
import { Header } from '../../components/Header'
import { useState } from 'react'

export function MemoPage() {
  // 구조분해할당
  // const arr = [var1, var2]
  // const var1 = arr.var1
  // cosnt [var1] = arr
  const [searchParams] = useSearchParams()
  const memoId = Number(searchParams.get('memoId') || '')

  const memo = getMemo(memoId)
  const [memoText, setMemoText] = useState(memo?.text || '')
  // and, or 연산다
  // A && B => a 가 true면 B, A가 false면 false
  // A || B => A가 true면 true, A가 false면 B
  const [fontSize, setFontSize] = useState(20)

  if (memo === undefined) {
    return <div>존재하지 않는 메모입니다.</div>
  }

  return (
    <>
      <Header />
      <StyledSaveButton
        onClick={() => {
          updateMemo(Number(memoId), memoText)
          alert('저장완료')
        }}
      >
        저장
      </StyledSaveButton>

      <StyledMemoPage>
        <div>
          <StyledTextSizeButtons
            onClick={() => {
              setFontSize(fontSize + 2 >= 40 ? 40 : fontSize + 2)
            }}
          >
            글씨 +
          </StyledTextSizeButtons>
          <StyledTextSizeButtons
            onClick={() => {
              setFontSize(fontSize - 2 <= 12 ? 12 : fontSize - 2)
            }}
          >
            글씨 -
          </StyledTextSizeButtons>
        </div>

        <StyledMemo key={memo.id}>
          <textarea
            style={{
              fontSize: `${fontSize}px`,
            }}
            defaultValue={memo.text}
            onChange={(e) => {
              const value = e.target.value
              setMemoText(value)
            }}
          />
        </StyledMemo>
      </StyledMemoPage>
    </>
  )
}

const StyledSaveButton = styled.button`
  position: fixed;
  bottom: 30px;
  right: 30px; // TODO: 반응형 화면에 맞추기
  z-index: 10;
  border-radius: 50%;
  height: 50px;
  width: 50px;
`

const StyledMemoPage = styled.div`
  margin: auto;
  max-width: 360px;
  height: 100vh;
  padding-top: 48px;
`

const StyledMemo = styled.div`
  height: 100%;
  width: 100%;
  position: relative;
  margin-bottom: 32px;
  padding: 12px;
  border-radius: 12px;
  box-shadow: 5px 5px 10px 3px lightgray;
  background-color: #fefe6d;

  textarea {
    display: block; //inline, block
    font-size: 20px;
    width: 100%;
    height: 100%;
    background-color: unset;
    border: 0;
    outline: 0;
    resize: none;
  }
`
const StyledTextSizeButtons = styled.button`
  margin: 10px;
  width: 55px;
  height: 45px;
  background-color: orange;
  border-radius: 40%;
  border-color: transparent;
  cursor: pointer;
  color: white;
`
