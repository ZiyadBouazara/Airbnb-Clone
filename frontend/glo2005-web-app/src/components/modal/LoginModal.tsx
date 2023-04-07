interface Props {
    toggleLogin: () => void;
}

const LogInModal: React.FC<Props> = ({ toggleLogin }) => {
  return (
    <div className="px-6 py-6 lg:px-8">
        <h3 className="mb-4 text-xl font-medium">Connexion</h3>
        <form className="space-y-6" action="#">
            <div>
                <label htmlFor="email" className="block mb-2 text-sm font-medium">Courriel</label>
                <div className="relative">
                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                        <svg aria-hidden="true" className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path><path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path></svg>
                    </div>
                    <input type="email" name="email" id="email" className="border border-gray-200 text-sm rounded-lg block w-full pl-10 p-2.5" placeholder="Courriel" required />
                </div>
            </div>
            <div>
                <label htmlFor="password" className="block mb-2 text-sm font-medium">Mot de passe</label>
                <input type="password" name="password" id="password" placeholder="••••••••" className="border border-gray-200 text-sm rounded-lg block w-full p-2.5" required />
            </div>
            <button type="submit" className="w-full text-white bg-immofab hover:bg-immofab-hover font-medium rounded-lg text-sm px-5 py-2.5 text-center">Connection</button>
            <div className="text-sm font-medium">
                Pas de compte? <span className="text-blue-700 hover:underline visited:text-purple-600 cursor-pointer" onClick={toggleLogin}>Inscription</span>
            </div>
        </form>
    </div>
  )
}

export default LogInModal