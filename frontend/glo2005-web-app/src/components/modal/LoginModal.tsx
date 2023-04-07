import Button from "../inputs/Button";
import EmailInput from "../inputs/EmailInput";
import PasswordInput from "../inputs/PasswordInput";

interface Props {
    toggleLogin: () => void;
}

const LogInModal: React.FC<Props> = ({ toggleLogin }) => {
  return (
    <div className="px-6 py-6 lg:px-8">
        <h3 className="mb-4 text-xl font-medium">Connexion</h3>
        <form className="space-y-6" action="">
            <div>
                <label htmlFor="email" className="block mb-2 text-sm font-medium">Courriel</label>
                <EmailInput id="email" placeholder="Courriel" required />
            </div>
            <div>
                <PasswordInput id="password" label="Mot de passe" placeholder="••••••••" required />
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