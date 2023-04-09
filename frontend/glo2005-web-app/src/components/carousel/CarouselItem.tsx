interface Props {
    photo: string
}

const CarouselItem: React.FC<Props> = ({ photo }) => {
  return (
    <img src={photo} alt="" className="object-cover h-72 w-80 rounded-lg" />
  )
}

export default CarouselItem