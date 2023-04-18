import ImmeubleCheckboxOption from "./ImmeubleTypeCheckboxOption";

interface Props {
  immeublesFilters: string[];
  setImmeublesFilters: React.Dispatch<React.SetStateAction<string[]>>;
}

const ImmeubleTypeCheckbox: React.FC<Props> = ({ immeublesFilters, setImmeublesFilters }) => {

  const filterHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.checked) {
      setImmeublesFilters([...immeublesFilters, e.target.value])
    } else {
      setImmeublesFilters(
        immeublesFilters.filter((immeublesFilters) => immeublesFilters !== e.target.value)
      )
    }
  }

  return (
    <div>
      <ul className="grid w-full gap-3 md:grid-cols-3 mt-3">
        <ImmeubleCheckboxOption id="condos-loft-option" option="Condo/Loft" filterHandler={filterHandler} />
        <ImmeubleCheckboxOption id="appartements-option" option="Appartements" filterHandler={filterHandler}  />
        <ImmeubleCheckboxOption id="commercial-option" option="Commercial" filterHandler={filterHandler} />
      </ul>
    </div>
  )
}

export default ImmeubleTypeCheckbox