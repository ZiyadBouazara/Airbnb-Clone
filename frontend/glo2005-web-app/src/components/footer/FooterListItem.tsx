import { Link } from "react-router-dom";

interface Props {
    text: string;
    link?: string;
}

const FooterListItem: React.FC<Props> = ({ text, link }) => {
  return (
    <li>
      {link ? <Link to={ link }><span className="hover:underline">{ text }</span></Link> : <span>{ text }</span>}
    </li>
  )
}

export default FooterListItem