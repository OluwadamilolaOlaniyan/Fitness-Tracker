import { useContext, useEffect, useState } from "react";
import { Flame, Footprints, Activity, Target } from "lucide-react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase";
import { AuthContext } from "../context/AuthContext";

import MetricCard from "../components/dashboard/MetricCard";
import WeeklyCaloriesChart from "../components/dashboard/WeeklyCaloriesChart";
import MonthlyProgressChart from "../components/dashboard/MonthlyProgressChart";
import RecentActivities from "../components/dashboard/RecentActivities";
import Achievements from "../components/dashboard/Achievements";

export default function Dashboard() {
  const { user } = useContext(AuthContext);

  const [workouts, setWorkouts] = useState([]);

  useEffect(() => {
    const fetchWorkouts = async () => {
      if (!user) return;

      const snapshot = await getDocs(
        collection(db, "users", user.uid, "workouts")
      );

      const data = snapshot.docs.map(doc => doc.data());
      setWorkouts(data);
    };

    fetchWorkouts();
  }, [user]);

  const totalCalories = workouts.reduce(
    (sum, w) => sum + (Number(w.calories) || 0),
    0
  );

  const totalMinutes = workouts.reduce(
    (sum, w) => sum + (parseInt(w.duration) || 0),
    0
  );

  const totalSteps = workouts.reduce(
    (sum, w) => sum + (Number(w.steps) || 0),
    0
  );

  const weeklyData = [0,0,0,0,0,0,0]; // later we’ll calculate properly
  const monthlyData = [0,0,0,0];

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
        <MetricCard icon={Flame} title="Calories Burned" value={totalCalories} unit="kcal" trend="0%" />
        <MetricCard icon={Footprints} title="Steps Today" value={totalSteps} unit="steps" trend="0%" />
        <MetricCard icon={Activity} title="Active Minutes" value={totalMinutes} unit="min" trend="0%" />
        <MetricCard icon={Target} title="Weekly Goal" value="0" unit="%" trend="0%" />
      </div>

      <div className="grid lg:grid-cols-2 gap-10 mb-14">
        <WeeklyCaloriesChart data={weeklyData} />
        <MonthlyProgressChart data={monthlyData} />
      </div>

      <RecentActivities activities={workouts} />
      <Achievements workoutCount={workouts.length} />
    </div>
  );
}