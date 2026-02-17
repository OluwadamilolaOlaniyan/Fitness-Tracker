
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-white shadow px-8 py-4 flex justify-between items-center">
      <h1 className="text-xl font-bold text-green-700">FitTrack</h1>

      <div className="space-x-6">
        <Link to="/" className="hover:text-green-700">
          Dashboard
        </Link>
        <Link to="/workout" className="hover:text-green-700">
          Workout
        </Link>
        <Link to="/health" className="hover:text-green-700">
          Health
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
