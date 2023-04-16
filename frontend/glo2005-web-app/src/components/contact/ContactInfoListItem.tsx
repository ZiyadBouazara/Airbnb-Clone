interface Props {
    text: string,
    phoneNumber?: string
}

const ContactInfoListItem: React.FC<Props> = ({ text, phoneNumber }) => {
  return (
    <li>
      {phoneNumber ? <div>{text}<span className="hover:underline">{phoneNumber}</span></div> : <span>{text}</span>}
    </li>
  )
}

export default ContactInfoListItem