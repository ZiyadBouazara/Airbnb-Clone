import HeaderListItem from "./HeaderListItem"

const HeaderList: React.FC = () => {
  return (
    <ul className="flex items-center gap-1 mx-3 md:mr-0">
      <HeaderListItem text="Accueil" link="/"/>
      <HeaderListItem text="Contact" link="/contact"/>
      <HeaderListItem text="Compte" link="/account" />
    </ul>
  )
}

export default HeaderList