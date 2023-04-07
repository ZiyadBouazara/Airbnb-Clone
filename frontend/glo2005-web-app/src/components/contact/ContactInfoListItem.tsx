interface Props {
    text: string,
    phoneNumber?: string
}

const ContactInfoListItem: React.FC<Props> = ({ text, phoneNumber }) => {
  return (
    <li>
      {phoneNumber ? <li>{text}<span className="hover:underline">{phoneNumber}</span></li> : <span>{text}</span>}
    </li>
  )
}

export default ContactInfoListItem