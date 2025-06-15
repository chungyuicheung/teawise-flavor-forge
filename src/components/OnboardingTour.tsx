
import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { X, ChevronLeft, ChevronRight, Lightbulb, Camera, Users, BarChart3 } from "lucide-react";

interface OnboardingTourProps {
  onClose: () => void;
}

const OnboardingTour = ({ onClose }: OnboardingTourProps) => {
  const [currentStep, setCurrentStep] = useState(0);

  const tourSteps = [
    {
      title: "歡迎使用 TeaWise",
      description: "您的專屬茶品品飲筆記應用，讓每一次品茶都成為美好回憶",
      icon: <Lightbulb className="w-8 h-8 text-amber-600" />,
      content: (
        <div className="space-y-4">
          <p className="text-amber-700">TeaWise 是一個專為茶友設計的數位品飲筆記應用，幫助您：</p>
          <ul className="space-y-2 text-sm text-amber-600">
            <li>• 記錄每次品茶的詳細資訊</li>
            <li>• 建立個人茶品收藏庫</li>
            <li>• 分析品飲習慣與偏好</li>
            <li>• 與茶友分享交流心得</li>
          </ul>
        </div>
      )
    },
    {
      title: "智慧品飲記錄",
      description: "一鍵記錄茶品資訊、沖泡參數和品飲感受",
      icon: <Camera className="w-8 h-8 text-amber-600" />,
      content: (
        <div className="space-y-4">
          <p className="text-amber-700">點擊右上角的「新增品飲記錄」按鈕開始：</p>
          <div className="bg-amber-50 p-4 rounded-lg space-y-3">
            <div className="flex items-center space-x-2">
              <Badge variant="outline" className="border-amber-300">茶品資訊</Badge>
              <span className="text-sm text-amber-600">茶名、產地、年份</span>
            </div>
            <div className="flex items-center space-x-2">
              <Badge variant="outline" className="border-amber-300">沖泡參數</Badge>
              <span className="text-sm text-amber-600">水溫、茶量、浸泡時間</span>
            </div>
            <div className="flex items-center space-x-2">
              <Badge variant="outline" className="border-amber-300">風味描述</Badge>
              <span className="text-sm text-amber-600">香氣、滋味、評分</span>
            </div>
          </div>
        </div>
      )
    },
    {
      title: "茶品收藏管理",
      description: "建立您的專屬茶品資料庫，輕鬆管理收藏",
      icon: <BarChart3 className="w-8 h-8 text-amber-600" />,
      content: (
        <div className="space-y-4">
          <p className="text-amber-700">在「茶品收藏」頁面，您可以：</p>
          <div className="grid grid-cols-2 gap-3">
            <div className="bg-amber-50 p-3 rounded-lg">
              <h4 className="font-medium text-amber-800 mb-1">搜尋篩選</h4>
              <p className="text-xs text-amber-600">依茶類、產地、年份分類</p>
            </div>
            <div className="bg-amber-50 p-3 rounded-lg">
              <h4 className="font-medium text-amber-800 mb-1">詳細資訊</h4>
              <p className="text-xs text-amber-600">查看完整品飲歷史</p>
            </div>
            <div className="bg-amber-50 p-3 rounded-lg">
              <h4 className="font-medium text-amber-800 mb-1">評分統計</h4>
              <p className="text-xs text-amber-600">分析個人偏好趨勢</p>
            </div>
            <div className="bg-amber-50 p-3 rounded-lg">
              <h4 className="font-medium text-amber-800 mb-1">庫存追蹤</h4>
              <p className="text-xs text-amber-600">記錄剩餘茶量狀態</p>
            </div>
          </div>
        </div>
      )
    },
    {
      title: "茶友圈交流",
      description: "與志同道合的茶友分享品飲心得",
      icon: <Users className="w-8 h-8 text-amber-600" />,
      content: (
        <div className="space-y-4">
          <p className="text-amber-700">即將推出的社群功能：</p>
          <div className="space-y-3">
            <div className="flex items-center space-x-3 p-3 bg-gradient-to-r from-amber-50 to-orange-50 rounded-lg">
              <div className="w-2 h-2 bg-amber-400 rounded-full"></div>
              <span className="text-sm text-amber-700">盲測訓練挑戰</span>
            </div>
            <div className="flex items-center space-x-3 p-3 bg-gradient-to-r from-amber-50 to-orange-50 rounded-lg">
              <div className="w-2 h-2 bg-amber-400 rounded-full"></div>
              <span className="text-sm text-amber-700">茶樣交換配對</span>
            </div>
            <div className="flex items-center space-x-3 p-3 bg-gradient-to-r from-amber-50 to-orange-50 rounded-lg">
              <div className="w-2 h-2 bg-amber-400 rounded-full"></div>
              <span className="text-sm text-amber-700">風味地圖探索</span>
            </div>
          </div>
        </div>
      )
    }
  ];

  const nextStep = () => {
    if (currentStep < tourSteps.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const currentTourStep = tourSteps[currentStep];

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <Card className="w-full max-w-lg bg-white/95 backdrop-blur-sm border-amber-200 shadow-2xl">
        <CardHeader className="relative">
          <button
            onClick={onClose}
            className="absolute right-4 top-4 p-1 hover:bg-amber-100 rounded-full transition-colors"
          >
            <X className="w-4 h-4 text-amber-600" />
          </button>
          <div className="flex items-center space-x-3">
            {currentTourStep.icon}
            <div>
              <CardTitle className="text-amber-800">{currentTourStep.title}</CardTitle>
              <CardDescription className="text-amber-600">
                {currentTourStep.description}
              </CardDescription>
            </div>
          </div>
        </CardHeader>
        
        <CardContent className="space-y-6">
          {currentTourStep.content}
          
          {/* Progress indicator */}
          <div className="flex justify-center space-x-2">
            {tourSteps.map((_, index) => (
              <div
                key={index}
                className={`w-2 h-2 rounded-full transition-colors ${
                  index === currentStep ? 'bg-amber-500' : 'bg-amber-200'
                }`}
              />
            ))}
          </div>
          
          {/* Navigation buttons */}
          <div className="flex justify-between items-center pt-4">
            <Button
              variant="outline"
              onClick={prevStep}
              disabled={currentStep === 0}
              className="border-amber-200 text-amber-700 hover:bg-amber-50"
            >
              <ChevronLeft className="w-4 h-4 mr-1" />
              上一步
            </Button>
            
            <span className="text-sm text-amber-600">
              {currentStep + 1} / {tourSteps.length}
            </span>
            
            {currentStep === tourSteps.length - 1 ? (
              <Button
                onClick={onClose}
                className="bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-700 hover:to-orange-700 text-white"
              >
                開始使用
              </Button>
            ) : (
              <Button
                onClick={nextStep}
                className="bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-700 hover:to-orange-700 text-white"
              >
                下一步
                <ChevronRight className="w-4 h-4 ml-1" />
              </Button>
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default OnboardingTour;
