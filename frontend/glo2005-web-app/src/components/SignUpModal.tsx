interface Props {
    toggleLogin: () => void;
}

const SignUpModal: React.FC<Props> = ({ toggleLogin }) => {
  return (
    <div className="px-6 py-6 lg:px-8">
    <h3 className="mb-4 text-xl font-medium">Inscription</h3>
    <form className="space-y-6" action="#">
        <div>
            <label htmlFor="email" className="block mb-2 text-sm font-medium">Courriel</label>
            <input type="email" name="email" id="email" className="border border-gray-200 text-sm rounded-lg block w-full p-2.5" placeholder="Courriel" required />
        </div>
        <div>
            <label htmlFor="password" className="block mb-2 text-sm font-medium">Mot de passe</label>
            <input type="password" name="password" id="password" placeholder="••••••••" className="border border-gray-200 text-sm rounded-lg block w-full p-2.5" required />
        </div>
        <button type="submit" className="w-full text-white bg-immofab hover:bg-immofab-hover font-medium rounded-lg text-sm px-5 py-2.5 text-center">Inscription</button>
        <div className="text-sm font-medium">
            Déja un compte? <span className="text-blue-700 hover:underline visited:text-purple-600 cursor-pointer" onClick={toggleLogin}>Connexion</span>
        </div>
    </form>
</div>
  )
}

export default SignUpModal