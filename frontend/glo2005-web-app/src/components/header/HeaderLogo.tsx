import { Link } from "react-router-dom";
import logo from "../../assets/logo.jpg";

const HeaderLogo: React.FC = () => {
  return (
    <div>
        <Link className="flex items-center" to="/">
            <img id="logo-img" src={logo} alt="logo" />
            <span className="text-immofab font-bold">ImmoFab</span>
        </Link>
    </div>
  )
}

export default HeaderLogo