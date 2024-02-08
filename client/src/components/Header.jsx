import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-slate-200 shadow-md">
      <div className="flex justify-between max-w-6xl p-3 m-auto items-center">
        <Link to="/">
          <h1 className="font-bold text-md sm:text-2xl flex flex-wrap">
            <span className="text-slate-500">Flex</span>
            <span className="text-slate-700">Estate</span>
          </h1>
        </Link>
        <form className="bg-slate-100 border-transparent rounded-lg p-3 flex items-center ">
          <input
            type="search"
            placeholder="Search..."
            className="bg-transparent outline-none w-28 sm:w-64"
          />
          <FaSearch className="text-slate-500 cursor-pointer" />
        </form>
        <ul className="flex gap-4">
          <Link to="/">
            <li className="hidden sm:inline hover:underline">Home</li>
          </Link>
          <Link to="/about">
            <li className="hidden sm:inline hover:underline">About</li>
          </Link>
          <Link to="/sign-in">
            <li>Sign In</li>
          </Link>
        </ul>
      </div>
    </header>
  );
};
export default Header;
