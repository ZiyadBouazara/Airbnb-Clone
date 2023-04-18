import { LocationType } from "../../utils/LocationType"
import LocationListItem from "./LocationListItem"


interface Props {
    locations: LocationType[]
}

const LocationList: React.FC<Props> = ({ locations }) => {
  return (
    <ul className="flex flex-wrap justify-center gap-2">
      {locations.map((location: LocationType) => (
          <LocationListItem key={location.id_logement} id={location.id_logement} immeubleId={location.contient} photos={location.photos} available={location.available} number={location.numero} price={location.price} rooms={location.pieces} size={location.taille} date_debut={location.date_debut} date_fin={location.date_fin} />
      ))}
    </ul>
  )
}

export default LocationList