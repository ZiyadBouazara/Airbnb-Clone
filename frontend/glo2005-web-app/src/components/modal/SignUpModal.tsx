import Button from "../inputs/Button";
import EmailInput from "../inputs/EmailInput";
import PasswordInput from "../inputs/PasswordInput";
import PhoneNumberInput from "../inputs/phoneNumberInput";
import NumberInput from "../inputs/NumberInput";
import TextInput from "../inputs/TextInput";
import { useState } from "react";
import Cookies from 'js-cookie'
import { signup } from "../../utils/api/signup";

interface Props {
    toggleLogin: () => void;
    toggleOpen: () => void;
    toggleDropdownOpen?: () => void;
}

const SignUpModal: React.FC<Props> = ({ toggleLogin, toggleDropdownOpen, toggleOpen }) => {

  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [name, setName] = useState<string>("");
  const [phoneNumber, setPhoneNumber] = useState<string>("");
  const [age, setAge] = useState(18);

  const onSignUp = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    signup(email, password, name, phoneNumber, age)
        .then(res => {
            Cookies.set("userId", res.id);
            setEmail("");
            setPassword("");
            setName("");
            setPhoneNumber("");
            setAge(18);
            toggleOpen();
            if (toggleDropdownOpen) {
                toggleDropdownOpen();
            }
            location.reload();
        })
  }

  return (
    <div className="px-6 py-6 lg:px-8">
    <h3 className="mb-4 text-xl font-medium">Inscription</h3>
    <form className="space-y-6" onSubmit={(e) => onSignUp(e)}>
        <div>
            <label htmlFor="email" className="block mb-2 text-sm font-medium">Courriel</label>
            <EmailInput id="email" value={email} setState={setEmail} placeholder="Courriel" required />
        </div>
        <div>
            <PasswordInput id="password" value={password} setState={setPassword} label="Mot de passe" placeholder="••••••••" required />
        </div>
        <div>
            <TextInput id="name" value={name} setState={setName} label="Nom" placeholder="Nom" />
        </div>
        <div>
            <PhoneNumberInput id="phone-number" value={phoneNumber} setState={setPhoneNumber} label="Numéro de téléphone" placeholder="###-###-####" />
        </div>
        <div>
            <NumberInput id="age" value={age} min={18} max={112} setState={setAge} label="Âge (18-112)" placeholder="Âge" />
        </div>
        <Button text="Inscription" />
        <div className="text-sm font-medium">
            Déja un compte? <span className="text-blue-700 hover:underline visited:text-purple-600 cursor-pointer" onClick={toggleLogin}>Connexion</span>
        </div>
    </form>
</div>
  )
}

export default SignUpModal