import { Link } from "react-router-dom";

interface Props {
    text: string;
    link: string;
}

const NotFoundListItem: React.FC<Props> = ({ text, link }) => {
  return (
  <li>
    <Link className="underline text-blue-600 hover:text-blue-800 visited:text-purple-600" to={ link }><span>{ text }</span></Link>
  </li>
  )
}

export default NotFoundListItem