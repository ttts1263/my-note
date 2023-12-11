import { useEffect, useState } from 'react'
import { MemoType, createMemo, deleteMemo, getMemos } from '../../apis/memo'
import { Header } from '../../components/Header'
import styled from '@emotion/styled'
import { useNavigate } from 'react-router'

export function HomePage() {
  const [memos, setMemos] = useState<MemoType[]>([])

  const navigate = useNavigate()

  useEffect(() => {
    // 데이터를 가져옴 (초기 데이터)
    getMemos().then((result) => {
      setMemos(result)
    })
  }, [])

  return (
    <StyledPageDiv>
      <main>
        <Header />

        <StyledRefreshButton
          onClick={() => {
            navigate(0) // 새로고침
          }}
        >
          새로고침
        </StyledRefreshButton>

        <button
          onClick={async () => {
            console.log('click')
            const result = await createMemo()
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
                  onClick={async (e) => {
                    // 이벤트 버블링(전파)을 막음
                    e.stopPropagation()
                    // 한번 물어보기
                    if (confirm('정말 삭제하시겠습니까?')) {
                      setMemos(await deleteMemo(memo.id))
                    }
                  }}
                >
                  X
                </StyledDeleteButton>

                <textarea
                  readOnly //  <---- 이름 그대로 읽기 전용, const와 다른 느낌이라고 함
                  defaultValue={memo.text}
                />
              </StyledMemo>
            )
          })}
        </div>
      </main>
    </StyledPageDiv>
  )
}

const StyledRefreshButton = styled.button`
  position: fixed;
  bottom: 30px;
  right: 30px; // TODO: 반응형 화면에 맞추기
  z-index: 10;
  border-radius: 50%;
  height: 50px;
  width: 50px;
`

const StyledPageDiv = styled.div`
  max-width: 360px;
  margin: auto;
  padding-top: 48px;
  height: 100vh;
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
