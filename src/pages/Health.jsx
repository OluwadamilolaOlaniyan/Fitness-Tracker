import { useState } from "react";
import HealthStats from "../components/health/HealthStats";
import WeeklyHeartRate from "../components/health/WeeklyHeartRate";
import SleepTracking from "../components/health/SleepTracking";
import NutritionMacros from "../components/health/NutritionMacros";
import WellnessOverview from "../components/health/WellnessOverview";

export default function Health() {
  const [activeTab, setActiveTab] = useState("overview");

  return (
    <div className="px-6 md:px-12 py-10 bg-[#F5F3ED] min-h-screen">

      {/* Header */}
      <h1 className="text-5xl font-bold text-[#2E3D2F]">
        Health
      </h1>
      <p className="text-[#6B7C6B] mt-4">
        Monitor your wellness and nutrition
      </p>

      {/* Top Stats */}
      <HealthStats />

      {/* Tabs */}
      <div className="flex flex-wrap gap-4 mt-10">
        {["overview", "nutrition", "wellness"].map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-6 py-3 rounded-2xl font-medium transition ${
              activeTab === tab
                ? "bg-[#7A9B7E] text-white"
                : "bg-[#F1F5F1] text-[#2E3D2F]"
            }`}
          >
            {tab === "overview" && "Overview"}
            {tab === "nutrition" && "Nutrition"}
            {tab === "wellness" && "Wellness"}
          </button>
        ))}
      </div>

      {/* TAB CONTENT */}
      <div className="mt-12">

        {/* OVERVIEW TAB */}
        {activeTab === "overview" && (
          <>
            <div className="mb-12">
              <WeeklyHeartRate />
            </div>

            <SleepTracking />
          </>
        )}

        {/* NUTRITION TAB */}
        {activeTab === "nutrition" && (
          <NutritionMacros />
        )}

        {/* WELLNESS TAB */}
        {activeTab === "wellness" && (
          <WellnessOverview />
        )}

      </div>
    </div>
  );
}