import { createPortal } from "react-dom";

interface Props {
  isOpen: boolean;
  children: React.ReactNode;
  toggleOpen: () => void;
}

const Modal: React.FC<Props> = ({ isOpen, toggleOpen, children }) => {
  if (!isOpen) return null;

  return createPortal(
    <div className="modal-bg fixed top-0 left-0 w-screen h-screen flex justify-center items-center z-20" onClick={toggleOpen}>
      <div className="modal bg-white p-10 rounded-lg drop-shadow-xl flex-col" onClick={e => e.stopPropagation()}>
        <button type="button" className="absolute top-3 right-2.5 text-black bg-transparent hover:bg-gray-100 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center" data-modal-hide="authentication-modal" onClick={toggleOpen}>
            <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
            <span className="sr-only">Close modal</span>
        </button>
        {children}
      </div>
    </div>,
    document.getElementById("modal")!
  )
}

export default Modal