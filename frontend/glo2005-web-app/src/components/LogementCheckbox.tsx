import LogementCheckboxOption from "./LogementCheckboxOption"

const LogementCheckbox: React.FC = () => {
  return (
    <div>
        <ul className="flex max-sm:flex-col max-sm:gap-y-11 items-center flex-wrap w-full gap-2 md:grid-cols-3 mt-7 justify-center">
            <LogementCheckboxOption id="condos-locatifs-option" option="Condos locatifs" />
            <LogementCheckboxOption id="appartements-option" option="Appartements" />
            <LogementCheckboxOption id="locaux-commerciaux-option" option="Locaux Commerciaux" />
        </ul>
    </div>
  )
}

export default LogementCheckbox