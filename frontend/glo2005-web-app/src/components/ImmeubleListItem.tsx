import { Link } from "react-router-dom";

interface Props {
    id: number,
    name: string,
    photo: string,
    adress: string,
    minPrice: number,
    type: string
}

const ImmeubleListItem: React.FC<Props> = ({ id, name, photo, adress, minPrice, type }) => {
  return (
    <li className="hover:bg-gray-100 rounded-lg p-2">
        <Link to={`/immeubles/${id}`}>
            <img className="object-cover h-72 w-80 rounded-lg" src={photo} alt="" />
            <div className="flex flex-col">
                <h1 className="font-semibold text-lg">{name}</h1>
                <span>📍 {adress}</span>
                <span>{type}</span>
                <span>À partir de {minPrice}$/mois</span>
            </div>
        </Link>
    </li>
  )
}

export default ImmeubleListItem