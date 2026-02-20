
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-white shadow px-8 py-4 flex justify-between items-center">

      {/* LOGO → Goes to Home */}
      <Link to="/" className="flex items-center space-x-2">
        <div className="w-8 h-8 bg-green-700 rounded-full flex items-center justify-center text-white font-bold">
          F
        </div>
        <span className="text-xl font-bold text-green-800">
          FitTrack
        </span>
      </Link>

      <div className="space-x-6">
        <Link to="/dashboard" className="hover:text-green-700">
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