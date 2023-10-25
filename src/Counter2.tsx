export function Counter2({
  num,
  setNum,
}: {
  num: number
  setNum: React.Dispatch<React.SetStateAction<number>>
}) {
  return <button onClick={() => setNum((num) => num + 1)}>{num}</button>
}
