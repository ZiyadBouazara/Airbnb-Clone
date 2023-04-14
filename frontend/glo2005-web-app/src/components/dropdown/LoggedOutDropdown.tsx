import Modal from "../modal/Modal"
import LogInModal from "../modal/LoginModal"
import SignUpModal from "../modal/SignUpModal"
import { useState } from "react"

interface Props {
    toggleOpen: () => void;
}

const LoggedOutDropdown: React.FC<Props> = ({ toggleOpen }) => {

    const [isModalOpen, setModalOpen] = useState(false);
    const [isLogin, setLogin] = useState(true); 

    const toggleModalOpen: () => void = () => {
        setModalOpen(!isModalOpen);
    }

    const toggleLogin: () => void = () => {
        setLogin(!isLogin);
    }

    const onLogIn = () => {
        setLogin(true);
        toggleModalOpen();
    }

    const onSignUp = () => {
        setLogin(false);
        toggleModalOpen();
    }


  return (
    <>
        <div className="flex flex-col gap-2">
            <div className="hover:bg-gray-100 rounded-lg p-1 cursor-pointer font-semibold" onClick={onLogIn}>Connection</div>
            <div className="hover:bg-gray-100 rounded-lg p-1 cursor-pointer" onClick={onSignUp}>Inscription</div>
        </div>
        <Modal isOpen={isModalOpen} toggleOpen={toggleModalOpen}>
            {isLogin ? <LogInModal toggleDropdownOpen={toggleOpen} toggleOpen={toggleModalOpen} toggleLogin={toggleLogin} /> : <SignUpModal toggleDropdownOpen={toggleOpen} toggleOpen={toggleModalOpen} toggleLogin={toggleLogin} />}
        </Modal>
    </>
  )
}

export default LoggedOutDropdown