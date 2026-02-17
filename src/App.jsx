import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Dashboard from "./pages/Dashboard";
import Workouts from "./pages/Workouts";
import Health from "./pages/Health";

function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />

      <div className="p-6">
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/workout" element={<Workouts />} />
          <Route path="/health" element={<Health />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
