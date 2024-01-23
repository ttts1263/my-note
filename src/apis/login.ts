// jwt를 저장하는 함수
const backendUrl = 'http://localhost:3000'

export type LoginResponseType = {
  session: string
  userData: { email: string; name: string; picture: string }
}
export async function updateJwt(jwt: string): Promise<LoginResponseType> {
  const result = await fetch(backendUrl + '/my-note/jwt', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': 'http://localhost:3000',
    },
    body: JSON.stringify({ jwt }),
    credentials: 'include',
  })
  return result.json()
}

export async function sessionCheck() {
  try {
    const result = await fetch(backendUrl + '/my-note/sessionCheck', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      credentials: 'include',
    })
    return result.json()
  } catch (error) {
    console.error(error)
  }
}
