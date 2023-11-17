import { useSearchParams } from 'react-router-dom'
import { getMemo } from '../../apis/memo'

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
    <div>
      <div>MemoPage</div>
      <div>memoId: {memoId}</div>
      <div>memoText: {memo.text}</div>
    </div>
  )
}
