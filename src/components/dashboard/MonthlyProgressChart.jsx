
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";

const data = [
  { week: "Week 1", progress: 65 },
  { week: "Week 2", progress: 70 },
  { week: "Week 3", progress: 73 },
  { week: "Week 4", progress: 80 },
];

export default function MonthlyProgressChart() {
  return (
    <div className="bg-white rounded-3xl p-10 shadow-sm border border-[#E6E2DA] animate-fadeIn">

      <h2 className="text-2xl font-semibold text-[#2E3D2F] mb-6">
        Monthly Progress
      </h2>

      <div className="h-72">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data}>
            <CartesianGrid strokeDasharray="3 3" stroke="#E6E2DA" />
            <XAxis dataKey="week" stroke="#6B7C6B" />
            <YAxis stroke="#6B7C6B" />
            <Tooltip />
            <Bar dataKey="progress" fill="#7A9B7E" radius={[8, 8, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>

    </div>
  );
}