
import { TrendingUp } from "lucide-react";

export default function MetricCard({ icon: Icon, title, value, unit, trend }) {
  return (
    <div className="bg-white rounded-3xl p-8 shadow-sm border border-[#E6E2DA] 
                    hover:shadow-lg transition duration-300 animate-fadeIn">

      <div className="flex justify-between items-start mb-6">
        <div className="w-14 h-14 bg-[#E4E9E2] rounded-2xl flex items-center justify-center">
          <Icon className="text-[#7A9B7E]" size={26} />
        </div>

        <div className="flex items-center text-[#7A9B7E] text-sm font-medium">
          <TrendingUp size={16} className="mr-1" />
          {trend}
        </div>
      </div>

      <p className="text-[#6B7C6B] text-lg mb-2">
        {title}
      </p>

      <div className="flex items-end gap-2">
        <h2 className="text-[42px] font-bold text-[#2E3D2F] leading-none">
          {value}
        </h2>
        <span className="text-[#6B7C6B] mb-1 text-sm">
          {unit}
        </span>
      </div>
    </div>
  );
}