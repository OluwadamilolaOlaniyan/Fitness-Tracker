import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { db } from "../../firebase";

export default function WorkoutCard({
  title,
  description,
  duration,
  calories,
  exercises,
  level,
  image,
}) {
  const { user } = useContext(AuthContext);

  const handleStartWorkout = async () => {
    if (!user) return;

    try {
      await addDoc(collection(db, "users", user.uid, "workouts"), {
        title,
        duration: parseInt(duration),
        calories: parseInt(calories),
        createdAt: serverTimestamp(),
      });

      alert("Workout started successfully 💪");
    } catch (error) {
      console.error("Error saving workout:", error);
    }
  };

  return (
    <div className="bg-white rounded-3xl shadow border border-[#E6E2DA] overflow-hidden">
      <img src={image} alt={title} className="h-56 w-full object-cover" />

      <div className="p-6">
        <h3 className="text-2xl font-bold text-[#2E3D2F] mb-2">
          {title}
        </h3>

        <p className="text-[#6B7C6B] mb-4">{description}</p>

        <div className="flex justify-between text-sm text-[#2E3D2F] mb-6">
          <span>{duration}</span>
          <span>{calories}</span>
          <span>{exercises}</span>
          <span>{level}</span>
        </div>

        <button
          onClick={handleStartWorkout}
          className="w-full bg-[#7A9B7E] text-white py-3 rounded-2xl hover:opacity-90 transition"
        >
          Start Workout
        </button>
      </div>
    </div>
  );
}