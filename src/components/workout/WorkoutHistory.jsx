
import { ChevronRight, Dumbbell } from "lucide-react";

export default function WorkoutHistory() {
  const history = [
    {
      title: "Strength Builder",
      date: "Today",
      duration: "45 min",
      calories: "380 kcal",
    },
    {
      title: "Cardio Blast",
      date: "Yesterday",
      duration: "30 min",
      calories: "420 kcal",
    },
    {
      title: "Yoga Flow",
      date: "2 days ago",
      duration: "40 min",
      calories: "180 kcal",
    },
  ];

  return (
    <div className="bg-white rounded-3xl shadow-sm border border-[#E6E2DA]">

      <div className="p-8 border-b border-[#E6E2DA]">
        <h2 className="text-3xl font-bold text-[#2E3D2F]">
          Workout History
        </h2>
      </div>

      {history.map((item, index) => (
        <div
          key={index}
          className="flex justify-between items-center p-8 border-b last:border-none border-[#E6E2DA] hover:bg-[#F9F8F4] transition"
        >
          <div className="flex items-center gap-6">
            <div className="w-14 h-14 bg-[#F1F5F1] rounded-2xl flex items-center justify-center">
              <Dumbbell className="text-[#7A9B7E]" />
            </div>

            <div>
              <h3 className="text-xl font-semibold text-[#2E3D2F]">
                {item.title}
              </h3>
              <p className="text-[#6B7C6B]">{item.date}</p>
            </div>
          </div>

          <div className="flex items-center gap-10 text-[#2E3D2F]">
            <div>
              <p className="text-[#6B7C6B] text-sm">Duration</p>
              <p className="font-semibold">{item.duration}</p>
            </div>

            <div>
              <p className="text-[#6B7C6B] text-sm">Calories</p>
              <p className="font-semibold">{item.calories}</p>
            </div>

            <ChevronRight className="text-[#7A9B7E]" />
          </div>
        </div>
      ))}
    </div>
  );
}