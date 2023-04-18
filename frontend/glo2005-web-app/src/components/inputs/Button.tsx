interface Props {
    text: string
}

const Button: React.FC<Props> = ({ text }) => {
  return (
    <>
      <button type="submit" className="w-full text-white bg-immofab hover:bg-immofab-hover font-medium rounded-lg text-sm px-5 py-2.5 text-center">{text}</button>
    </>
  )
}

export default Button