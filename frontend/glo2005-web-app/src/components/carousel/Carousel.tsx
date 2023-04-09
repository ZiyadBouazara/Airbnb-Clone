import CarouselItem from "./CarouselItem"
import { useState } from "react"

interface Props {
  photos: string[],
  to?: string
}

const Carousel: React.FC<Props> = ({ photos, to }) => {

  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => {
    setCurrentIndex((currentIndex + 1) % photos.length);
  }

  const previous = () => {
    setCurrentIndex((currentIndex + photos.length - 1) % photos.length);
  }

  return (
    <div className="relative h-72 w-80">
        <div>
            {photos.map((photo, index) => (
                (currentIndex === index) ? <CarouselItem key={index} photo={photo} to={to} /> : null
            ))}
        </div>
        <div className="carousel-btn absolute left-0 m-2">
            <button className="text-sm font-semibold bg-black text-white py-2 px-4 rounded-full opacity-70 hover:opacity-100" onClick={previous}>
            &lt;
            </button>
        </div>
        <div className="carousel-btn absolute right-0 m-2">
            <button className="text-sm font-semibold bg-black text-white py-2 px-4 rounded-full opacity-70 hover:opacity-100" onClick={next}>
            &gt;
            </button>
        </div>
    </div>
  )
}

export default Carousel