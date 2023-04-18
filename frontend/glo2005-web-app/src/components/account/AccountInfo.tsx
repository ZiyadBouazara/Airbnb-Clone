import { UserType } from "../../utils/UserType";

interface Props {
    user: UserType;
}

const AccountInfo: React.FC<Props> = ({ user }) => {
  return (
    <div className="flex border border-black rounded-lg justify-center p-2">
      <svg className="w-24 h-24 text-black -left-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd"></path></svg>
      <ul>
          <li>Nom: {user.nom}</li>
          <li>Courriel: {user.email}</li>
          <li>Numéro de téléphone: {user.phone}</li>
          <li>Âge: {user.age} ans</li>
      </ul>
  </div>
  )
}

export default AccountInfo