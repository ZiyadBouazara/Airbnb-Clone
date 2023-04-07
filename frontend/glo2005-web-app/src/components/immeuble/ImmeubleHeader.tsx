interface Props {
    name: string,
    photo: string,
    address: string,
    sector: string,
    type: string,
    minPrice: number
}

const ImmeubleHeader: React.FC<Props> = ({ name, photo, address, sector, type, minPrice }) => {
  return (
    <>
        <div>
          <h1 className="font-bold text-5xl">{name}</h1>
        </div>
        <div>
          <ul className="flex gap-1">
            <li>📍 {address}, {sector}</li>
            <li>·</li>
            <li>{type}</li>
            <li>·</li>
            <li>À partir de {minPrice}$/mois</li>
          </ul>
        </div>
    </>
  )
}

export default ImmeubleHeader