import { useState } from "react"

const FavoriteCheckbox: React.FC = () => {

    const [isChecked, setChecked] = useState(false);

  return (
    <>
        <svg xmlns="http://www.w3.org/2000/svg" fill={isChecked ? "#dc2626" : "#aab8c2"} className="m-2 cursor-pointer z-30" onClick={() => setChecked(!isChecked)} viewBox="0 0 16 16"> <path fillRule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"/> </svg>
    </>   
  )
}

export default FavoriteCheckbox