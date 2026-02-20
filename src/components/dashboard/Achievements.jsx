
import { Award, Trophy, Flame, Target } from "lucide-react";

export default function Achievements() {
  const achievements = [
    {
      icon: Trophy,
      title: "First Workout",
      description: "Completed your first workout session",
      color: "bg-yellow-100 text-yellow-600",
    },
    {
      icon: Flame,
      title: "7-Day Streak",
      description: "Worked out for 7 consecutive days",
      color: "bg-orange-100 text-orange-600",
    },
    {
      icon: Target,
      title: "Goal Crusher",
      description: "Reached 100% of weekly fitness goal",
      color: "bg-green-100 text-green-600",
    },
    {
      icon: Award,
      title: "Calorie Burner",
      description: "Burned 10,000 calories total",
      color: "bg-blue-100 text-blue-600",
    },
  ];

  return (
    <div className="bg-white rounded-3xl p-10 shadow-sm border border-[#E6E2DA] animate-fadeIn mt-14">

      <h2 className="text-2xl font-semibold text-[#2E3D2F] mb-8">
        Achievements
      </h2>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {achievements.map((item, index) => {
          const Icon = item.icon;
          return (
            <div
              key={index}
              className="bg-[#F1F5F1] rounded-2xl p-6 hover:shadow-md transition duration-300 flex flex-col items-start"
            >
              <div
                className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${item.color}`}
              >
                <Icon size={22} />
              </div>

              <h3 className="text-lg font-semibold text-[#2E3D2F] mb-2">
                {item.title}
              </h3>

              <p className="text-sm text-[#6B7C6B]">
                {item.description}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}