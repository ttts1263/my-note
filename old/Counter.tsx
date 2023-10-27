import { useState } from 'react'

export function Counter() {
  // let num = 0
  const [num, setNum] = useState(0)

  function inreasNumber() {
    console.log(num)
    // num = num + 1
    setNum((state) => {
      const newNum = state + 1
      console.log(newNum)
      return newNum
    }) // 비동기 함수
  }

  return <button onClick={inreasNumber}>{num}</button>
}
