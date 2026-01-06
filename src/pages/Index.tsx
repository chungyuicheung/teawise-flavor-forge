import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Progress } from "@/components/ui/progress";
import { Plus, Leaf, Clock, Thermometer, Scale, BookOpen, Users, BarChart3, HelpCircle } from "lucide-react";
import TeaRecordForm from "@/components/TeaRecordForm";
import FlavorWheel from "@/components/FlavorWheel";
import TeaCollection from "@/components/TeaCollection";
import BrewingHistory from "@/components/BrewingHistory";
import OnboardingTour from "@/components/OnboardingTour";
import BottomNav from "@/components/BottomNav";
import { useTeaData } from "@/hooks/useTeaData";

const Index = () => {
  const [activeTab, setActiveTab] = useState("dashboard");
  const [showNewRecord, setShowNewRecord] = useState(false);
  const [showOnboarding, setShowOnboarding] = useState(false);
  
  const { recentTeas, teaCollection, stats, addNewTea } = useTeaData();

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-sm border-b border-amber-200 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-3 md:py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2 md:space-x-3">
              <div className="w-9 h-9 md:w-10 md:h-10 bg-gradient-to-br from-amber-600 to-orange-600 rounded-full flex items-center justify-center shrink-0">
                <Leaf className="w-5 h-5 md:w-6 md:h-6 text-white" />
              </div>
              <div>
                <h1 className="text-xl md:text-2xl font-bold bg-gradient-to-r from-amber-800 to-orange-700 bg-clip-text text-transparent">
                  TeaWise
                </h1>
                <p className="hidden sm:block text-xs md:text-sm text-amber-600">茶品品飲筆記</p>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              {/* Onboarding Button for mobile */}
              <Button 
                variant="outline"
                size="icon"
                onClick={() => setShowOnboarding(true)}
                className="border-amber-300 text-amber-700 hover:bg-amber-50 md:hidden"
              >
                <HelpCircle className="w-5 h-5" />
                <span className="sr-only">新手引導</span>
              </Button>
              {/* Onboarding Button for desktop */}
              <Button 
                variant="outline"
                onClick={() => setShowOnboarding(true)}
                className="border-amber-300 text-amber-700 hover:bg-amber-50 hidden md:flex"
              >
                <HelpCircle className="w-4 h-4 mr-2" />
                新手引導
              </Button>
              
              {/* New Record Button for mobile */}
              <Button 
                size="icon"
                onClick={() => setShowNewRecord(true)}
                className="bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-700 hover:to-orange-700 text-white shadow-lg md:hidden"
              >
                <Plus className="w-5 h-5" />
                <span className="sr-only">新增品飲記錄</span>
              </Button>
              {/* New Record Button for desktop */}
              <Button 
                onClick={() => setShowNewRecord(true)}
                className="bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-700 hover:to-orange-700 text-white shadow-lg hidden md:flex"
              >
                <Plus className="w-4 h-4 mr-2" />
                新增品飲記錄
              </Button>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8 pb-24 md:pb-8">
        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
          <TabsList className="hidden md:grid w-full grid-cols-4 bg-white/60 backdrop-blur-sm border-amber-200">
            <TabsTrigger value="dashboard" className="data-[state=active]:bg-amber-100">
              <BarChart3 className="w-4 h-4 mr-2" />
              儀表板
            </TabsTrigger>
            <TabsTrigger value="collection" className="data-[state=active]:bg-amber-100">
              <BookOpen className="w-4 h-4 mr-2" />
              茶品收藏
            </TabsTrigger>
            <TabsTrigger value="brewing" className="data-[state=active]:bg-amber-100">
              <Clock className="w-4 h-4 mr-2" />
              沖泡記錄
            </TabsTrigger>
            <TabsTrigger value="community" className="data-[state=active]:bg-amber-100">
              <Users className="w-4 h-4 mr-2" />
              茶友圈
            </TabsTrigger>
          </TabsList>

          <TabsContent value="dashboard" className="space-y-6">
            {/* Stats Overview */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <Card className="bg-white/70 backdrop-blur-sm border-amber-200">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 p-4 pb-2">
                  <CardTitle className="text-sm font-medium text-amber-800">茶品收藏</CardTitle>
                  <Leaf className="h-4 w-4 text-amber-600" />
                </CardHeader>
                <CardContent className="p-4 pt-0">
                  <div className="text-2xl font-bold text-amber-900">{stats.totalTeas}</div>
                  <p className="text-xs text-amber-600">種不同茶品</p>
                </CardContent>
              </Card>
              
              <Card className="bg-white/70 backdrop-blur-sm border-amber-200">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 p-4 pb-2">
                  <CardTitle className="text-sm font-medium text-amber-800">沖泡次數</CardTitle>
                  <Clock className="h-4 w-4 text-amber-600" />
                </CardHeader>
                <CardContent className="p-4 pt-0">
                  <div className="text-2xl font-bold text-amber-900">{stats.brewingSessions}</div>
                  <p className="text-xs text-amber-600">總沖泡記錄</p>
                </CardContent>
              </Card>
              
              <Card className="bg-white/70 backdrop-blur-sm border-amber-200">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 p-4 pb-2">
                  <CardTitle className="text-sm font-medium text-amber-800">偏好茶類</CardTitle>
                  <Thermometer className="h-4 w-4 text-amber-600" />
                </CardHeader>
                <CardContent className="p-4 pt-0">
                  <div className="text-lg font-bold text-amber-900">{stats.favoriteType}</div>
                  <p className="text-xs text-amber-600">最常品飲</p>
                </CardContent>
              </Card>
              
              <Card className="bg-white/70 backdrop-blur-sm border-amber-200">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 p-4 pb-2">
                  <CardTitle className="text-sm font-medium text-amber-800">平均評分</CardTitle>
                  <Scale className="h-4 w-4 text-amber-600" />
                </CardHeader>
                <CardContent className="p-4 pt-0">
                  <div className="text-2xl font-bold text-amber-900">{stats.averageRating}</div>
                  <p className="text-xs text-amber-600">滿分5分</p>
                </CardContent>
              </Card>
            </div>

            {/* Recent Teas */}
            <Card className="bg-white/70 backdrop-blur-sm border-amber-200">
              <CardHeader className="p-4 md:p-6">
                <CardTitle className="text-amber-800">最近品飲</CardTitle>
                <CardDescription className="text-amber-600">您最近品飲的茶品記錄</CardDescription>
              </CardHeader>
              <CardContent className="p-4 md:p-6 pt-0">
                <div className="space-y-4">
                  {recentTeas.map((tea) => (
                    <div key={tea.id} className="flex items-start justify-between p-3 sm:p-4 bg-amber-50/50 rounded-lg border border-amber-100">
                      <div className="flex-1">
                        <div className="flex items-center space-x-3 mb-2">
                          <h3 className="font-semibold text-amber-900">{tea.name}</h3>
                          <Badge variant="secondary" className="bg-amber-100 text-amber-800">
                            {tea.type}
                          </Badge>
                        </div>
                        <div className="text-sm text-amber-700 space-y-2">
                          <p>{tea.origin} · {tea.year}年</p>
                          <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs sm:text-sm">
                            <span>沖泡 {tea.brewCount} 次</span>
                            <span>最後品飲：{tea.lastBrewed}</span>
                            <div className="flex items-center">
                              <span className="mr-1 sm:mr-2">評分：</span>
                              <div className="flex items-center text-amber-500">
                                {"★".repeat(Math.floor(tea.rating))}
                                {"☆".repeat(5 - Math.floor(tea.rating))}
                                <span className="ml-1 text-xs text-amber-700">({tea.rating})</span>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="flex flex-wrap gap-1 mt-2">
                          {tea.flavorProfile.map((flavor, idx) => (
                            <Badge key={idx} variant="outline" className="text-xs border-amber-300 text-amber-700">
                              {flavor}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="collection">
            <TeaCollection teaCollection={teaCollection} />
          </TabsContent>

          <TabsContent value="brewing">
            <BrewingHistory />
          </TabsContent>

          <TabsContent value="community">
            <Card className="bg-white/70 backdrop-blur-sm border-amber-200">
              <CardHeader>
                <CardTitle className="text-amber-800">茶友圈</CardTitle>
                <CardDescription className="text-amber-600">與茶友分享品飲心得</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-center py-12">
                  <Users className="w-16 h-16 text-amber-400 mx-auto mb-4" />
                  <h3 className="text-lg font-semibold text-amber-800 mb-2">即將推出</h3>
                  <p className="text-amber-600">茶友交流、盲測訓練、茶樣交換功能正在開發中</p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>

      {/* Tea Record Form Modal */}
      {showNewRecord && (
        <TeaRecordForm 
          onClose={() => setShowNewRecord(false)} 
          onSave={addNewTea}
        />
      )}

      {/* Onboarding Tour Modal */}
      {showOnboarding && (
        <OnboardingTour onClose={() => setShowOnboarding(false)} />
      )}

      <BottomNav activeTab={activeTab} setActiveTab={setActiveTab} />
    </div>
  );
};

export default Index;
