import { useState } from "react";
import WorkoutStats from "../components/workout/WorkoutStats";
import WorkoutCard from "../components/workout/WorkoutCard";
import CreateWorkoutCard from "../components/workout/CreateWorkoutCard";
import ActiveWorkout from "../components/workout/ActiveWorkout";
import WorkoutHistory from "../components/workout/WorkoutHistory";
import WgerWorkoutList from "../components/workout/WgerWorkoutList";

export default function Workout() {
  const [activeTab, setActiveTab] = useState("plans");

  return (
    <div className="px-6 md:px-12 py-10 bg-[#F5F3ED] min-h-screen">

      {/* Header */}
      <h1 className="text-5xl font-bold text-[#2E3D2F]">
        Workouts
      </h1>
      <p className="text-[#6B7C6B] mt-4">
        Track and manage your exercise routines
      </p>

      <WorkoutStats />

      {/* Tabs */}
      <div className="flex flex-wrap gap-4 mt-10">
        {["plans", "active", "history"].map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-6 py-3 rounded-2xl font-medium transition ${
              activeTab === tab
                ? "bg-[#7A9B7E] text-white"
                : "bg-[#F1F5F1] text-[#2E3D2F]"
            }`}
          >
            {tab === "plans" && "Workout Plans"}
            {tab === "active" && "Active Workout"}
            {tab === "history" && "History"}
          </button>
        ))}
      </div>

      {/* Content */}
      <div className="mt-12">

        {/* WORKOUT PLANS TAB */}
        {activeTab === "plans" && (
          <>
            {/* Custom Designed Plans */}
            <div className="grid lg:grid-cols-2 gap-10 mb-16">
              <WorkoutCard
                title="Strength Builder"
                description="Build muscle and increase strength"
                duration="45 min"
                calories="380 kcal"
                exercises="8 exercises"
                level="Intermediate"
                image="https://images.unsplash.com/photo-1599058917765-a780eda07a3e"
              />

              <WorkoutCard
                title="Yoga Flow"
                description="Improve flexibility and balance"
                duration="40 min"
                calories="180 kcal"
                exercises="10 exercises"
                level="Beginner"
                image="https://images.unsplash.com/photo-1506126613408-eca07ce68773"
              />

              <WorkoutCard
                title="Cardio Blast"
                description="High-intensity cardio workout"
                duration="30 min"
                calories="420 kcal"
                exercises="6 exercises"
                level="Advanced"
                image="https://images.unsplash.com/photo-1549060279-7e168fcee0c2"
              />

              <CreateWorkoutCard />
            </div>

            {/* Divider */}
            <div className="mb-6">
              <h2 className="text-2xl font-semibold text-[#2E3D2F]">
                Explore More Exercises
              </h2>
              <p className="text-[#6B7C6B] mt-2">
                Powered by WGER API
              </p>
            </div>

            <WgerWorkoutList />
          </>
        )}

        {activeTab === "active" && <ActiveWorkout />}

        {activeTab === "history" && <WorkoutHistory />}
      </div>
    </div>
  );
}