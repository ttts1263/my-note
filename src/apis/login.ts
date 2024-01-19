// jwt를 저장하는 함수
const backendUrl = 'http://localhost:3000'

export async function updateJwt(jwt: string) {
  const result = await fetch(backendUrl + '/my-note/jwt', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ jwt }),
    credentials: 'include',
  })
  return result.json()
}

export async function sessionCheck() {
  const result = await fetch(backendUrl + '/my-note/sessionCheck', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    credentials: 'include',
  })
  return result.json()
}
