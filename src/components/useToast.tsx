import { createPortal } from 'react-dom'
import { Toast } from './Toast'
import { useState } from 'react'

/**
 * 토스트 메시지를 띄우는 커스텀 훅
 * 훅: 리액트에서 컴포넌트 라이프사이클을 사용하기 위한 함수
 * 라이프사이클: 컴포넌트가 생성되고, 업데이트되고, 사라지는 과정
 */
export function useToast() {
  const [toasts, setToasts] = useState<React.ReactPortal[]>([])

  // 토스트 컴포넌트를 DOM에 추가하는 코드
  function openToast(text: string) {
    const toastId = Math.random().toString()

    // 4초 뒤에 토스트를 사라지게 하는 코드
    setTimeout(() => {
      setToasts((toasts) => {
        return toasts.filter((toast) => {
          return toast.key !== toastId
        })
      })
    }, 4000)

    return setToasts((toasts) => {
      return [
        ...toasts,
        createPortal(<Toast text={text} />, document.body, toastId),
      ]
    })
  }

  return {
    openToast,
    toasts,
  }
}
