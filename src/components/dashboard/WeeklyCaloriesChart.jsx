
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";

const data = [
  { day: "Mon", calories: 2100 },
  { day: "Tue", calories: 2300 },
  { day: "Wed", calories: 2200 },
  { day: "Thu", calories: 2500 },
  { day: "Fri", calories: 2300 },
  { day: "Sat", calories: 2800 },
  { day: "Sun", calories: 2600 },
];

export default function WeeklyCaloriesChart() {
  return (
    <div className="bg-white rounded-3xl p-10 shadow-sm border border-[#E6E2DA] animate-fadeIn">

      <h2 className="text-2xl font-semibold text-[#2E3D2F] mb-6">
        Weekly Calories
      </h2>

      <div className="h-72">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" stroke="#E6E2DA" />
            <XAxis dataKey="day" stroke="#6B7C6B" />
            <YAxis stroke="#6B7C6B" />
            <Tooltip />
            <Line
              type="monotone"
              dataKey="calories"
              stroke="#7A9B7E"
              strokeWidth={3}
              dot={{ r: 5 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>

    </div>
  );
}