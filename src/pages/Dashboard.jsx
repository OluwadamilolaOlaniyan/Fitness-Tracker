const Dashboard = () => {
  return (
    <div className="space-y-8">

      {/* Header */}
      <div>
        <h1 className="text-4xl font-bold text-gray-800">Dashboard</h1>
        <p className="text-gray-500 mt-2">
          Welcome back! Here's your fitness overview.
        </p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

        {/* Calories */}
        <div className="bg-white rounded-xl shadow p-6">
          <h3 className="text-gray-500 text-sm">Calories Burned</h3>
          <p className="text-3xl font-bold text-green-700 mt-2">
            0 <span className="text-lg text-gray-500">kcal</span>
          </p>
        </div>

        {/* Steps */}
        <div className="bg-white rounded-xl shadow p-6">
          <h3 className="text-gray-500 text-sm">Steps Today</h3>
          <p className="text-3xl font-bold text-green-700 mt-2">
            0 <span className="text-lg text-gray-500">steps</span>
          </p>
        </div>

        {/* Active Minutes */}
        <div className="bg-white rounded-xl shadow p-6">
          <h3 className="text-gray-500 text-sm">Active Minutes</h3>
          <p className="text-3xl font-bold text-green-700 mt-2">
            0 <span className="text-lg text-gray-500">min</span>
          </p>
        </div>

        {/* Weekly Goal */}
        <div className="bg-white rounded-xl shadow p-6">
          <h3 className="text-gray-500 text-sm">Weekly Goal</h3>
          <p className="text-3xl font-bold text-green-700 mt-2">
            0 <span className="text-lg text-gray-500">%</span>
          </p>
        </div>

      </div>
    </div>
  );
};

export default Dashboard;
