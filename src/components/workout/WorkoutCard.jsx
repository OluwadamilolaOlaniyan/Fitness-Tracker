import { Clock, Flame, Dumbbell, Play } from "lucide-react";

export default function WorkoutCard({
  title,
  description,
  duration,
  calories,
  exercises,
  level,
  image,
}) {
  return (
    <div className="bg-white rounded-3xl overflow-hidden shadow-sm border border-[#E6E2DA] hover:shadow-md transition duration-300">
      <img src={image} alt={title} className="h-64 w-full object-cover" />

      <div className="p-8">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-2xl font-semibold text-[#2E3D2F]">
            {title}
          </h3>

          <span className="bg-[#D6E3D7] text-[#2E3D2F] px-4 py-1 rounded-full text-sm">
            {level}
          </span>
        </div>

        <p className="text-[#6B7C6B] mb-6">{description}</p>

        <div className="flex gap-6 text-[#6B7C6B] mb-6">
          <div className="flex items-center gap-2">
            <Clock size={18} />
            {duration}
          </div>

          <div className="flex items-center gap-2">
            <Flame size={18} />
            {calories}
          </div>

          <div className="flex items-center gap-2">
            <Dumbbell size={18} />
            {exercises}
          </div>
        </div>

        <button className="w-full bg-[#7A9B7E] text-white py-4 rounded-2xl flex items-center justify-center gap-2 hover:opacity-90 transition">
          <Play size={18} />
          Start Workout
        </button>
      </div>
    </div>
  );
}