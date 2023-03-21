import { Link } from "react-router-dom";

const Header = () => {
    return (
      <header className="flex flex-col border md:px-10 lg:px-20">
        <nav className="flex justify-between items-center">
          <div>
                <Link className="flex items-center" to="/">
                  <img id="logo-img" src="src/assets/logo.jpg" alt="logo" />
                  <span className="text-immofab">immofab</span>
                </Link>
          </div>
          <div>
            <ul className="flex items-center">
              <li>
                <Link to="/contact">Contact</Link>
              </li>
              <li>
                <Link to="/account">Compte</Link>
              </li>
            </ul>
          </div>
        </nav>
      </header>
    )
  }

export default Header