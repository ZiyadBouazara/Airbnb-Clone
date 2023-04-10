import { useParams } from 'react-router-dom';
import LogementHeader from '../components/logement/LogementHeader';
import Carousel from '../components/carousel/Carousel';

const Logement: React.FC = () => {

  const {immeubleId, logementId} = useParams();

  const immeubleName = "Lamiaceae";

  const logement = {
    id: 1,
    immeubleId: 1,
    available: true,
    photos: [
      "https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg",
      "https://images.pexels.com/photos/1643384/pexels-photo-1643384.jpeg",
      "https://images.pexels.com/photos/275484/pexels-photo-275484.jpeg",
      "https://images.pexels.com/photos/1457847/pexels-photo-1457847.jpeg"
    ],
    rooms: "3 1/2",
    size: 603,
    number: 2,
    price: 500,
  }

  return (
    <div className="flex flex-col mx-3 md:px-10 lg:px-20">
      <section className="mt-6">
        <LogementHeader number={logement.number} immeubleName={immeubleName} />
      </section>
      <section className="flex flex-col justify-center items-center mt-6">
        <Carousel photos={logement.photos} />
        <div className="m-4 h-14">
            <ul className="flex flex-wrap items-center gap-1">
                <li>{logement.rooms}</li>
                <li>·</li>
                <li>{logement.size} pi<sup>2</sup></li>
                <li>·</li>
                <li>{logement.price}$/mois</li>
                <li>·</li>
                {logement.available ? <li className="text-green-600">Disponible</li> : <li className="text-red-600">Non disponible</li>}
            </ul>
        </div>
      </section>
  </div>
  )
}

export default Logement