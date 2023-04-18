import { useEffect, useState } from "react"
import ImmeubleList from "../components/immeuble/ImmeubleList"
import ImmeubleTypeCheckbox from "../components/immeuble/ImmeubleTypeCheckbox"
import Search from "../components/inputs/Search"
import { getImmeubles } from "../utils/api/immeuble"

const Home: React.FC = () => {

  const [immeubles, setImmeubles] = useState([])
  const [immeublesSearch, setImmeublesSearch] = useState<string>("")
  const [immeublesFilters, setImmeublesFilters] = useState<string[]>([]);

  useEffect(() => {
    getImmeubles(immeublesSearch, immeublesFilters).then(res => {
      if (res.status === 200) {
        res.json().then(immeubles => {
          setImmeubles(immeubles);
        })
      } else {
        setImmeubles([])
      }
    }).catch(err => {
      console.log(err);
    })
  }, [immeublesSearch, immeublesFilters])

    return (
  <div className="flex flex-col mx-3 md:px-10 lg:px-20">
    <section className="mt-2 md:mt-4">
      <Search id="immeuble-search" placeholder="Rechercher un immeuble..." setState={setImmeublesSearch} />
      <ImmeubleTypeCheckbox immeublesFilters={immeublesFilters} setImmeublesFilters={setImmeublesFilters} />
    </section>
    <section className="my-2 md:my-4 flex justify-center">
      {immeubles.length !== 0 ? <ImmeubleList immeubles={immeubles} /> : <div>Aucun immeuble.</div> }
    </section>
  </div>
    )
  }
  
  export default Home