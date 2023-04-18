import { Link } from "react-router-dom";
import Carousel from "../carousel/Carousel";
import FavoriteCheckbox from "../inputs/FavoriteCheckbox";

interface Props {
  id: number,
  immeubleId: number,
  photos: string[] | string,
  available: boolean,
  rooms: string,
  size: number,
  number: number,
  price: number,
}

const LogementListItem: React.FC<Props> = ({ id, immeubleId, photos, available, rooms, size, number, price }) => {

  const to = `/immeubles/${immeubleId}/logements/${id}`;

  if (typeof photos === "string") {
    photos = photos.split(",")
  }

  return (
    <li className="rounded-2xl p-2 hover:bg-gray-100">
      <Carousel photos={photos} to={to} />
      <div className="flex flex-col">
        <div className="flex justify-between items-center">
          <Link to={to}>
            <h1 className="font-semibold text-lg">#{number}</h1>
          </Link>
          <div className="w-10">
            <FavoriteCheckbox logementId={id} />
          </div>
        </div>
        <Link to={to} className="flex flex-col">
          <span>{rooms} · {size} pi<sup>2</sup></span>
          <span>{price}$/mois</span>
          {available ? <span className="text-green-600">Disponible</span> : <span className="text-red-600">Non disponible</span>}
        </Link>
      </div>
    </li>
  )
}

export default LogementListItem