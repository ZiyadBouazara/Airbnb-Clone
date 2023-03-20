import { Link } from "react-router-dom";

const NotFound = () => {
    return (
      <div>
        <div>
          <h1>On n'arrive pas à trouver la page que vous cherchez</h1>
        </div>
        <div>
          Voici quelques liens utiles à la place:
          <ul>
            <li>
              <Link to="/">Page d'accueil</Link>
            </li>
            <li>
              <Link to="/about">À propos</Link>
            </li>
          </ul>
        </div>
      </div>
    )
  }
  
  export default NotFound