import ImmeubleListItem from "./ImmeubleListItem"
import { Immeuble } from "../../utils/Immeuble"

interface Props {
    immeubles: Immeuble[];
}

const ImmeubleList: React.FC<Props> = ({ immeubles }) => {

  return (
    <ul className="flex flex-wrap justify-center gap-2">
        {immeubles.map((immeuble) => (
            <ImmeubleListItem key={immeuble.iid} immeuble={immeuble} />
        ))}
    </ul>
  )
}

export default ImmeubleList