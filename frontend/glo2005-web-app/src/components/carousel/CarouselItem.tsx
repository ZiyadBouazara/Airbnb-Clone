import { Link } from "react-router-dom"

interface Props {
    photo: string,
    to?: string
}

const CarouselItem: React.FC<Props> = ({ photo, to }) => {
  return (
    to ? <Link to={to}><img src={photo} alt="" className="object-cover h-72 w-80 rounded-lg" /></Link> : <img src={photo} alt="" className="object-cover h-72 w-80 rounded-lg" />
  )
}

export default CarouselItem