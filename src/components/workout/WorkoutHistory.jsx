import { ChevronRight, Dumbbell } from "lucide-react";
import { collection, getDocs, query, orderBy } from "firebase/firestore";
import { db } from "../../firebase";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../context/AuthContext";

export default function WorkoutHistory() {
  const { user } = useContext(AuthContext);
  const [history, setHistory] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchHistory = async () => {
      try {
        if (!user) return;

        const q = query(
          collection(db, "users", user.uid, "workouts"),
          orderBy("date", "desc")
        );

        const snapshot = await getDocs(q);

        const workouts = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));

        setHistory(workouts);
      } catch (error) {
        console.error("Error fetching workouts:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchHistory();
  }, [user]);

  const formatDate = (timestamp) => {
    if (!timestamp) return "Unknown date";

    const date = timestamp.toDate
      ? timestamp.toDate()
      : new Date(timestamp);

    return date.toLocaleDateString();
  };

  if (loading) {
    return (
      <div className="bg-white rounded-3xl shadow-sm border border-[#E6E2DA] p-8">
        <p className="text-[#6B7C6B]">Loading workout history...</p>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-3xl shadow-sm border border-[#E6E2DA]">

      <div className="p-8 border-b border-[#E6E2DA]">
        <h2 className="text-3xl font-bold text-[#2E3D2F]">
          Workout History
        </h2>
      </div>

      {history.length === 0 && (
        <div className="p-8 text-center text-[#6B7C6B]">
          No workouts logged yet.
        </div>
      )}

      {history.map((item) => (
        <div
          key={item.id}
          className="flex justify-between items-center p-8 border-b last:border-none border-[#E6E2DA] hover:bg-[#F9F8F4] transition"
        >
          <div className="flex items-center gap-6">
            <div className="w-14 h-14 bg-[#F1F5F1] rounded-2xl flex items-center justify-center">
              <Dumbbell className="text-[#7A9B7E]" />
            </div>

            <div>
              <h3 className="text-xl font-semibold text-[#2E3D2F]">
                {item.name || "Workout"}
              </h3>
              <p className="text-[#6B7C6B]">
                {formatDate(item.date)}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-10 text-[#2E3D2F]">
            <div>
              <p className="text-[#6B7C6B] text-sm">Duration</p>
              <p className="font-semibold">
                {item.duration || "N/A"}
              </p>
            </div>

            <div>
              <p className="text-[#6B7C6B] text-sm">Calories</p>
              <p className="font-semibold">
                {item.calories || 0} kcal
              </p>
            </div>

            <ChevronRight className="text-[#7A9B7E]" />
          </div>
        </div>
      ))}
    </div>
  );
}