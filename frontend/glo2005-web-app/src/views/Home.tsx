import LogementCheckbox from "../components/LogementCheckbox"

const Home: React.FC = () => {
    return (
      <div className="flex flex-col mx-3 md:px-10 lg:px-20">
        <section className="mt-6 md:mt-12">
        <LogementCheckbox />
        </section>
        <div>
          Home
        </div>
      </div>
    )
  }
  
  export default Home