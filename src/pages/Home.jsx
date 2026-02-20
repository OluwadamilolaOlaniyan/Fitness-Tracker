
import { Link } from "react-router-dom";
import {
  TrendingUp,
  Dumbbell,
  Heart,
  Apple,
  Target,
  ArrowRight,
} from "lucide-react";

export default function Home() {
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
        <div className="max-w-4xl mx-auto px-6 text-center">

          <h1 className="text-5xl font-bold mb-6">
            Your Journey to a{" "}
            <span className="text-green-600">Healthier You</span>
          </h1>

          <p className="text-lg text-gray-600 mb-8">
            Track workouts, monitor health metrics, and achieve your fitness
            goals with FitTrack's comprehensive wellness platform.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/dashboard"
              className="bg-green-600 text-white px-8 py-3 rounded-lg flex items-center justify-center gap-2 hover:bg-green-700 transition"
            >
              Start Your Journey
              <ArrowRight size={18} />
            </Link>

            <Link
              to="/workout"
              className="border border-green-600 text-green-600 px-8 py-3 rounded-lg hover:bg-green-600 hover:text-white transition"
            >
              Explore Workouts
            </Link>
          </div>

        </div>
      </section>

      {/* STATS SECTION */}
      <section className="py-16 bg-white border-y">
        <div className="max-w-6xl mx-auto grid sm:grid-cols-3 gap-8 text-center px-6">
          {stats.map((stat, index) => (
            <div key={index}>
              <div className="text-4xl font-bold text-green-600">
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
                  <Icon className="text-green-600" size={24} />
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

      {/* CTA SECTION */}
      <section className="py-24">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="bg-green-600 text-white rounded-3xl p-12">

            <h2 className="text-3xl font-bold mb-4">
              Ready to Transform Your Life?
            </h2>

            <p className="text-lg opacity-90 mb-8">
              Join thousands of users who are already achieving their fitness goals with FitTrack.
            </p>

            <Link
              to="/dashboard"
              className="bg-white text-green-600 px-8 py-3 rounded-lg hover:opacity-90 transition inline-flex items-center gap-2"
            >
              Get Started for Free
              <ArrowRight size={18} />
            </Link>

          </div>
        </div>
      </section>

    </div>
  );
}