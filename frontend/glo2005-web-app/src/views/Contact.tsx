import ContactInfo from "../components/ContactInfo"
import ContactForm from "../components/ContactForm"

const Contact: React.FC = () => {
  return (
    <div className="flex flex-col mx-3 md:px-10 lg:px-20">
      <section className="my-6">
        <ContactInfo />
      </section>
      <section className="mb-6">
        <ContactForm />
      </section>
    </div>
  )
}

export default Contact