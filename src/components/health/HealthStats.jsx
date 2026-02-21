export default function HealthStats() {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-10">

      <StatCard title="Heart Rate" value="72 bpm" status="Normal" />
      <StatCard title="Hydration" value="6 / 8 glasses" status="Good" />
      <StatCard title="Sleep" value="7.5 hours" status="Optimal" />
      <StatCard title="Calories" value="1,847 / 2,200 kcal" status="On Track" />

    </div>
  );
}

function StatCard({ title, value, status }) {
  return (
    <div className="bg-white p-6 rounded-3xl border border-[#E6E2DA] shadow-sm">
      <div className="flex justify-between items-center mb-4">
        <p className="text-[#6B7C6B]">{title}</p>
        <span className="text-sm bg-[#F1F5F1] px-3 py-1 rounded-full">
          {status}
        </span>
      </div>
      <h2 className="text-1xl font-bold text-[#2E3D2F]">
        {value}
      </h2>
    </div>
  );
}