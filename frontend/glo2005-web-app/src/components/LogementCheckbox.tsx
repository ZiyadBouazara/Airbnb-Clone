import LogementCheckboxOption from "./LogementCheckboxOption"

const LogementCheckbox: React.FC = () => {
  return (
    <div>
        <ul className="grid w-full gap-6 md:grid-cols-3 mt-7 ">
            <LogementCheckboxOption id="condos-locatifs-option" option="Condos locatifs" />
            <LogementCheckboxOption id="appartements-option" option="Appartements" />
            <LogementCheckboxOption id="locaux-commerciaux-option" option="Locaux Commerciaux" />
        </ul>
    </div>
  )
}

export default LogementCheckbox