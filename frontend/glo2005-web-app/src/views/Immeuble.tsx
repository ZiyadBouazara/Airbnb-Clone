import { useParams } from 'react-router-dom';
import ImmeubleHeader from '../components/ImmeubleHeader';
import HotWaterLogo from '../components/HotWaterLogo';
import ElectricityLogo from '../components/ElectricityLogo';
import WifiLogo from '../components/WifiLogo';
import ParkingLogo from '../components/ParkingLogo';
import GymLogo from '../components/GymLogo';
import BackyardLogo from '../components/BackyardLogo';
import ElevatorLogo from '../components/ElevatorLogo';
import PoolLogo from '../components/PoolLogo';
import ElectricChargerLogo from '../components/ElectricChargerLogo';
import AirConditionerLogo from '../components/AirConditionerLogo';
import TerraceLogo from '../components/TerraceLogo';

const Immeuble = () => {

    const {immeubleId} = useParams();

    const immeuble = {
      id: 1,
      name: "Lamiaceae",
      photo: "https://images.pexels.com/photos/439391/pexels-photo-439391.jpeg",
      address: "42 Sunnyside Park",
      sector: "Watuagung",
      minPrice: 400,
      type: "Condo/Loft",
      description: "Integer non velit. Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque."
  }

  return (
    <div className="flex flex-col items-center mx-3 md:px-10 lg:px-20">
      <section className="flex flex-col items-start mt-6">
        <ImmeubleHeader name={immeuble.name} photo={immeuble.photo} address={immeuble.address} sector={immeuble.sector} type={immeuble.type} minPrice={immeuble.minPrice} />
      </section>
      <section className="flex flex-wrap justify-center mt-6">
        <img className="object-cover h-80 w-96 rounded-lg" src={immeuble.photo} alt="" />
        <div className="mx-4 w-96">
          <div>{immeuble.description}</div>
          <div>
            <HotWaterLogo />
            <ElectricityLogo />
            <WifiLogo />
            <ParkingLogo />
            <GymLogo />
            <BackyardLogo />
            <ElevatorLogo />
            <PoolLogo />
            <ElectricChargerLogo />
            <AirConditionerLogo />
            <TerraceLogo />
          </div>
        </div>
      </section>
    </div>
  )
}

export default Immeuble