import { Link } from "react-router-dom";

interface Props {
    text: string;
    link?: string;
}

const FooterListItem: React.FC<Props> = ({ text, link }) => {
  if (link) {
    return (
      <li>
        <Link to={ link }><span className="hover:underline">{ text }</span></Link>
      </li>
    )
  } else {
    return (
      <li>
        <span>{ text }</span>
      </li>
    )
  }
}

export default FooterListItem