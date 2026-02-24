import { useEffect, useState, useContext } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../firebase";
import { AuthContext } from "../../context/AuthContext";

export default function WorkoutStats() {
  const { user } = useContext(AuthContext);
  const [totalWorkouts, setTotalWorkouts] = useState(0);
  const [totalCalories, setTotalCalories] = useState(0);
  const [weeklyWorkouts, setWeeklyWorkouts] = useState(0);

  useEffect(() => {
    const fetchStats = async () => {
      if (!user) return;

      const snapshot = await getDocs(
        collection(db, "users", user.uid, "workouts")
      );

      const workouts = snapshot.docs.map(doc => doc.data());

      // Total workouts
      setTotalWorkouts(workouts.length);

      // Total calories
      const caloriesSum = workouts.reduce(
        (sum, workout) => sum + (workout.calories || 0),
        0
      );
      setTotalCalories(caloriesSum);

      // Weekly workouts
      const oneWeekAgo = new Date();
      oneWeekAgo.setDate(oneWeekAgo.getDate() - 7);

      const weekly = workouts.filter(workout => {
        if (!workout.createdAt) return false;
        const workoutDate = workout.createdAt.toDate
          ? workout.createdAt.toDate()
          : new Date(workout.createdAt);
        return workoutDate >= oneWeekAgo;
      });

      setWeeklyWorkouts(weekly.length);
    };

    fetchStats();
  }, [user]);

  return (
    <div className="grid md:grid-cols-3 gap-6 mt-10">
      <StatCard title="Total Workouts" value={totalWorkouts} />
      <StatCard title="Total Calories" value={totalCalories} />
      <StatCard title="This Week" value={weeklyWorkouts} />
    </div>
  );
}

function StatCard({ title, value }) {
  return (
    <div className="bg-white p-6 rounded-2xl shadow border border-[#E6E2DA]">
      <p className="text-[#6B7C6B] text-sm">{title}</p>
      <h3 className="text-3xl font-bold text-[#2E3D2F] mt-2">
        {value}
      </h3>
    </div>
  );
}