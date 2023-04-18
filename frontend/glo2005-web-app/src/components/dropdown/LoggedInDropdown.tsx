import { Link } from "react-router-dom"
import { getUser } from "../../utils/api/user";
import { UserType } from "../../utils/UserType";
import Cookies from "js-cookie";

interface Props {
  toggleOpen: () => void;
  user: UserType;
}

const LoggedInDropdown: React.FC<Props> = ({ toggleOpen, user }) => {

  const onLogout = () => {
    Cookies.remove("userId");
    toggleOpen();
    window.location.reload();
  }

  const onAccount = () => {
    toggleOpen();
  }

  return (
    <>
      <div className="border-b border-black w-full">
        <div className="px-1">{user.nom}</div>
        <div className="font-semibold px-1">{user.email}</div>
      </div>
      <div className="border-b border-black w-full">
        <Link to="/account" onClick={onAccount}><div className="hover:bg-gray-100 rounded-lg p-1 cursor-pointer">Compte</div></Link>
      </div>
      <div className="w-full">
        <div className="hover:bg-gray-100 rounded-lg p-1 cursor-pointer" onClick={onLogout}>Déconnexion</div>
      </div>
    </>
  )
}

export default LoggedInDropdown