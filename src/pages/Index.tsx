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

const Index = () => {
  const [activeTab, setActiveTab] = useState("dashboard");
  const [showNewRecord, setShowNewRecord] = useState(false);
  const [showOnboarding, setShowOnboarding] = useState(false);

  const recentTeas = [
    {
      id: 1,
      name: "大益7542",
      type: "普洱生茶",
      origin: "云南勐海",
      year: "2018",
      rating: 4.5,
      brewCount: 8,
      lastBrewed: "2024-06-14",
      flavorProfile: ["甘甜", "回甘", "微苦"]
    },
    {
      id: 2,
      name: "铁观音",
      type: "乌龙茶",
      origin: "福建安溪",
      year: "2023",
      rating: 4.2,
      brewCount: 5,
      lastBrewed: "2024-06-13",
      flavorProfile: ["花香", "清香", "甘醇"]
    },
    {
      id: 3,
      name: "正山小种",
      type: "红茶",
      origin: "福建武夷山",
      year: "2023",
      rating: 4.7,
      brewCount: 12,
      lastBrewed: "2024-06-12",
      flavorProfile: ["烟熏", "蜜香", "醇厚"]
    }
  ];

  const stats = {
    totalTeas: 24,
    brewingSessions: 156,
    favoriteType: "普洱茶",
    averageRating: 4.3
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-sm border-b border-amber-200 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-br from-amber-600 to-orange-600 rounded-full flex items-center justify-center">
                <Leaf className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-bold bg-gradient-to-r from-amber-800 to-orange-700 bg-clip-text text-transparent">
                  TeaWise
                </h1>
                <p className="text-sm text-amber-600">茶品品飲筆記</p>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <Button 
                variant="outline"
                onClick={() => setShowOnboarding(true)}
                className="border-amber-300 text-amber-700 hover:bg-amber-50"
              >
                <HelpCircle className="w-4 h-4 mr-2" />
                新手引導
              </Button>
              <Button 
                onClick={() => setShowNewRecord(true)}
                className="bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-700 hover:to-orange-700 text-white shadow-lg"
              >
                <Plus className="w-4 h-4 mr-2" />
                新增品飲記錄
              </Button>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
          <TabsList className="grid w-full grid-cols-4 bg-white/60 backdrop-blur-sm border border-amber-200">
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
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <Card className="bg-white/70 backdrop-blur-sm border-amber-200">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium text-amber-800">茶品收藏</CardTitle>
                  <Leaf className="h-4 w-4 text-amber-600" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-amber-900">{stats.totalTeas}</div>
                  <p className="text-xs text-amber-600">種不同茶品</p>
                </CardContent>
              </Card>
              
              <Card className="bg-white/70 backdrop-blur-sm border-amber-200">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium text-amber-800">沖泡次數</CardTitle>
                  <Clock className="h-4 w-4 text-amber-600" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-amber-900">{stats.brewingSessions}</div>
                  <p className="text-xs text-amber-600">總沖泡記錄</p>
                </CardContent>
              </Card>
              
              <Card className="bg-white/70 backdrop-blur-sm border-amber-200">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium text-amber-800">偏好茶類</CardTitle>
                  <Thermometer className="h-4 w-4 text-amber-600" />
                </CardHeader>
                <CardContent>
                  <div className="text-lg font-bold text-amber-900">{stats.favoriteType}</div>
                  <p className="text-xs text-amber-600">最常品飲</p>
                </CardContent>
              </Card>
              
              <Card className="bg-white/70 backdrop-blur-sm border-amber-200">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium text-amber-800">平均評分</CardTitle>
                  <Scale className="h-4 w-4 text-amber-600" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-amber-900">{stats.averageRating}</div>
                  <p className="text-xs text-amber-600">滿分5分</p>
                </CardContent>
              </Card>
            </div>

            {/* Recent Teas */}
            <Card className="bg-white/70 backdrop-blur-sm border-amber-200">
              <CardHeader>
                <CardTitle className="text-amber-800">最近品飲</CardTitle>
                <CardDescription className="text-amber-600">您最近品飲的茶品記錄</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentTeas.map((tea) => (
                    <div key={tea.id} className="flex items-center justify-between p-4 bg-amber-50/50 rounded-lg border border-amber-100">
                      <div className="flex-1">
                        <div className="flex items-center space-x-3 mb-2">
                          <h3 className="font-semibold text-amber-900">{tea.name}</h3>
                          <Badge variant="secondary" className="bg-amber-100 text-amber-800">
                            {tea.type}
                          </Badge>
                        </div>
                        <div className="text-sm text-amber-700 space-y-1">
                          <p>{tea.origin} · {tea.year}年</p>
                          <div className="flex items-center space-x-4">
                            <span>沖泡 {tea.brewCount} 次</span>
                            <span>最後品飲：{tea.lastBrewed}</span>
                            <div className="flex items-center">
                              <span className="mr-2">評分：</span>
                              <div className="flex items-center">
                                {"★".repeat(Math.floor(tea.rating))}
                                <span className="ml-1 text-xs">({tea.rating})</span>
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
            <TeaCollection />
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
        <TeaRecordForm onClose={() => setShowNewRecord(false)} />
      )}

      {/* Onboarding Tour Modal */}
      {showOnboarding && (
        <OnboardingTour onClose={() => setShowOnboarding(false)} />
      )}
    </div>
  );
};

export default Index;
