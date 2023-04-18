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
      <button type="button" className="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-2 cursor-pointer group focus:outline-none" onClick={previous}>
      <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 group-hover:bg-white/50 group-focus:outline-none">
        <svg aria-hidden="true" className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path></svg>
        <span className="sr-only">Previous</span>
      </span>
      </button>
      <button type="button" className="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-2 cursor-pointer group focus:outline-none" onClick={next}>
        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 group-hover:bg-white/50 group-focus:outline-none">
            <svg aria-hidden="true" className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
            <span className="sr-only">Next</span>
        </span>
      </button>
    </div>
  )
}

export default Carousel