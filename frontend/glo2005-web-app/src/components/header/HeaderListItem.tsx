import { Link } from "react-router-dom";

interface Props {
    text: string;
    link: string;
}

const HeaderListItem: React.FC<Props> = ({ text, link }) => {
  return (
    <li className="rounded-2xl p-2 hover:bg-gray-100">
      <Link to={ link }><span className="font-bold">{ text }</span></Link>
    </li>
  )
}

export default HeaderListItem
