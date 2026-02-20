
import { Clock, Flame, Check } from "lucide-react";

export default function ActiveWorkout() {
  const exercises = [
    { name: "Squats", sets: "3 sets × 12", completed: true },
    { name: "Push-ups", sets: "3 sets × 15", current: true },
    { name: "Lunges", sets: "3 sets × 10 each" },
    { name: "Plank", sets: "3 sets × 30 sec" },
    { name: "Dumbbell Rows", sets: "3 sets × 12" },
  ];

  const progress = 38;

  return (
    <div className="bg-white rounded-3xl p-10 shadow-sm border border-[#E6E2DA] mt-10">

      {/* Top Section */}
      <div className="flex justify-between items-start">
        <div>
          <h2 className="text-4xl font-bold text-[#2E3D2F]">
            Strength Builder
          </h2>
          <p className="text-[#6B7C6B] mt-2">
            Exercise 3 of 8
          </p>
        </div>

        <button className="bg-[#C9735A] text-white px-8 py-4 rounded-2xl font-medium hover:opacity-90 transition">
          End Workout
        </button>
      </div>

      {/* Progress Bar */}
      <div className="mt-10">
        <div className="flex justify-between mb-2 text-[#6B7C6B]">
          <span>Progress</span>
          <span>{progress}%</span>
        </div>

        <div className="w-full bg-[#E6E2DA] h-4 rounded-full overflow-hidden">
          <div
            className="bg-[#7A9B7E] h-full rounded-full transition-all duration-500"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

      {/* Time & Calories */}
      <div className="grid md:grid-cols-2 gap-6 mt-10">
        <div className="bg-[#F1F5F1] rounded-2xl p-6 flex items-center gap-4">
          <Clock className="text-[#7A9B7E]" />
          <div>
            <p className="text-[#6B7C6B]">Time Elapsed</p>
            <h3 className="text-3xl font-bold text-[#2E3D2F]">
              12:34
            </h3>
          </div>
        </div>

        <div className="bg-[#F1F5F1] rounded-2xl p-6 flex items-center gap-4">
          <Flame className="text-[#7A9B7E]" />
          <div>
            <p className="text-[#6B7C6B]">Calories Burned</p>
            <h3 className="text-3xl font-bold text-[#2E3D2F]">
              145 kcal
            </h3>
          </div>
        </div>
      </div>

      {/* Exercise List */}
      <div className="mt-10 space-y-6">
        {exercises.map((exercise, index) => (
          <div
            key={index}
            className={`rounded-2xl p-6 border flex justify-between items-center
              ${
                exercise.current
                  ? "border-[#7A9B7E] bg-[#F8FAF8]"
                  : "border-[#E6E2DA] bg-[#F9F8F4]"
              }`}
          >
            <div className="flex items-center gap-4">
              {exercise.completed ? (
                <div className="w-12 h-12 bg-[#7A9B7E] rounded-xl flex items-center justify-center">
                  <Check className="text-white" />
                </div>
              ) : (
                <div className="w-12 h-12 bg-[#E6E2DA] rounded-xl flex items-center justify-center text-[#6B7C6B] font-medium">
                  {index + 1}
                </div>
              )}

              <div>
                <h4 className="text-xl font-semibold text-[#2E3D2F]">
                  {exercise.name}
                </h4>
                <p className="text-[#6B7C6B]">
                  {exercise.sets}
                </p>
              </div>
            </div>

            {exercise.current && (
              <button className="bg-[#7A9B7E] text-white px-6 py-3 rounded-2xl hover:opacity-90 transition">
                Complete
              </button>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}