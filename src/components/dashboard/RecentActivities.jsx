export default function RecentActivities() {
  const activities = [
    { name: "Running", time: "2 hours ago", duration: "32 min", kcal: "380 kcal" },
    { name: "Yoga", time: "Yesterday", duration: "45 min", kcal: "180 kcal" },
    { name: "Cycling", time: "2 days ago", duration: "50 min", kcal: "420 kcal" },
    { name: "Strength Training", time: "3 days ago", duration: "40 min", kcal: "350 kcal" },
  ];

  return (
    <div className="bg-white rounded-3xl p-10 shadow-sm border border-[#E6E2DA] animate-fadeIn">

      <h2 className="text-2xl font-semibold text-[#2E3D2F] mb-8">
        Recent Activities
      </h2>

      <div className="space-y-6">
        {activities.map((activity, index) => (
          <div
            key={index}
            className="bg-[#F1F5F1] rounded-2xl p-6 flex flex-col sm:flex-row 
                       justify-between items-start sm:items-center gap-4 
                       hover:shadow-md transition duration-300"
          >
            <div>
              <h3 className="text-lg font-semibold text-[#2E3D2F]">
                {activity.name}
              </h3>
              <p className="text-[#6B7C6B] text-sm">
                {activity.time}
              </p>
            </div>

            <div className="text-left sm:text-right">
              <p className="text-lg font-semibold text-[#2E3D2F]">
                {activity.duration}
              </p>
              <p className="text-[#6B7C6B] text-sm">
                {activity.kcal}
              </p>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
}