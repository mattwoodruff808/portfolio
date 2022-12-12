import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="bg-gray-50 h-12 w-full flex justify-between items-center">
      <Link 
        to='/'
        className="text-gray-500 mx-10 text-lg">
        Home
      </Link>
      <Link 
        to='/about'
        className="text-gray-500 mx-10 text-lg">
        About
      </Link>
    </nav>
  )
};

export default NavBar;
