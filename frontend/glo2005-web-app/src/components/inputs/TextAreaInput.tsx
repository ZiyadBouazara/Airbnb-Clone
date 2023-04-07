interface Props {
    id: string,
    label: string,
    placeholder: string,
    required?: boolean
}

const TextAreaInput: React.FC<Props> = ({ id, label, placeholder, required }) => {
  return (
    <>
        <label htmlFor={id} className="block mb-2 text-sm font-medium">{label}</label>
        <textarea id={id} rows={4} className="block p-2.5 w-full text-sm rounded-lg border border-gray-200" placeholder={placeholder} required={required}></textarea>
    </>
  )
}

export default TextAreaInput