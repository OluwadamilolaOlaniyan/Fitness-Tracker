
import { Dumbbell, Clock, Flame } from "lucide-react";

export default function WorkoutStats() {
  const stats = [
    {
      icon: Dumbbell,
      value: "24",
      title: "Total Workouts",
    },
    {
      icon: Clock,
      value: "5",
      title: "This Week",
      
    },
    {
      icon: Flame,
      value: "1,920",
      title: "Calories Burned",
    },
  ];

  return (
    <div className="grid md:grid-cols-3 gap-6 mt-8">
      {stats.map((item, index) => {
        const Icon = item.icon;
        return (
          <div
            key={index}
            className="bg-white rounded-3xl p-8 shadow-sm border border-[#E6E2DA]"
          >
            <div className="w-14 h-14 bg-[#F1F5F1] rounded-2xl flex items-center justify-center mb-6">
              <Icon className="text-[#7A9B7E]" />
            </div>

            <p className="text-[#6B7C6B]">{item.title}</p>
            <h2 className="text-4xl font-bold text-[#2E3D2F] mt-2">
              {item.value}
            </h2>
          </div>
        );
      })}
    </div>
  );
}