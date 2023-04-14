export interface ImmeubleType {
    iid: number;
    address: string;
    nombre_logements: number;
    secteur: string;
    nom: string;
    type: string;
    photos: string;
    descriptif: string;
    price: number;
    hot_water: boolean;
    electricity: boolean;
    wifi: boolean;
    parking: boolean;
    gym: boolean;
    backyard: boolean;
    elevator: boolean;
    pool: boolean;
    ev_charger: boolean;
    air_conditioner: boolean;
    terrasse: boolean;
}