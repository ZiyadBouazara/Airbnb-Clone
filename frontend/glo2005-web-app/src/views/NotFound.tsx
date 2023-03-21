import NotFoundList from "../components/NotFoundList";

const NotFound: React.FC = () => {
    return (
      <div className="flex flex-col mx-3 md:px-10 lg:px-20 h-72 md:h-96">
        <section className="mt-6 md:mt-12">
          <div className="mb-8 md:mb-10">
            <h1 className="font-semibold">On n'arrive pas à trouver la page que vous cherchez</h1>
          </div>
          <NotFoundList />
        </section>
      </div>
    )
  }
  
  export default NotFound