import { useParams } from 'react-router-dom';

const Logement: React.FC = () => {

    const {immeubleId, logementId} = useParams();

  return (
    <div className="flex flex-col mx-3 md:px-10 lg:px-20">Logement {logementId}</div>
  )
}

export default Logement