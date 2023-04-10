import Immeuble from "../../views/Immeuble";
import Carousel from "../carousel/Carousel";
import { Link } from "react-router-dom";

interface Props {
  id: number,
  immeubleId: number,
  photos: string[],
  available: boolean,
  rooms: string,
  size: string,
  number: number,
  price: number
}

const LogementListItem: React.FC<Props> = ({ id, immeubleId, photos, available, rooms, size, number, price }) => {

  const to = `/immeubles/${immeubleId}/logements/${id}`;

  return (
    <li className="rounded-2xl p-2 hover:bg-gray-100">
      <Carousel photos={photos} to={to} />
      <Link to={to}>
        <div className="flex flex-col">
          <div className="flex justify-between items-center">
            <h1 className="font-semibold text-lg">#{number}</h1>
          </div>
          <span>{rooms} · {size} pi<sup>2</sup></span>
          <span>{price}$/mois</span>
          {available ? <span className="text-green-600">Disponible</span> : <span className="text-red-600">Non disponible</span>}
        </div>
      </Link>
    </li>
  )
}

export default LogementListItem