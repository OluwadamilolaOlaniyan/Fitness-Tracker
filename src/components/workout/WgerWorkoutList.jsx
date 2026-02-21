import { useEffect, useState } from "react";
import { fetchExercises } from "../../services/wgerApi";

export default function WgerWorkoutList() {
  const [exercises, setExercises] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadExercises = async () => {
      try {
        const data = await fetchExercises();
        setExercises(data);
      } catch (err) {
        setError("Failed to load exercises");
      } finally {
        setLoading(false);
      }
    };

    loadExercises();
  }, []);

  if (loading)
    return <p className="text-[#6B7C6B] mt-10">Loading exercises...</p>;

  if (error)
    return <p className="text-red-500 mt-10">{error}</p>;

  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
      {exercises.map((exercise) => (
        <div
          key={exercise.id}
          className="bg-white p-6 rounded-3xl border border-[#E6E2DA] shadow-sm hover:shadow-md transition"
        >
          <h3 className="text-xl font-semibold text-[#2E3D2F] mb-3">
            {exercise.name}
          </h3>

          <div
            className="text-sm text-[#6B7C6B] line-clamp-3"
            dangerouslySetInnerHTML={{ __html: exercise.description }}
          />
        </div>
      ))}
    </div>
  );
}