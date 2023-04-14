import { Link } from "react-router-dom";
import { ImmeubleType } from "../../utils/ImmeubleType";

interface Props {
  immeuble: ImmeubleType;
}

const ImmeubleListItem: React.FC<Props> = ({ immeuble }) => {
  return (
    <li className="hover:bg-gray-100 rounded-lg p-2">
      <Link to={`/immeubles/${immeuble.iid}`}>
        <img className="object-cover h-72 w-80 rounded-lg" src={immeuble.photos} alt="" />
        <div className="flex flex-col">
          <div className="flex justify-between items-center">
            <h1 className="font-semibold text-lg">{immeuble.nom}</h1>
          </div>
          <span>📍 {immeuble.address}, {immeuble.secteur}</span>
          <span>{immeuble.type}</span>
          <span>À partir de {immeuble.price}$/mois</span>
        </div>
      </Link>
    </li>
  )
}

export default ImmeubleListItem