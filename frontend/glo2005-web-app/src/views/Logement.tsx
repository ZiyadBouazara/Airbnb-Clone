import { useParams } from 'react-router-dom';
import LogementHeader from '../components/logement/LogementHeader';
import Carousel from '../components/carousel/Carousel';
import { useState, useEffect } from 'react';
import { getLogement, getImmeuble } from '../utils/api/immeuble';
import { LogementType } from '../utils/LogementType';

const Logement: React.FC = () => {

  const {immeubleId, logementId} = useParams();

  const [logement, setLogement] = useState<LogementType>()
  const [immeubleName, setImmeubleName] = useState<string>("")

  useEffect(() => {
    if (immeubleId && logementId) {
      getLogement(immeubleId, logementId).then((res) => {
        setLogement(res[0])
      }).catch((e) => {
        console.error(e)
      });
      getImmeuble(immeubleId).then((res) => {
        setImmeubleName(res[0].nom);
      }).catch((e) => {
        console.error(e)
      });
    }
  }, [])

  return (
    <div className="flex flex-col mx-3 md:px-10 lg:px-20">
      <section className="mt-6">
        {(logement && immeubleName) ? <LogementHeader logement={logement} immeubleName={immeubleName} /> : null}
      </section>
      <section className="flex flex-col justify-center items-center mt-6">
        {logement ? <Carousel photos={logement.photos.split(",")} /> : null}
        <div className="m-4 h-14">
            <ul className="flex flex-wrap items-center gap-1">
                <li>{logement?.pieces}</li>
                <li>·</li>
                <li>{logement?.taille} pi<sup>2</sup></li>
                <li>·</li>
                <li>{logement?.price}$/mois</li>
                <li>·</li>
                {logement?.available ? <li className="text-green-600">Disponible</li> : <li className="text-red-600">Non disponible</li>}
            </ul>
        </div>
      </section>
  </div>
  )
}

export default Logement