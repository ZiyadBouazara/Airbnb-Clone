import { Link } from "react-router-dom";

interface Props {
    id: number,
    name: string,
    photo: string,
    adress: string,
    sector: string,
    minPrice: number,
    type: string
}

const ImmeubleListItem: React.FC<Props> = ({ id, name, photo, adress, sector, minPrice, type }) => {
  return (
    <li className="hover:bg-gray-100 rounded-lg p-2">
      <img className="object-cover h-72 w-80 rounded-lg" src={photo} alt="" />
      <div className="flex flex-col">
        <div className="flex justify-between items-center">
          <Link to={`/immeubles/${id}`} className="hover:underline">
            <h1 className="font-semibold text-lg">{name}</h1>
          </Link>
        </div>
        <span>📍 {adress}, {sector}</span>
        <span>{type}</span>
        <span>À partir de {minPrice}$/mois</span>
      </div>
    </li>
  )
}

export default ImmeubleListItem