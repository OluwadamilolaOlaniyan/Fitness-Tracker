
export default function WorkoutTabs() {
  return (
    <div className="flex gap-4 mt-10">
      <button className="bg-[#7A9B7E] text-white px-6 py-3 rounded-2xl font-medium">
        Workout Plans
      </button>

      <button className="bg-[#F1F5F1] text-[#2E3D2F] px-6 py-3 rounded-2xl font-medium">
        Active Workout
      </button>

      <button className="bg-[#F1F5F1] text-[#2E3D2F] px-6 py-3 rounded-2xl font-medium">
        History
      </button>
    </div>
  );
}