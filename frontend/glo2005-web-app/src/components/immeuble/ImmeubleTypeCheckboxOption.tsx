interface Props {
    id: string;
    option: string;
    filterHandler: (e: React.ChangeEvent<HTMLInputElement>) => void;
}  

const ImmeubleTypeCheckboxOption: React.FC<Props> = ({ id, option, filterHandler }) => {
  return (
    <li>
      <input type="checkbox" id={id} value={option} onChange={(e) => filterHandler(e)} className="hidden peer" required/>
      <label htmlFor={id} className="flex items-center justify-center w-full p-5 border-2 rounded-lg cursor-pointer peer-checked:border-immofab hover:bg-gray-100 font-semibold">
        <span>{ option }</span>
      </label>
    </li>
  )
}

export default ImmeubleTypeCheckboxOption