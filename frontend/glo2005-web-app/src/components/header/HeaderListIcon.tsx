import Cookies from "js-cookie";
import { useEffect, useState } from "react";
import { UserType } from "../../utils/UserType";
import { getUser } from "../../utils/api/user";
import Dropdown from "../dropdown/Dropdown";
import LoggedInDropdown from "../dropdown/LoggedInDropdown";
import LoggedOutDropdown from "../dropdown/LoggedOutDropdown";

interface Props {
  isLoggedIn: boolean,
}

const HeaderListIcon: React.FC<Props> = ({ isLoggedIn }) => {

  const [user, setUser] = useState<UserType>();

  useEffect(() => {
    if (isLoggedIn) {
      const userId = Cookies.get("userId");
      if (userId) {
        getUser(userId)
          .then(res => {
            if (res.status === 200) {
              res.json().then(user => {
                setUser(user[0])
              })
            }
          }).catch(err => {
            console.error(err);
          })
      }
    }
  }, [])

  const [isOpen, setOpen] = useState(false);

  const toggleOpen: () => void = () => {
    setOpen(!isOpen);
  }

  return (
    <li className="relative w-10 h-10 mx-2 mb-2 overflow-hidden hover:bg-gray-100 rounded-full cursor-pointer">
      <svg className="absolute w-12 h-12 text-black -left-1" onClick={toggleOpen} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd"></path></svg>
      <div>
        <Dropdown isOpen={isOpen} toggleOpen={toggleOpen}>
          {isLoggedIn ? <LoggedInDropdown toggleOpen={toggleOpen} user={user!} /> : <LoggedOutDropdown toggleOpen={toggleOpen} /> }
        </Dropdown>
      </div>
    </li>
  )
}

export default HeaderListIcon