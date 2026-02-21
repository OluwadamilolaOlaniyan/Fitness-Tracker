
export default function WellnessOverview() {
  return (
    <div className="grid md:grid-cols-2 gap-8">

      <WellnessCard title="Hydration" value="6 / 8 glasses" />
      <WellnessCard title="Mood" value="😊 Feeling Good" />
      <WellnessCard title="Stress Level" value="Low" />
      <WellnessCard title="Energy Level" value="High" />

    </div>
  );
}

function WellnessCard({ title, value }) {
  return (
    <div className="bg-white p-8 rounded-3xl border border-[#E6E2DA] shadow-sm">
      <p className="text-[#6B7C6B]">{title}</p>
      <h3 className="text-2xl font-semibold text-[#2E3D2F] mt-3">
        {value}
      </h3>
    </div>
  );
}