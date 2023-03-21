import FooterListItem from "./FooterListItem"

const FooterList: React.FC = () => {
  return (
    <ul className="flex gap-1 mx-3 md:mr-0 flex-wrap">
      <FooterListItem text="@ 2023 ImmoFab, Inc." />
      <FooterListItem text="·" />
      <FooterListItem text="Page d'accueil" link="/" />
      <FooterListItem text="·" />
      <FooterListItem text="À propos" link="/about"/>
      <FooterListItem text="·" />
      <FooterListItem text="Contact" link="/contact" />
    </ul>
  )
}

export default FooterList