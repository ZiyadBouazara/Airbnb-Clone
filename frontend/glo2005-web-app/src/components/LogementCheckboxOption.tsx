interface Props {
    id: string;
    option: string;
}  

const LogementCheckboxOption: React.FC<Props> = ({ id, option }) => {
  return (
    <li className="flex-1">
        <input type="checkbox" id={id} value="" className="hidden peer"/>
        <label htmlFor={id} className="w-full p-5 border-2 rounded-lg cursor-pointer peer-checked:border-immofab hover:bg-gray-100">
            <span className="w-full">{ option }</span>
        </label>
    </li>
  )
}

export default LogementCheckboxOption