import { NavigateFunction } from 'react-router'
import { logout } from './apis/login'
import { localSessionKey } from './constants'
import { routes } from './routes'

export function logoutAII(navigate: NavigateFunction) {
  logout()
    .then((res) => {
      localStorage.removeItem(localSessionKey)
      console.log('# logout result: ', res)
      navigate(routes.login)
    })
    .catch((error) => {
      console.error(error)
    })
}
