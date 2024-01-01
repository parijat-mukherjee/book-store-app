import { NavLink } from "react-router-dom";
const NavMenu = () => {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white font-bold text-xl">
          <NavLink to="/">My Bookstore App</NavLink>
        </div>
        <ul className="flex space-x-4">
          <li>
            <NavLink to="/" className="text-white hover:text-gray-300">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/books/create"
              className="text-white hover:text-gray-300"
            >
              Add New Book
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/books/details/:id"
              className="text-white hover:text-gray-300"
            >
              Read Book Records
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/books/edit/:id"
              className="text-white hover:text-gray-300"
            >
              Edit Book
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/books/delete/:id"
              className="text-white hover:text-gray-300"
            >
              Delete Book
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavMenu;
