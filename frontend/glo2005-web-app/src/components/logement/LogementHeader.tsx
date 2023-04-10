import FavoriteCheckbox from "../inputs/FavoriteCheckbox"

interface Props {
    number: number,
    immeubleName: string,
}

const LogementHeader: React.FC<Props> = ({ number, immeubleName }) => {
  return (
    <>
        <div className="flex justify-center items-start gap-2">
            <h1 className="font-bold text-5xl">{immeubleName} #{number}</h1>
            <FavoriteCheckbox size={36} />
        </div>
    </>
  )
}

export default LogementHeader