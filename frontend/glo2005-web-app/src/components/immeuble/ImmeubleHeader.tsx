import { Immeuble } from "../../utils/Immeuble"

interface Props {
  immeuble: Immeuble;
}

const ImmeubleHeader: React.FC<Props> = ({ immeuble }) => {
  return (
    <>
        <div>
          <h1 className="font-bold text-5xl">{immeuble.nom}</h1>
        </div>
        <div>
          <ul className="flex flex-wrap gap-1">
            <li>📍 {immeuble.address}, {immeuble.secteur}</li>
            <li>·</li>
            <li>{immeuble.type}</li>
            <li>·</li>
            <li>À partir de {immeuble.price}$/mois</li>
          </ul>
        </div>
    </>
  )
}

export default ImmeubleHeader