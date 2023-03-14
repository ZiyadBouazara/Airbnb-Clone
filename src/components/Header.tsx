import { Link } from "react-router-dom";

const Header = () => {
  return (
      <nav>
          <ul>
          <li>
              <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
                <Link to="/login">Login</Link>
          </li>
        </ul>
      </nav>
  )
}

export default Header