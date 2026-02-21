export default function NutritionMacros() {
  return (
    <div className="bg-white p-8 rounded-3xl border border-[#E6E2DA] shadow-sm">
      <h2 className="text-2xl font-semibold text-[#2E3D2F] mb-6">
        Today's Macros
      </h2>

      <div className="grid md:grid-cols-3 gap-8">

        <MacroCard label="Protein" value="120g" percent="75%" />
        <MacroCard label="Carbs" value="210g" percent="60%" />
        <MacroCard label="Fats" value="65g" percent="50%" />

      </div>
    </div>
  );
}

function MacroCard({ label, value, percent }) {
  return (
    <div className="bg-[#F9F8F4] p-6 rounded-2xl text-center">
      <p className="text-[#6B7C6B]">{label}</p>
      <h3 className="text-3xl font-bold text-[#2E3D2F] mt-2">
        {value}
      </h3>
      <p className="text-[#7A9B7E] mt-2">{percent} of daily goal</p>
    </div>
  );
}