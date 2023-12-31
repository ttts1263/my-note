export type MemoType = {
  id: number
  text: string
}

// CRUD (Create, Read, Update, Delete)
// 메모 생성
export async function createMemo() {
  // 로컬스토리지에서 메모 불러오기
  const localMemos = await getMemos()

  // newId 생성하기
  let maxId = 1
  localMemos.forEach((memo) => {
    maxId = Math.max(memo.id, maxId)
  })
  const newId = maxId + 1

  const newMemos = localMemos.concat({
    id: newId,
    text: '',
  })

  // 새로 만들어진 newMemos를 로컬스토리지에 저장
  localStorage.setItem('memos', JSON.stringify(newMemos))

  return [...newMemos]
}

// 전체메모 가져오기
export async function getMemos(): Promise<MemoType[]> {
  const memosString = localStorage.getItem('memos') || '[]'
  try {
    const memos = memosString ? JSON.parse(memosString) : []
    return [...memos]
  } catch (error) {
    return []
  }
}

//메모 1개 가져오기
export async function getMemo(memoId: number) {
  const memos = await getMemos()
  const memo = memos.find((memo) => memo.id === memoId)
  return memo ? { ...memo } : undefined
}

// 메모 전체 업데이트
export async function updateMemos(allMemos: MemoType[]) {
  // allMemos를 로컬스토리지에 저장
  localStorage.setItem('memos', JSON.stringify(allMemos))
  return [...allMemos]
}

// 메모 업데이트
export async function updateMemo(memoId: number, memoText: string) {
  const memos = await getMemos()
  const memo = memos.find((memo) => memo.id === memoId)
  if (memo !== undefined) {
    memo.text = memoText
  }
  localStorage.setItem('memos', JSON.stringify(memos))
  return [...memos]
}

// 메모 삭제
export async function deleteMemo(memoId: number) {
  const memos = await getMemos()
  const startIndex = memos.findIndex((memo) => memo.id === memoId)
  if (startIndex === -1) {
    return [...memos]
  }

  memos.splice(startIndex, 1)
  localStorage.setItem('memos', JSON.stringify(memos))
  return [...memos]
}
