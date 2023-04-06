import LogementCheckbox from "../components/LogementCheckbox"
import Search from "../components/Search"
import ImmeubleList from "../components/ImmeubleList"

const Home: React.FC = () => {
    return (
      <div className="flex flex-col mx-3 md:px-10 lg:px-20">
        <section className="mt-2 md:mt-4">
          <Search id="logement-search" placeholder="Rechercher un immeuble..." />
          <LogementCheckbox />
        </section>
        <section className="mt-2 md:mt-4">
          <ImmeubleList />
        </section>
      </div>
    )
  }
  
  export default Home