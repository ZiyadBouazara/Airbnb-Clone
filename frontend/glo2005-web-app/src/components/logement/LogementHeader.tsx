import { LogementType } from "../../utils/LogementType";
import FavoriteCheckbox from "../inputs/FavoriteCheckbox";

interface Props {
  logement: LogementType;
  immeubleName: string;
}

const LogementHeader: React.FC<Props> = ({ logement, immeubleName }) => {
  return (
    <>
      <div className="flex justify-center items-start gap-2">
        <h1 className="font-bold text-5xl">{immeubleName} #{logement.numero}</h1>
        <div className="h-14 w-14">
          <FavoriteCheckbox logementId={logement.id_logement} />
        </div>
      </div>
    </>
  )
}

export default LogementHeader