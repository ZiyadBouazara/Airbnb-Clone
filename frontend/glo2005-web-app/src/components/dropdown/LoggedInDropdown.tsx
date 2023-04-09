import { Link } from "react-router-dom"

const LoggedInDropdown: React.FC = () => {



  return (
    <>
        <div className="border-b border-black w-full">
          <div className="px-1">John Doe</div>
          <div className="font-semibold px-1">johndoe@google.com</div>
        </div>
        <div className="border-b border-black w-full">
          <div className="hover:bg-gray-100 rounded-lg p-1 cursor-pointer"><Link to="/account">Compte</Link></div>
        </div>
        <div className="w-full">
          <div className="hover:bg-gray-100 rounded-lg p-1 cursor-pointer">Déconnexion</div>
        </div>
    </>
  )
}

export default LoggedInDropdown