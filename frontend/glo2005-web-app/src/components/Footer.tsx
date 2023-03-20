import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div>
      <ul>
        <li>@ 2023 Immofab, Inc.</li>
        <li>·</li>
        <li>
          <Link to="/">Page d'accueil</Link>
        </li>
        <li>·</li>
        <li>
          <Link to="/about">À propos</Link>
        </li>
      </ul>
    </div>
  )
}

export default Footer