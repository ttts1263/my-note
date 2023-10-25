import { useState } from 'react'
import { Counter2 } from './Counter2'

function App() {
  const [num, setNum] = useState(0)
  return (
    <div>
      <Counter2 num={num} setNum={setNum} />
      <Counter2 num={num} setNum={setNum} />
    </div>
  )
}

export default App
