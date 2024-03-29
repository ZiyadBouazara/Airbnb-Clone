import Cookies from 'js-cookie';
import { useState } from "react";
import { login } from "../../utils/api/login";
import Button from "../inputs/Button";
import EmailInput from "../inputs/EmailInput";
import PasswordInput from "../inputs/PasswordInput";

interface Props {
    toggleLogin: () => void;
    toggleOpen: () => void;
    toggleDropdownOpen?: () => void;
}

const LogInModal: React.FC<Props> = ({ toggleLogin, toggleOpen, toggleDropdownOpen }) => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onLogin = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    login(email, password)
        .then(res => {
            if (res.status === 200) {
                res.json().then(body => {
                    Cookies.set("userId", body.id);
                    setEmail("");
                    setPassword("");
                    toggleOpen();
                    if (toggleDropdownOpen) {
                        toggleDropdownOpen();
                    }
                    location.reload();
                })
            } else {
                alert("Connection échouée");
                setEmail("");
                setPassword("");
            }
        }).catch(err => {
            console.error(err);
        })
  }

  return (
    <div className="px-6 py-6 lg:px-8">
        <h3 className="mb-4 text-xl font-medium">Connexion</h3>
        <form className="space-y-6" onSubmit={(e) => onLogin(e)}>
            <div>
                <label htmlFor="email" className="block mb-2 text-sm font-medium">Courriel</label>
                <EmailInput id="email" value={email} setState={setEmail} placeholder="Courriel" required />
            </div>
            <div>
                <PasswordInput id="password" value={password} setState={setPassword} label="Mot de passe" placeholder="••••••••" required />
            </div>
            <Button text="Connection" />
            <div className="text-sm font-medium">
                Pas de compte? <span className="text-blue-700 hover:underline visited:text-purple-600 cursor-pointer" onClick={toggleLogin}>Inscription</span>
            </div>
        </form>
    </div>
  )
}

export default LogInModal