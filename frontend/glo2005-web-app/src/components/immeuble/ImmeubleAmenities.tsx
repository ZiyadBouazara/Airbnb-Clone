import { ImmeubleType } from "../../utils/ImmeubleType"
import ACLogo from "../logos/ACLogo"
import BackyardLogo from "../logos/BackyardLogo"
import EVChargerLogo from "../logos/EVChargerLogo"
import ElectricityLogo from "../logos/ElectricityLogo"
import ElevatorLogo from "../logos/ElevatorLogo"
import GymLogo from "../logos/GymLogo"
import HotWaterLogo from "../logos/HotWaterLogo"
import ParkingLogo from "../logos/ParkingLogo"
import PoolLogo from "../logos/PoolLogo"
import TerraceLogo from "../logos/TerraceLogo"
import WifiLogo from "../logos/WifiLogo"
import ImmeubleAmentiesItem from "./ImmeubleAmentiesItem"

interface Props {
  immeuble: ImmeubleType;
}

const ImmeubleAmenities: React.FC<Props> = ({ immeuble }) => {
  return (
    <>
      <h1 className="font-semibold text-xl">Services et commodités</h1>
      <ul className="flex flex-wrap justify-center gap-1">
        {immeuble.hot_water ? <ImmeubleAmentiesItem name="Eau chaude" logo={<HotWaterLogo />} /> : null}
        {immeuble.electricity ? <ImmeubleAmentiesItem name="Électricité" logo={<ElectricityLogo />} /> : null}
        {immeuble.wifi ? <ImmeubleAmentiesItem name="Wifi" logo={<WifiLogo />} /> : null}
        {immeuble.parking ? <ImmeubleAmentiesItem name="Parking" logo={<ParkingLogo />} /> : null}
        {immeuble.pool ? <ImmeubleAmentiesItem name="Piscine" logo={<PoolLogo />} /> : null}
        {immeuble.gym ? <ImmeubleAmentiesItem name="Gym" logo={<GymLogo />} /> : null}
        {immeuble.backyard ? <ImmeubleAmentiesItem name="Cour" logo={<BackyardLogo />} /> : null}
        {immeuble.elevator ? <ImmeubleAmentiesItem name="Ascenseur" logo={<ElevatorLogo />} /> : null}
        {immeuble.ev_charger ? <ImmeubleAmentiesItem name="Chargeur VE" logo={<EVChargerLogo />} /> : null}
        {immeuble.air_conditioner ? <ImmeubleAmentiesItem name="Air conditionné" logo={<ACLogo />} /> : null}
        {immeuble.terrasse ? <ImmeubleAmentiesItem name="Terrasse" logo={<TerraceLogo />} /> : null}
      </ul>
    </>
  )
}

export default ImmeubleAmenities