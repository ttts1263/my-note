import { useSearchParams } from 'react-router-dom'
import { getMemo, updateMemo } from '../../apis/memo'
import styled from '@emotion/styled'
import { Header } from '../../components/Header'
import { useState } from 'react'
import { Space } from '../../components/Space'

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
          // 자동저장은 일정 시간마다 텍스트를 자동으로 저장하는 것
          // 그런데 매 초마다 저장하면 서버에 부담이 됨
          // 꼭 필요한 경우만 보내야한다.
          // 1. 변경이 발생할 때만 저장한다.
          // 2. 변경이 발생하고 1초 동안 변경이 없으면 저장한다. 디바운스 (텍스트)
          // 3. 변경이 발생하면 1초 동안 1번만 저장한다. 쓰로틀 (스크롤)
          // 디바운스를 사용하기

          function debounce() {
            // WIP(Work In Progress)
            // debounce는 처음 요청이 들어오고 1초 동안 변경이 없어야 실행 한다.
            // 1초 안에 요청이 들어오면 타이머를 초기화(시간을 연장)한다.
            let timeoutId: ReturnType<typeof setTimeout> | null = null
            if (timeoutId) {
              clearTimeout(timeoutId)

              timeoutId = setTimeout(() => {
                console.log(`debounce`)
              }, 1000)
            }

            timeoutId = setTimeout(() => {
              console.log(`debounce`)
            }, 1000) //ms. 1000ms = 1s
          }

          debounce()

          updateMemo(Number(memoId), memoText)
          alert('저장완료')
        }}
      >
        저장
      </StyledSaveButton>

      <StyledMemoPage>
        <Space height={12} />

        <div>
          <StyledTextSizeButton
            onClick={() => {
              setFontSize(fontSize + 2 >= 40 ? 40 : fontSize + 2)
            }}
          >
            글씨 +
          </StyledTextSizeButton>

          <Space height={12} inline />

          <StyledTextSizeButton
            onClick={() => {
              setFontSize(fontSize - 2 <= 12 ? 12 : fontSize - 2)
            }}
          >
            글씨 -
          </StyledTextSizeButton>
        </div>

        <Space height={12} />

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
  height: calc(100% - 12px - 12px - 45px - 20px);
  width: 100%;
  position: relative;
  margin-bottom: 32px;
  padding: 12px;
  padding-right: 0;
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
const StyledTextSizeButton = styled.button`
  padding: 0 10px;
  height: 45px;
  background-color: orange;
  border-radius: 16px;
  border: 0;
  cursor: pointer;
  color: white;
`
