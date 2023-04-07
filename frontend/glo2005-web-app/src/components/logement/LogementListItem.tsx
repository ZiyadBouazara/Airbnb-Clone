import { Link } from "react-router-dom";

interface Props {
    id: number,
    immeubleId: number,
    available: boolean,
    rooms: string,
    size: string,
    number: number,
    price: number
}

const LogementListItem: React.FC<Props> = ({ id, immeubleId, available, rooms, size, number, price }) => {
  return (
    <li>
        <Link to={`/immeubles/${immeubleId}/logements/${id}`}>
            Logement {id}
        </Link>
    </li>
  )
}

export default LogementListItem