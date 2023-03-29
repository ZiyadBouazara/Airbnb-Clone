import { Link } from "react-router-dom";

interface Props {
  isLoggedIn: boolean;
}

const HeaderListIcon: React.FC<Props> = ({ isLoggedIn }) => {
  return (
    <li className="relative w-10 h-10 mx-2 mb-2 overflow-hidden hover:bg-gray-100 rounded-full">
      <Link to="/account">
        <svg className="absolute w-12 h-12 text-black -left-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clip-rule="evenodd"></path></svg>
      </Link>
    </li>
  )
}

export default HeaderListIcon