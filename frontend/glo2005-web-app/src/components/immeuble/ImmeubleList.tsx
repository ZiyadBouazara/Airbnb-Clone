import { ImmeubleType } from "../../utils/ImmeubleType";
import ImmeubleListItem from "./ImmeubleListItem";

interface Props {
    immeubles: ImmeubleType[];
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