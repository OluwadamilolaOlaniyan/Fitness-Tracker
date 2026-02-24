export const fetchExercises = async () => {
  const response = await fetch(
    "https://wger.de/api/v2/exercise/"
  );

  if (!response.ok) {
    throw new Error("Failed to fetch exercises");
  }

  const data = await response.json();

  return data.results; 
};