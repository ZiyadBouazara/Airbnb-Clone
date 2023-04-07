import ContactInfoList from "./ContactInfoList"

const ContactInfo: React.FC = () => {
  return (
    <>
        <div className="flex flex-col gap-2 mb-6 text-sm">
            <h1 className="font-semibold text-xl">Contact</h1>
        </div>
        <ContactInfoList />
    </>
  )
}

export default ContactInfo