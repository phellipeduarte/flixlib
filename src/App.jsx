import { Link, Outlet } from 'react-router-dom'
import './App.css'

function App() {


  return (

    <>
      <nav id="navbar">
        <h2>
          <Link to="/">FlixLib</Link>
        </h2>
        <h2>
          <Link to="/movie/1">Movie</Link>
        </h2>
        <h2>
          <Link to="/search">Search</Link>
        </h2>
      </nav>
      <Outlet />
    </>
  )
}

export default App
