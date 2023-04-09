import HeaderListItem from "./HeaderListItem"
import HeaderListIcon from "./HeaderListIcon"

const HeaderList: React.FC = () => {
  return (
    <ul className="header-list flex items-center gap-1 mx-3 md:mr-0" id="header-list">
      <HeaderListItem text="Accueil" link="/"/>
      <HeaderListItem text="Contact" link="/contact"/>
      <HeaderListIcon isLoggedIn={true}></HeaderListIcon>
    </ul>
  )
}

export default HeaderList