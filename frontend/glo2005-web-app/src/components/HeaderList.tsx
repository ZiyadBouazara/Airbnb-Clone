import HeaderListItem from "./HeaderListItem"
import HeaderListIcon from "./HeaderListIcon"

const HeaderList: React.FC = () => {
  return (
    <ul className="flex items-center gap-1 mx-3 md:mr-0">
      <HeaderListItem text="Accueil" link="/"/>
      <HeaderListItem text="Contact" link="/contact"/>
      <HeaderListIcon isLoggedIn={false} />
    </ul>
  )
}

export default HeaderList