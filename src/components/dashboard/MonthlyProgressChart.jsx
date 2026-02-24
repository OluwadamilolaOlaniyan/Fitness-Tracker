import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

export default function WeeklyCaloriesChart({ data = [] }) {
  const formatted = [
    { day: "Mon", value: data[0] || 0 },
    { day: "Tue", value: data[1] || 0 },
    { day: "Wed", value: data[2] || 0 },
    { day: "Thu", value: data[3] || 0 },
    { day: "Fri", value: data[4] || 0 },
    { day: "Sat", value: data[5] || 0 },
    { day: "Sun", value: data[6] || 0 },
  ];

  return (
    <div className="bg-white p-6 rounded-3xl shadow">
      <h2 className="text-xl font-semibold mb-6">Weekly Calories</h2>

      <ResponsiveContainer width="100%" height={250}>
        <LineChart data={formatted}>
          <XAxis dataKey="day" />
          <YAxis />
          <Tooltip />
          <Line
            type="monotone"
            dataKey="value"
            stroke="#7A9B7E"
            strokeWidth={3}
            dot={{ r: 5 }}
            isAnimationActive={true}
            animationDuration={1200}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}