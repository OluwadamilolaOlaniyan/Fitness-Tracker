import { Flame, Footprints, Activity, Target } from "lucide-react";
import MetricCard from "../components/dashboard/MetricCard";
import WeeklyCaloriesChart from "../components/dashboard/WeeklyCaloriesChart";
import MonthlyProgressChart from "../components/dashboard/MonthlyProgressChart";
import RecentActivities from "../components/dashboard/RecentActivities";
import Achievements from "../components/dashboard/Achievements";

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-[#F5F3ED] px-6 py-10">

      <div className="mb-10">
        <h1 className="text-[48px] font-bold text-[#273e29]">
          Dashboard
        </h1>
        <p className="text-[#6B7C6B] text-lg">
          Welcome back! Here's your fitness overview.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8 mb-14">
        <MetricCard icon={Flame} title="Calories Burned" value="2,547" unit="kcal" trend="+12%" />
        <MetricCard icon={Footprints} title="Steps Today" value="8,432" unit="steps" trend="+8%" />
        <MetricCard icon={Activity} title="Active Minutes" value="47" unit="min" trend="+15%" />
        <MetricCard icon={Target} title="Weekly Goal" value="78" unit="%" trend="+5%" />
      </div>

      <div className="grid lg:grid-cols-2 gap-10 mb-14">
        <WeeklyCaloriesChart />
        <MonthlyProgressChart />
      </div>

      <RecentActivities />
      <Achievements />

    </div>
  );
}