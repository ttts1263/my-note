import { Link } from 'react-router-dom'
import { routes } from '../../route'
export function HomePage() {
  return (
    <main>
      <header>
        <div className="header">헤더</div>
        <Link to={routes.about}>소개페이지</Link>
      </header>

      <div className="memos">메모들</div>
    </main>
  )
}
