import ImmeubleAmentiesItem from "./ImmeubleAmentiesItem"
import HotWaterLogo from "../logos/HotWaterLogo"
import ElectricityLogo from "../logos/ElectricityLogo"
import WifiLogo from "../logos/WifiLogo"
import ParkingLogo from "../logos/ParkingLogo"
import GymLogo from "../logos/GymLogo"
import BackyardLogo from "../logos/BackyardLogo"
import ElevatorLogo from "../logos/ElevatorLogo"
import EVChargerLogo from "../logos/EVChargerLogo"
import ACLogo from "../logos/ACLogo"
import TerraceLogo from "../logos/TerraceLogo"

interface Props {
    hasHotWater: boolean,
    hasElectricity: boolean,
    hasWifi: boolean,
    hasParking: boolean,
    hasGym: boolean,
    hasBackyard: boolean,
    hasElevator: boolean,
    hasEVCharger: boolean,
    hasAC: boolean,
    hasTerrace: boolean,
}

const ImmeubleAmenities: React.FC<Props> = ({ hasHotWater, hasElectricity, hasWifi, hasParking,
    hasGym, hasBackyard, hasElevator, hasEVCharger, hasAC, hasTerrace }) => {
  return (
    <>
        <h1 className="font-semibold text-xl">Services et commodités</h1>
        <ul className="flex flex-wrap gap-1">
            {hasHotWater ? <ImmeubleAmentiesItem name="Eau chaude" logo={<HotWaterLogo />} /> : null}
            {hasElectricity ? <ImmeubleAmentiesItem name="Électricité" logo={<ElectricityLogo />} /> : null}
            {hasWifi ? <ImmeubleAmentiesItem name="Wifi" logo={<WifiLogo />} /> : null}
            {hasParking ? <ImmeubleAmentiesItem name="Parking" logo={<ParkingLogo />} /> : null}
            {hasGym ? <ImmeubleAmentiesItem name="Gym" logo={<GymLogo />} /> : null}
            {hasBackyard ? <ImmeubleAmentiesItem name="Cour" logo={<BackyardLogo />} /> : null}
            {hasElevator ? <ImmeubleAmentiesItem name="Ascenseur" logo={<ElevatorLogo />} /> : null}
            {hasEVCharger ? <ImmeubleAmentiesItem name="Chargeur VE" logo={<EVChargerLogo />} /> : null}
            {hasAC ? <ImmeubleAmentiesItem name="Air conditionné" logo={<ACLogo />} /> : null}
            {hasTerrace ? <ImmeubleAmentiesItem name="Terrasse" logo={<TerraceLogo />} /> : null}
        </ul>
    </>
  )
}

export default ImmeubleAmenities