import TextInput from "../inputs/TextInput"
import EmailInput from "../inputs/EmailInput"
import TextAreaInput from "../inputs/TextAreaInput"
import Button from "../inputs/Button"
import { useState } from "react"
import { contact } from "../../utils/api/contact"

const ContactForm: React.FC = () => {

  const [name, setName] = useState<string>("")
  const [email, setEmail] = useState<string>("")
  const [subject, setSubject] = useState<string>("")
  const [message, setMessage] = useState<string>("")

  const onSend = (e:React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    contact(name, email, subject, message).then(res => {
      if(res.status === 200) {
        alert("Courriel envoyer avec succès.");
        setName("");
        setEmail("");
        setSubject("");
        setMessage("");
      } else {
        alert("Erreur lors de l'envoi du courriel");
      }
    }).catch(err => {
      console.error(err);
    })
  }

  return (
  <form className="flex flex-col gap-2" onSubmit={(e) => onSend(e)}>
    <div>
      <TextInput setState={setName} value={name} id="name" label="Votre nom (requis)*" placeholder="Nom" required />
    </div>
    <div>
      <label htmlFor="email" className="block mb-2 text-sm font-medium">Votre courriel (requis)*</label>
      <EmailInput setState={setEmail} value={email} id="email" placeholder="Courriel" required />
    </div>
    <div>
      <TextInput setState={setSubject} value={subject} id="subject" label="Sujet" placeholder="Sujet" />
    </div>
    <div>
      <TextAreaInput setState={setMessage} value={message} id="message" label="Votre message (requis)*" placeholder="Message" required />
    </div>
    <div>
      <Button text="Envoyer" />
    </div>
  </form>
  )
}

export default ContactForm