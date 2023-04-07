import TextInput from "../inputs/TextInput"
import EmailInput from "../inputs/EmailInput"
import TextAreaInput from "../inputs/TextAreaInput"
import Button from "../inputs/Button"

const ContactForm: React.FC = () => {
  return (
    <form className="flex flex-col gap-2" action="">
    <div>
      <TextInput id="name" label="Votre nom (requis)*" placeholder="Nom" required />
    </div>
    <div>
      <label htmlFor="email" className="block mb-2 text-sm font-medium">Votre courriel (requis)*</label>
      <EmailInput id="email" placeholder="Courriel" required />
    </div>
    <div>
      <TextInput id="subject" label="Sujet" placeholder="Sujet" />
    </div>
    <div>
      <TextAreaInput id="message" label="Votre message (requis)*" placeholder="Message" required />
    </div>
    <div>
      <Button text="Envoyer" />
    </div>
  </form>
  )
}

export default ContactForm