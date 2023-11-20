import { useSearchParams } from 'react-router-dom'
import { getMemo } from '../../apis/memo'
import styled from '@emotion/styled'

export function MemoPage() {
  // 구조분해할당
  // const arr = [var1, var2]
  // const var1 = arr.var1
  // cosnt [var1] = arr
  const [searchParams] = useSearchParams()
  const memoId = searchParams.get('memoId')

  const memo = getMemo(Number(memoId))

  //TODO: 메모 텍스트를 textarea에 담아서 화면에 표시하기
  return (
    <StyledMemoPage>
      <StyledMemo key={memo.id}>
        <textarea defaultValue={memo.text} />
      </StyledMemo>
    </StyledMemoPage>
  )
}

const StyledMemoPage = styled.div`
  margin: auto;
  max-width: 360px;
  height: 100vh;
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
