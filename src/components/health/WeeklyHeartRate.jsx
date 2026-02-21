
export default function WeeklyHeartRate() {
  return (
    <div className="bg-white p-8 rounded-3xl border border-[#E6E2DA] shadow-sm">
      <h2 className="text-2xl font-semibold text-[#2E3D2F] mb-6">
        Weekly Heart Rate
      </h2>

      {/* Replace with Recharts later */}
      <div className="h-64 flex items-center justify-center text-[#6B7C6B]">
        Heart Rate Chart (Recharts goes here)
      </div>
    </div>
  );
}