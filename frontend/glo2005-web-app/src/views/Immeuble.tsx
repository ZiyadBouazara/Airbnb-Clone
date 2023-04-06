import { useParams } from 'react-router-dom';

const Immeuble = () => {

    const {immeubleId} = useParams();

  return (
    <div>Immeuble {immeubleId}</div>
  )
}

export default Immeuble