import LogementCheckboxOption from "./LogementCheckboxOption"

const LogementCheckbox: React.FC = () => {
  return (
    <div>
        <ul className="grid w-full gap-3 md:grid-cols-3 mt-3">
            <LogementCheckboxOption id="condos-loft-option" option="Condo/Loft" />
            <LogementCheckboxOption id="appartements-option" option="Appartements" />
            <LogementCheckboxOption id="commercial-option" option="Commercial" />
        </ul>
    </div>
  )
}

export default LogementCheckbox