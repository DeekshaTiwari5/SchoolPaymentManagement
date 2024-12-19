import { Link } from 'react-router-dom';
import ThemeToggle from './ThemeToggle';

const Navbar = () => {
  return (
    <nav className="bg-blue-600 dark:bg-gray-800 shadow-lg">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <Link
          to="/"
          className="text-2xl font-bold text-white hover:text-gray-300"
        >
          School Payments
        </Link>
        <div className="flex space-x-6 items-center">
          <Link to="/" className="text-white hover:text-gray-300 transition">
            Dashboard
          </Link>
          <Link
            to="/school"
            className="text-white hover:text-gray-300 transition"
          >
            School Details
          </Link>
          <Link
            to="/status"
            className="text-white hover:text-gray-300 transition"
          >
            Status Check
          </Link>
          <ThemeToggle />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
