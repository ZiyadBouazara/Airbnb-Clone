interface Props {
    id: string;
    value: any;
    min: number;
    max: number;
    setState: React.Dispatch<React.SetStateAction<any>>;
    label: string;
    placeholder: string;
    required?: boolean;
}

const NumberInput: React.FC<Props> = ({ id, value, min, max, setState, label, placeholder, required }) => {
  return (
    <>
        <label htmlFor={id} className="block mb-2 text-sm font-medium">{label}</label>
        <input type="number" id={id} value={value} min={min} max={max} onChange={(e) => setState(e.target.valueAsNumber)} className="border border-gray-200 text-sm rounded-lg block w-full p-2.5" placeholder={placeholder} required={required} />
    </>
  )
}

export default NumberInput