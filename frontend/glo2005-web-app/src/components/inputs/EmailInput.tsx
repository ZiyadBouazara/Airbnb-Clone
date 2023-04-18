interface Props {
  id: string;
  value: string;
  setState: React.Dispatch<React.SetStateAction<string>>;
  placeholder: string;
  required?: boolean;
}

const EmailInput: React.FC<Props> = ({ id, value, setState, placeholder, required }) => {
  return (
    <>
      <div className="relative">
        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <svg aria-hidden="true" className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path><path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path></svg>
        </div>
        <input type="email" name="email" id={id} value={value} onChange={(e) => setState(e.target.value)} className="border border-gray-200 text-sm rounded-lg block w-full pl-10 p-2.5" placeholder={placeholder} required={required} />
      </div>
    </>
  )
}

export default EmailInput