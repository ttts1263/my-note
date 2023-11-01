const memos = [
  {
    id: 1,
    text: '메모1',
  },
  {
    id: 2,
    text: '메모2',
  },
]

// CRUD (Create, Read, Upadte ,Dlete)
export function getMemos() {
  return memos
}

// createMemo, deletMemo

export function upadtesetMemo(memoId: number, memoText: string) {
  const memo = memos.find((memo) => memo.id === memoId)
  if (memo !== undefined) {
    memo.text = memoText
  }
  return memos
}
