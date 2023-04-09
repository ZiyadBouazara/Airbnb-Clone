import { ReactNode, useState } from "react";
import Dropdown from "../dropdown/Dropdown";
import LoggedOutDropdown from "../dropdown/LoggedOutDropdown";
import LoggedInDropdown from "../dropdown/LoggedInDropdown";

interface Props {
  isLoggedIn: boolean,
}

const HeaderListIcon: React.FC<Props> = ({ isLoggedIn }) => {

  const [isOpen, setOpen] = useState(false);

  const toggleOpen: () => void = () => {
    setOpen(!isOpen);
  }

  return (
    <li className="relative w-10 h-10 mx-2 mb-2 overflow-hidden hover:bg-gray-100 rounded-full cursor-pointer">
      <svg className="absolute w-12 h-12 text-black -left-1" onClick={toggleOpen} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd"></path></svg>
      <div>
        <Dropdown isOpen={isOpen} toggleOpen={toggleOpen}>
          {isLoggedIn ? <LoggedInDropdown /> : <LoggedOutDropdown /> }
        </Dropdown>
      </div>
    </li>
  )
}

export default HeaderListIcon