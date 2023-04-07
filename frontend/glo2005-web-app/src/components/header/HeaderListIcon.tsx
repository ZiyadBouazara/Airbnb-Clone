import { Link } from "react-router-dom";
import { useState } from "react";
import Modal from "../modal/Modal";
import LogInModal from "../modal/LoginModal";
import SignUpModal from "../modal/SignUpModal";

interface Props {
  isLoggedIn: boolean;
}

const HeaderListIcon: React.FC<Props> = ({ isLoggedIn }) => {
  const [isOpen, setOpen] = useState(false);
  const [isLogin, setLogin] = useState(true);

  const toggleOpen: () => void = () => {
    setOpen(!isOpen);
  }

  const toggleLogin: () => void = () => {
    setLogin(!isLogin);
  }

  const openModal: () => void = () => {
    setLogin(true);
    toggleOpen();
  }

  if (isLoggedIn) {
    return (
      <li className="relative w-10 h-10 mx-2 mb-2 overflow-hidden hover:bg-gray-100 rounded-full">
        <Link to="/account">
          <svg className="absolute w-12 h-12 text-black -left-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd"></path></svg>
        </Link>
      </li>
    )
  } else {
    return (
      <li className="relative w-10 h-10 mx-2 mb-2 overflow-hidden hover:bg-gray-100 rounded-full cursor-pointer">
        <svg className="absolute w-12 h-12 text-black -left-1" onClick={openModal} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd"></path></svg>
        <Modal isOpen={isOpen} toggleOpen={toggleOpen}>
          {isLogin ? <LogInModal toggleLogin={toggleLogin} /> : <SignUpModal toggleLogin={toggleLogin}/> }
        </Modal>
      </li>
    )
  }
}

export default HeaderListIcon