const allData = {
  memos: [
    {
      id: 1,
      text: '메모1',
    },
    {
      id: 2,
      text: '메모2',
    },
  ],
  lastMemoId: 2, // 시퀀스: 항상 증가하는 값
}

// 원시값을 생성해서 저장 const name = '고양이'
// 참조주소를 저장 const memos = { id: 1, text: '메모'}
// const meemo2 = memos // memo2.id = 2

// 구조분해 문법,
// const memos = allData.memos
let { memos, lastMemoId } = allData

// CRUD (Create, Read, Upadte ,Dlete)
// 메모 생성
export function createMemo() {
  const newId = lastMemoId + 1
  const newText = ''
  lastMemoId += 1 // 1증가
  return (memos = memos.concat({
    id: newId,
    text: newText,
  }))
}

// 전체메모 가져오기
export function getMemos() {
  // sptead 함수: arr = [1,2,3] ...arr => 1,2,3
  // 배열을 복제본 {...object}, [...arr]
  return [...memos]
}

//메모 가져오기
export function getMemo(memoid: number) {
  const memo = memos.find((memo) => memo.id === memoid)
  return { ...memo }
}

// 메모 업데이트
export function upadtesetMemo(memoId: number, memoText: string) {
  const memo = memos.find((memo) => memo.id === memoId)
  if (memo !== undefined) {
    memo.text = memoText
    return true
  }
  return false
}

// 메모 삭제
export function deleteMemo(memoId: number) {
  const startIndex = memos.findIndex((memo) => memo.id === memoId)
  if (startIndex === -1) {
    return false
  }

  memos.splice(startIndex, 1)
  return true
}
