interface Props {
    id: string,
    label: string,
    placeholder: string,
    required?: boolean
}

const TextInput: React.FC<Props> = ({ id, label, placeholder, required }) => {
  return (
    <>
        <label htmlFor={id} className="block mb-2 text-sm font-medium">{label}</label>
        <input type="text" id={id} className="border border-gray-200 text-sm rounded-lg block w-full p-2.5" placeholder={placeholder} required={required} />
    </>
  )
}

export default TextInput