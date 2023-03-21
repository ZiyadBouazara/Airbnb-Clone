import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="flex flex-col border md:px-10 lg:px-20">
      <ul className="flex">
        <li>@ 2023 Immofab, Inc.</li>
        <li>·</li>
        <li>
          <Link to="/">Page d'accueil</Link>
        </li>
        <li>·</li>
        <li>
          <Link to="/about">À propos</Link>
        </li>
        <li>·</li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </footer>
  )
}

export default Footer