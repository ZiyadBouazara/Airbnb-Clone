import { createPortal } from "react-dom";

interface Props {
  isOpen: boolean;
  children: React.ReactNode;
  toggleOpen: () => void;
}

const Dropdown: React.FC<Props> = ({ isOpen, children, toggleOpen }) => {
  if (!isOpen) return null;

  return createPortal(
    <div className="absolute top-0 left-0 w-full h-full z-10" onClick={toggleOpen}>
      <div className="absolute top-16 right-3 md:right-0 md:mr-10 lg:mr-20 flex flex-col items-center bg-white rounded-lg border border-black p-2" onClick={e => e.stopPropagation()}>
        {children}
      </div>
    </div>,
    document.getElementById("header-list")!
  )
}

export default Dropdown