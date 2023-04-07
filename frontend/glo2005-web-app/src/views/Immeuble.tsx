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
      photo: "https://images.pexels.com/photos/439391/pexels-photo-439391.jpeg",
      address: "42 Sunnyside Park",
      sector: "Watuagung",
      minPrice: 400,
      type: "Condo/Loft",
      description: "Integer non velit. Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.",
      hasHotWater: true,
      hasElectricity: true,
      hasWifi: true,
      hasParking: true,
      hasGym: true,
      hasBackyard: true,
      hasElevator: true,
      hasEVCharger: true,
      hasAC: true,
      hasTerrace: true
  }

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
        <ImmeubleAmenities hasHotWater={immeuble.hasHotWater} hasElectricity={immeuble.hasElectricity} hasWifi={immeuble.hasWifi} hasParking={immeuble.hasParking} hasGym={immeuble.hasGym} hasBackyard={immeuble.hasBackyard} hasElevator={immeuble.hasElevator} hasEVCharger={immeuble.hasEVCharger} hasAC={immeuble.hasAC} hasTerrace={immeuble.hasTerrace} />
      </section>
      <section className="mt-2 md:mt-4">
        <h1 className="font-semibold text-xl">Logements</h1>
        <Search id="logement-search" placeholder="Rechercher un logement..." />
        <LogementList />
      </section>
    </div>
  )
}

export default Immeuble