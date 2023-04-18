import { useState, useEffect } from "react"
import Cookies from 'js-cookie'
import Modal from "../modal/Modal";
import LogInModal from "../modal/LoginModal";
import SignUpModal from "../modal/SignUpModal";
import { addFavorite, deleteFavorite, isFavorite } from "../../utils/api/user";

interface Props {
  logementId: number;
}

const FavoriteCheckbox: React.FC<Props> = ({ logementId }) => {

  const userId = Cookies.get("userId");

  const [isChecked, setChecked] = useState(false);
  const [isModalOpen, setModalOpen] = useState(false);
  const [isLogin, setLogin] = useState(true); 

  useEffect(() => {
    if(userId) {
      isFavorite(userId, logementId).then(res => {
        if (res.status === 200) {
          res.json().then(body => {
            if(body.isChecked) {
              setChecked(true)
            }
          })
        }
      }).catch(err => {
        console.error(err);
      })
    }
  }, [])

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

  const toggleFavorite = () => {
    if (userId) {
      if (!isChecked) {
        addFavorite(userId, logementId).then(res => {
          if (res.status === 201) {
            setChecked(true);
          }
        }).catch(err => {
          console.error(err);
        })
      } else {
        deleteFavorite(userId, logementId).then(res => {
          if (res.status === 204) {
            setChecked(false);
          }
        }).catch(err => {
          console.error(err);
        })
      }
    } else {
      toggleModalOpen();
    }
  }

  return (
    <>
      <svg xmlns="http://www.w3.org/2000/svg" fill={isChecked ? "#dc2626" : "#aab8c2"} className="m-2 cursor-pointer z-30" onClick={toggleFavorite} viewBox="0 0 16 16"> <path fillRule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"/> </svg>
      <Modal isOpen={isModalOpen} toggleOpen={toggleModalOpen}>
        {isLogin ? <LogInModal toggleOpen={toggleModalOpen} toggleLogin={toggleLogin} /> : <SignUpModal toggleOpen={toggleModalOpen} toggleLogin={toggleLogin} />}
      </Modal>
    </>   
  )
}

export default FavoriteCheckbox