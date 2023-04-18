import React from 'react'
import { Link } from 'react-router-dom'
import Carousel from '../carousel/Carousel'

interface Props {
    id: number,
    immeubleId: number,
    photos: string[] | string,
    available: boolean,
    rooms: string,
    size: number,
    number: number,
    price: number,
    date_debut: string,
    date_fin: string,
  }

const LocationListItem: React.FC<Props> = ({ id, immeubleId, photos, available, rooms, size, number, price, date_debut, date_fin }) => {
  const to = `/immeubles/${immeubleId}/logements/${id}`;

  if (typeof photos === "string") {
    photos = photos.split(",")
  }
  
  return (
    <li className="rounded-2xl p-2 hover:bg-gray-100">
      <div className="flex justify-center">
        <div className="">{date_debut} à {date_fin}</div>
      </div>
      <Carousel photos={photos} to={to} />
      <div className="flex flex-col">
        <div className="flex justify-between items-center">
          <Link to={to}>
            <h1 className="font-semibold text-lg">#{number}</h1>
          </Link>
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

export default LocationListItem