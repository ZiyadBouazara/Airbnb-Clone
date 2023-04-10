export interface Logement {
    id: number,
    immeubleId: number,
    available: boolean,
    photos:string[],
    rooms: string,
    size: number,
    number: number,
    price: number,
}