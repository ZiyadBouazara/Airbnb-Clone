import ContactInfoListItem from "./ContactInfoListItem"

const ContactInfoList: React.FC = () => {
  return (
    <ul className="flex flex-wrap gap-1 justify-center">
      <ContactInfoListItem text="📞" />
      <ContactInfoListItem text="·" />
      <ContactInfoListItem text="Bureau: " phoneNumber="418-659-2347" />
      <ContactInfoListItem text="·" />
      <ContactInfoListItem text="Ventes: " phoneNumber="418-IMMOFAB (418-466-6322)" />
    </ul>
  )
}

export default ContactInfoList