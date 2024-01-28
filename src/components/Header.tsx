import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 w-full bg-transparent/30 text-white md:px-8 z-50">
      <nav className="flex justify-between items-center p-4">
        <div className="logo">MOON LIGHT</div>
        <ul className="flex space-x-4">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="#about-us">About</Link>
          </li>
          <li>
            <Link to="#contact">Contact</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
