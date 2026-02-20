import { Plus } from "lucide-react";

export default function CreateWorkoutCard() {
  return (
    <div className="border-2 border-dashed border-[#D6E3D7] rounded-3xl flex flex-col items-center justify-center text-center p-16 bg-[#F8FAF8] hover:bg-[#F1F5F1] transition">
      <div className="w-16 h-16 bg-[#E6EEE7] rounded-2xl flex items-center justify-center mb-6">
        <Plus className="text-[#7A9B7E]" />
      </div>

      <h3 className="text-2xl font-semibold text-[#2E3D2F] mb-2">
        Create Custom Workout
      </h3>

      <p className="text-[#6B7C6B]">
        Design your own exercise routine
      </p>
    </div>
  );
}