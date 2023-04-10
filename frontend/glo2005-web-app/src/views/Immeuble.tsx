import { useParams } from 'react-router-dom';
import ImmeubleHeader from '../components/immeuble/ImmeubleHeader';
import ImmeubleAmenities from '../components/immeuble/ImmeubleAmenities';
import LogementList from '../components/logement/LogementList';
import Search from '../components/inputs/Search';

const Immeuble: React.FC = () => {

    const {immeubleId} = useParams();

    const immeuble = {
      id: 1,
      name: "Lamiaceae",
      address: "42 Sunnyside Park",
      sector: "Watuagung",
      type: "Condo/Loft",
      photo: "https://images.pexels.com/photos/439391/pexels-photo-439391.jpeg",
      description: "Integer non velit. Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.",
      minPrice: 400,
      nbLogements: 13,
      hasHotWater: true,
      hasElectricity: true,
      hasWifi: true,
      hasParking: true,
      hasPool: true,
      hasGym: true,
      hasBackyard: true,
      hasElevator: true,
      hasEVCharger: true,
      hasAC: true,
      hasTerrace: true
  }

  const logements = [
    {
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
    },
    {
      id: 2,
      immeubleId: 1,
      available: false,
      photos: [
        "https://images.pexels.com/photos/1643384/pexels-photo-1643384.jpeg",
        "https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg",
        "https://images.pexels.com/photos/275484/pexels-photo-275484.jpeg",
        "https://images.pexels.com/photos/1457847/pexels-photo-1457847.jpeg"
      ],
      rooms: "4 1/2",
      size: 807,
      number: 4,
      price: 750,
    },
    {
      id: 3,
      immeubleId: 1,
      available: true,
      photos: [
        "https://images.pexels.com/photos/275484/pexels-photo-275484.jpeg",
        "https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg",
        "https://images.pexels.com/photos/1643384/pexels-photo-1643384.jpeg",
        "https://images.pexels.com/photos/1457847/pexels-photo-1457847.jpeg"
      ],
      rooms: "5 1/2",
      size: 900,
      number: 6,
      price: 1010,
    },
    {
      id: 4,
      immeubleId: 1,
      available: false,
      photos: [
        "https://images.pexels.com/photos/1457847/pexels-photo-1457847.jpeg",
        "https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg",
        "https://images.pexels.com/photos/1643384/pexels-photo-1643384.jpeg",
        "https://images.pexels.com/photos/275484/pexels-photo-275484.jpeg",
      ],
      rooms: "6 1/2",
      size: 1000,
      number: 8,
      price: 1150,
    },
  ]

  return (
    <div className="flex flex-col mx-3 md:px-10 lg:px-20">
      <section className="flex flex-col items-start mt-6">
        <ImmeubleHeader name={immeuble.name} photo={immeuble.photo} address={immeuble.address} sector={immeuble.sector} type={immeuble.type} minPrice={immeuble.minPrice} />
      </section>
      <section className="flex flex-wrap justify-center mt-6">
        <img className="object-cover h-80 w-96 rounded-lg" src={immeuble.photo} alt="" />
        <div className="mx-4 w-96">
          {immeuble.description}
        </div>
      </section>
      <section className="flex flex-col items-center gap-2 mt-3">
        <ImmeubleAmenities hasHotWater={immeuble.hasHotWater} hasElectricity={immeuble.hasElectricity} hasWifi={immeuble.hasWifi} hasParking={immeuble.hasParking} hasPool={immeuble.hasPool} hasGym={immeuble.hasGym} hasBackyard={immeuble.hasBackyard} hasElevator={immeuble.hasElevator} hasEVCharger={immeuble.hasEVCharger} hasAC={immeuble.hasAC} hasTerrace={immeuble.hasTerrace} />
      </section>
      <section className="mt-2 md:mt-4">
        <div className="flex flex-col">
          <div className="mb-2 md:mb-4">
            <h1 className="font-semibold text-xl flex justify-center">Logements ({immeuble.nbLogements})</h1>
          </div>
          <Search id="logement-search" placeholder="Rechercher un logement..." />
        </div>
        <div className="mt-2 md:mt-4">
          <LogementList logements={logements} />
        </div>
      </section>
    </div>
  )
}

export default Immeuble