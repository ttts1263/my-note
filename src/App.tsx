import { Form } from './Form'

function App() {
  return (
    <div>
      <Form />
    </div>
  )
}

export function MyButton() {
  function click() {
    alert('클릭!!')
  }

  return (
    <>
      <button onClick={click}>내가만든버튼</button>
    </>
  )
}

export default App
