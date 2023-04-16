import { useState } from "react";

interface Props {
    id: string;
    placeholder: string;
    setState: React.Dispatch<React.SetStateAction<string>>;
}

const Search: React.FC<Props> = ({ id, placeholder, setState }) => {

  const [search, setSearch] = useState<string>("")

  return (
    <div>
        <div className="relative">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <svg aria-hidden="true" className="w-5 h-5 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
            </div>
            <input type="search" id={ id } value={search} onChange={(e) => setSearch(e.target.value)} className="block w-full p-4 pl-10 text-sm border border-gray-200 rounded-lg" placeholder={ placeholder} required/>
            <button type="submit" onClick={() => setState(search)} className="text-white absolute right-2.5 bottom-2.5 bg-immofab hover:bg-immofab-hover font-medium rounded-lg text-sm px-4 py-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
            </button>
        </div>
    </div>
  )
}

export default Search