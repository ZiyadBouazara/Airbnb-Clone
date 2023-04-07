interface Props {
    id: string;
    option: string;
}  

const ImmeubleTypeCheckboxOption: React.FC<Props> = ({ id, option }) => {
  return (
    <li>
      <input type="checkbox" id={id} value="" className="hidden peer" required/>
      <label htmlFor={id} className="flex items-center justify-center w-full p-5 border-2 rounded-lg cursor-pointer peer-checked:border-immofab hover:bg-gray-100 font-semibold">
        <span>{ option }</span>
      </label>
    </li>
  )
}

export default ImmeubleTypeCheckboxOption