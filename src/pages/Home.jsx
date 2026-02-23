import { Link, useNavigate } from "react-router-dom";
import {
  TrendingUp,
  Dumbbell,
  Heart,
  Apple,
  Target,
  ArrowRight,
} from "lucide-react";
import { useState, useContext } from "react";
import { auth } from "../firebase";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import { AuthContext } from "../context/AuthContext";

export default function Home() {
  const navigate = useNavigate();
  const { user } = useContext(AuthContext);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleRegister = async () => {
    try {
      setError("");
      await createUserWithEmailAndPassword(auth, email, password);
      navigate("/dashboard");
    } catch (err) {
      setError(err.message);
    }
  };

  const handleLogin = async () => {
    try {
      setError("");
      await signInWithEmailAndPassword(auth, email, password);
      navigate("/dashboard");
    } catch (err) {
      setError(err.message);
    }
  };

  const features = [
    {
      icon: TrendingUp,
      title: "Track Progress",
      description:
        "Monitor your fitness journey with detailed analytics and insights",
    },
    {
      icon: Dumbbell,
      title: "Workout Plans",
      description:
        "Access customized workout routines tailored to your goals",
    },
    {
      icon: Heart,
      title: "Health Metrics",
      description:
        "Track heart rate, calories, and other vital health statistics",
    },
    {
      icon: Apple,
      title: "Nutrition Tracking",
      description:
        "Log meals and monitor your daily nutritional intake",
    },
    {
      icon: Target,
      title: "Goal Setting",
      description:
        "Set and achieve your personal fitness milestones",
    },
  ];

  const stats = [
    { value: "50K+", label: "Active Users" },
    { value: "1M+", label: "Workouts Logged" },
    { value: "4.9", label: "App Rating" },
  ];

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">

      {/* HERO SECTION */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">

          {/* Left Text */}
          <div>
            <h1 className="text-5xl font-bold mb-6">
              Your Journey to a{" "}
              <span className="text-green-900">Healthier You</span>
            </h1>

            <p className="text-lg text-gray-600 mb-8">
              Track workouts, monitor health metrics, and achieve your fitness
              goals with FitTrack's comprehensive wellness platform.
            </p>

            {!user && (
              <div className="space-y-4">
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full p-3 border rounded-lg"
                  onChange={(e) => setEmail(e.target.value)}
                />

                <input
                  type="password"
                  placeholder="Password"
                  className="w-full p-3 border rounded-lg"
                  onChange={(e) => setPassword(e.target.value)}
                />

                {error && (
                  <p className="text-red-500 text-sm">{error}</p>
                )}

                <div className="flex gap-4">
                  <button
                    onClick={handleLogin}
                    className="flex-1 bg-green-900 text-white py-3 rounded-lg hover:bg-green-800 transition"
                  >
                    Login
                  </button>

                  <button
                    onClick={handleRegister}
                    className="flex-1 border border-green-900 text-green-900 py-3 rounded-lg hover:bg-green-900 hover:text-white transition"
                  >
                    Register
                  </button>
                </div>
              </div>
            )}

            {user && (
              <div className="mt-6">
                <p className="mb-4 text-green-900 font-medium">
                  Welcome back, {user.email}
                </p>
                <Link
                  to="/dashboard"
                  className="bg-green-900 text-white px-8 py-3 rounded-lg inline-flex items-center gap-2 hover:bg-green-800 transition"
                >
                  Go to Dashboard
                  <ArrowRight size={18} />
                </Link>
              </div>
            )}
          </div>

          {/*  Right side text */}
          <div className="hidden lg:block bg-white p-10 rounded-3xl shadow-lg">
            <h3 className="text-2xl font-semibold mb-4">
              Why Choose FitTrack?
            </h3>
            <ul className="space-y-3 text-gray-600">
              <li>✔ Personalized workout tracking</li>
              <li>✔ Nutrition & health monitoring</li>
              <li>✔ Real-time progress analytics</li>
              <li>✔ Cloud-saved workout history</li>
            </ul>
          </div>

        </div>
      </section>

      {/* STATS SECTION */}
      <section className="py-16 bg-white border-y">
        <div className="max-w-6xl mx-auto grid sm:grid-cols-3 gap-8 text-center px-6">
          {stats.map((stat, index) => (
            <div key={index}>
              <div className="text-4xl font-bold text-green-900">
                {stat.value}
              </div>
              <div className="text-gray-500">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* FEATURES SECTION */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6 text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            Everything You Need to Succeed
          </h2>
          <p className="text-gray-600">
            Powerful features designed to help you reach your fitness goals
          </p>
        </div>

        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="bg-white p-8 rounded-2xl shadow hover:shadow-lg transition"
              >
                <div className="w-14 h-14 bg-green-100 rounded-xl flex items-center justify-center mb-4">
                  <Icon className="text-green-900" size={24} />
                </div>

                <h3 className="text-xl font-semibold mb-2">
                  {feature.title}
                </h3>

                <p className="text-gray-600">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </section>

    </div>
  );
}