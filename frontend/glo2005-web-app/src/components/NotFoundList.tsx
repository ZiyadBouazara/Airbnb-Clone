import NotFoundListItem from "./NotFoundListItem"

const NotFoundList: React.FC = () => {
  return (
    <div className="flex flex-col gap-4">
          Voici quelques liens utiles à la place:
          <ul className="flex flex-col gap-4">
            <NotFoundListItem text="Page d'accueil" link="/"/>
            <NotFoundListItem text="À propos" link="/about"/>
            <NotFoundListItem text="Contact" link="/contact"/>
          </ul>
        </div>
  )
}

export default NotFoundList