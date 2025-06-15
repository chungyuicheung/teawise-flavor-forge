
import { BarChart3, BookOpen, Clock, Users } from "lucide-react";

interface BottomNavProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

const navItems = [
  { value: "dashboard", label: "儀表板", icon: BarChart3 },
  { value: "collection", label: "茶品收藏", icon: BookOpen },
  { value: "brewing", label: "沖泡記錄", icon: Clock },
  { value: "community", label: "茶友圈", icon: Users },
];

const BottomNav = ({ activeTab, setActiveTab }: BottomNavProps) => {
  return (
    <div className="fixed md:hidden bottom-0 left-0 right-0 bg-white/80 backdrop-blur-sm border-t border-amber-200 z-40">
      <div className="flex justify-around items-center h-16">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = activeTab === item.value;
          return (
            <button
              key={item.value}
              onClick={() => setActiveTab(item.value)}
              className={`flex flex-col items-center justify-center space-y-1 w-full h-full transition-colors ${
                isActive
                  ? "text-amber-700 bg-amber-50"
                  : "text-amber-600/70 hover:bg-amber-50/50"
              }`}
            >
              <Icon className="w-5 h-5" />
              <span className="text-xs font-medium">{item.label}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default BottomNav;
