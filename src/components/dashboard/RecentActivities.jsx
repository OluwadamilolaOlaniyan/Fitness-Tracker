export default function RecentActivities({ activities = [] }) {
  return (
    <div className="bg-white p-8 rounded-3xl shadow mb-14">
      <h2 className="text-2xl font-bold mb-6 text-[#273e29]">
        Recent Activities
      </h2>

      {activities.length === 0 ? (
        <div className="text-center py-12">
          <p className="text-[#6B7C6B] text-lg">
            No activity yet.
          </p>
          <p className="text-sm text-gray-400 mt-2">
            Start your first workout 💪
          </p>
        </div>
      ) : (
        activities.map((activity, index) => (
          <div
            key={index}
            className="flex justify-between items-center py-4 border-b last:border-none"
          >
            <div>
              <p className="font-semibold">{activity.title}</p>
              <p className="text-sm text-gray-500">
                {activity.duration} min • {activity.calories} kcal
              </p>
            </div>
          </div>
        ))
      )}
    </div>
  );
}