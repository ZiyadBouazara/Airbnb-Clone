import { useParams } from 'react-router-dom';
import ImmeubleHeader from '../components/immeuble/ImmeubleHeader';
import ImmeubleAmenities from '../components/immeuble/ImmeubleAmenities';
import LogementList from '../components/logement/LogementList';
import Search from '../components/inputs/Search';
import { useState, useEffect } from 'react';
import { getImmeuble } from '../utils/api/immeuble';
import { getLogements } from '../utils/api/immeuble';
import { ImmeubleType } from '../utils/ImmeubleType';
import { LogementType } from '../utils/LogementType';

const Immeuble: React.FC = () => {

  const {immeubleId} = useParams<string>();

  const [immeuble, setImmeuble] = useState<ImmeubleType>();
  const [logements, setLogements] = useState<LogementType[]>([]);
  const [logementsSearch, setLogementsSearch] = useState<string>("");


  useEffect(() => {
    if (immeubleId) {
      getImmeuble(immeubleId)
        .then(res => {
          if (res.status === 200) {
            res.json().then(immeuble => {
              setImmeuble(immeuble[0])
            })
          }
        }).catch(err => {
          console.error(err);
      });
    }
  }, []);

  useEffect(() => {
    if (immeubleId) {
      getLogements(immeubleId, logementsSearch)
      .then(res => {
        if (res.status === 200) {
          res.json().then(logements => {
            logements.forEach(logement => {
              logement.isChecked = false;
            });
            setLogements(logements)
          })
        } else {
          setLogements([]);
        }
      }).catch(err => {
        console.error(err);
      });
    }
  }, [logementsSearch])

  return (
    <div className="flex flex-col mx-3 md:px-10 lg:px-20">
      <section className="flex flex-col items-start mt-6">
        {immeuble ? <ImmeubleHeader immeuble={immeuble} /> : null}
      </section>
      <section className="flex flex-wrap justify-center mt-6">
        <img className="object-cover h-80 w-96 rounded-lg" src={immeuble?.photos} alt="" />
        <div className="mx-4 w-96">
          {immeuble?.descriptif}
        </div>
      </section>
      <section className="flex flex-col items-center gap-2 mt-3">
        {immeuble ? <ImmeubleAmenities immeuble={immeuble} /> : null}
      </section>
      <section className="mt-2 md:mt-4">
        <div className="flex flex-col">
          <div className="mb-2 md:mb-4">
            <h1 className="font-semibold text-xl flex justify-center">Logements ({immeuble?.nombre_logements})</h1>
          </div>
          <Search setState={setLogementsSearch} id="logement-search" placeholder="Rechercher un logement..." />
        </div>
        <div className="my-2 md:my-4 flex justify-center">
          {logements.length !== 0 ? <LogementList logements={logements} /> : <div>Aucun logements.</div>}
        </div>
      </section>
    </div>
  )
}

export default Immeuble