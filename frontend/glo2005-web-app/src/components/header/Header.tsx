import HeaderList from "./HeaderList";
import HeaderLogo from "./HeaderLogo";

const Header: React.FC = () => {
    return (
      <header className="flex flex-col border-b md:px-10 lg:px-20">
        <nav className="flex justify-between items-center md:text-xl">
          <HeaderLogo />
          <HeaderList />
        </nav>
      </header>
    )
  }

export default Header