import { Link } from "react-router-dom";

const HeaderLogo: React.FC = () => {
  return (
    <div>
        <Link className="flex items-center" to="/">
            <img id="logo-img" src="src/assets/logo.jpg" alt="logo" />
            <span className="text-immofab font-bold">ImmoFab</span>
        </Link>
    </div>
  )
}

export default HeaderLogo