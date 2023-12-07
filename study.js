// Promise 에 대해 배워보자
// 자바 스크립트에는 동기적인 코드와 비동기적인 코드가 있다.
// 동기적인 코드는 순서대로 실행되는 코드이고
// 비동기적인 코드는 순서대로 실행되지 않는 코드이다.
// 동기적인 코드를 보면 순서가 보장이된다.
// 그러나 비동기 코드가 필요한 경우가 있다.
// 시간이 오래걸리는 작업은 지금 시작을 하더라도 나중에 끝났을때 알려주면 좋겠다.
// 자바스크립트는 싱글스레드로 동작한다. -> 효율이 좋다.

// setTimeout(함수, 시간): 시간 이후에 함수 실행
// setInterval(함수, 시간): 일정 시간마다 함수 실행
// Promise((성공함수, 실패함수) => { ... })
// fetch(url).then(result => { ... })

// function lazycheckNumber() {
//   new Promise((resolve, reject) => {
//     setTimeout(() => {
//       if (typeof number === 'number') {
//         console.log('숫자입니다.')
//         resolve(true)
//       } else {
//         console.log('숫자가 아닙니다.')
//         reject(false)
//       }
//     }, 1000)
//   })
// }

// const result = lazycheckNumber(10)
// console.log(result)
// setTimeout(() => {
//   console.log(result)
// }, 3100)

// 숫자를 입력받아서 랜덤한 시간 이후 콘솔에 출력하는 함수
function randomDelay(number) {
  return new Promise((resolve) => {
    const delay = Math.random() * 1000 * 5
    setTimeout(() => {
      console.log(number)
      resolve(number)
    }, delay)
  })
}

async function excuteRandomDelay() {
  const result = await Promise.all([
    randomDelay(1),
    randomDelay(2),
    randomDelay(3),
    randomDelay(4),
    randomDelay(5),
    randomDelay(6),
    randomDelay(7),
    randomDelay(8),
    randomDelay(9),
    randomDelay(10),
  ])
  console.log(result)
}

// allSettled

excuteRandomDelay()
