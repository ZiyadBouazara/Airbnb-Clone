interface Props {
    number: number,
    immeubleName: string,
}

const LogementHeader: React.FC<Props> = ({ number, immeubleName }) => {
  return (
    <>
        <div className="flex justify-center">
            <h1 className="font-bold text-5xl">{immeubleName} #{number}</h1>
        </div>
    </>
  )
}

export default LogementHeader