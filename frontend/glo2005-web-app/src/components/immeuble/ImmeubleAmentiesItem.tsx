interface Props {
    name: string,
    logo: React.ReactNode
}

const ImmeubleAmentiesItem: React.FC<Props> = ({ name, logo }) => {
  return (
    <li className="flex border rounded-lg p-1 gap-1 border-black">
        <div>{logo}</div>
        <div>{name}</div>
    </li>
  )
}

export default ImmeubleAmentiesItem