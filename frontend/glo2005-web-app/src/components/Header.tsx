import HeaderLogo from "./HeaderLogo";
import HeaderList from "./HeaderList";

const Header: React.FC = () => {
    return (
      <header className="flex flex-col border md:px-10 lg:px-20">
        <nav className="flex justify-between items-center">
          <HeaderLogo />
          <HeaderList />
        </nav>
      </header>
    )
  }

export default Header