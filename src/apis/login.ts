// jwt를 저장하는 함수
const backendUrl = 'http://localhost:3000'

export const updateJwt = async (jwt: string) => {
  const result = await fetch(backendUrl + '/my-note/jwt', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ jwt }),
  })
  return result.json()
}
