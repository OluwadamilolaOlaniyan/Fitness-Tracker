import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { signOut } from "firebase/auth";
import { auth } from "../firebase";
import { AuthContext } from "../context/AuthContext";

const Navbar = () => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = async () => {
    await signOut(auth);
    navigate("/");
  };

  return (
    <nav className="bg-white shadow px-8 py-4 flex justify-between items-center">

      {/* LOGO */}
      <Link to="/" className="flex items-center space-x-2">
        <div className="w-8 h-8 bg-green-700 rounded-full flex items-center justify-center text-white font-bold">
          F
        </div>
        <span className="text-xl font-bold text-green-800">
          FitTrack
        </span>
      </Link>

      {/* NAVIGATION LINKS */}
      <div className="flex items-center space-x-6">

        {user && (
          <>
            <Link to="/dashboard" className="hover:text-green-700">
              Dashboard
            </Link>

            <Link to="/workout" className="hover:text-green-700">
              Workout
            </Link>

            <Link to="/health" className="hover:text-green-700">
              Health
            </Link>
          </>
        )}

        {/* USER INFORMATION */}
        {user ? (
          <>
            <span className="text-sm text-gray-600">
              {user.email}
            </span>

            <button
              onClick={handleLogout}
              className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition"
            >
              Logout
            </button>
          </>
        ) : (
          <Link
            to="/"
            className="bg-green-700 text-white px-4 py-2 rounded-lg hover:bg-green-800 transition"
          >
            Login
          </Link>
        )}

      </div>
    </nav>
  );
};

export default Navbar;