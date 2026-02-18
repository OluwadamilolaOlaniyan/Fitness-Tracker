
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="min-h-screen bg-[#F5F3ED] flex flex-col items-center justify-center text-center px-6">

      <h1 className="text-4xl md:text-5xl font-bold text-green-900">
        Your Journey to a <span className="text-green-600">Healthier You</span>
      </h1>

      <p className="mt-6 text-gray-600 max-w-xl">
        Track workouts, monitor health metrics, and achieve your fitness goals
        with FitTrack's comprehensive wellness platform.
      </p>

      <div className="mt-8 space-y-4 md:space-y-0 md:space-x-4 md:flex">
        <Link
          to="/dashboard"
          className="bg-green-700 text-white px-6 py-3 rounded-lg hover:bg-green-800 transition"
        >
          Start Your Journey →
        </Link>

        <Link
          to="/workout"
          className="border border-green-700 text-green-700 px-6 py-3 rounded-lg hover:bg-green-100 transition"
        >
          Explore Workouts
        </Link>
      </div>
    </div>
  );
};

export default Home;
