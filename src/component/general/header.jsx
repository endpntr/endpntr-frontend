import { Link, useNavigate } from "react-router-dom";

function Header() {
  const navigate = useNavigate();

  return (
    <header className="w-full py-5 px-2 sm:px-6 lg:px-8 border-b border-gray-200 dark:border-gray-800">
      <div className="flex items-center justify-between">
        <h1
          onClick={() => navigate("/")}
          className="text-2xl font-semibold text-gray-900 dark:text-gray-100 cursor-pointer"
        >
          endpntr.
        </h1>
        <nav>
          <Link
            className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100"
            to="https://github.com/LSCS2401-08/endpntr"
          >
            Github
          </Link>
        </nav>
      </div>
    </header>
  );
}

export default Header;
