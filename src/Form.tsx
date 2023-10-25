export function Form() {
  const name = '대성'
  return (
    // 폼, 제목, 이름, 나이, 버튼
    <form>
      <h1>정보를 입력해주세요.</h1>
      이름: <input name="이름" defaultValue={name} />
      나이: <input name="나이" />
      <MyButton />
    </form>
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
