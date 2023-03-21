interface Props {
    id: string;
    placeholder: string;
}

const Search: React.FC<Props> = ({ id, placeholder }) => {
  return (
    <form>
        <div className="relative">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <svg aria-hidden="true" className="w-5 h-5 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
            </div>
            <input type="search" id={ id } className="block w-full p-4 pl-10 text-sm border border-gray-200 rounded-lg" placeholder={ placeholder} required/>
            <button type="submit" className="text-white absolute right-2.5 bottom-2.5 bg-immofab hover:bg-immofab-hover font-medium rounded-lg text-sm px-4 py-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
            </button>
        </div>
    </form>
  )
}

export default Search