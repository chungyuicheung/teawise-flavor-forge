
import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Calendar, Clock, Thermometer, Scale, Droplets, TrendingUp, BarChart3, Activity } from "lucide-react";

const BrewingHistory = () => {
  const [selectedPeriod, setSelectedPeriod] = useState("week");

  const brewingHistory = [
    {
      id: 1,
      teaName: "大益7542",
      teaType: "普洱生茶",
      date: "2024-06-14",
      time: "15:30",
      weight: 7,
      waterTemp: 95,
      steepTime: 30,
      rounds: 3,
      rating: 4.5,
      notes: "第三泡達到最佳狀態，甜香明顯",
      flavorTags: ["甘甜", "回甘", "煙香"]
    },
    {
      id: 2,
      teaName: "鐵觀音",
      teaType: "烏龍茶",
      date: "2024-06-13",
      time: "10:15",
      weight: 8,
      waterTemp: 100,
      steepTime: 45,
      rounds: 5,
      rating: 4.2,
      notes: "高溫沖泡，香氣更加濃郁",
      flavorTags: ["花香", "清香", "甘醇"]
    },
    {
      id: 3,
      teaName: "正山小種",
      teaType: "紅茶",
      date: "2024-06-12",
      time: "16:45",
      weight: 6,
      waterTemp: 90,
      steepTime: 25,
      rounds: 4,
      rating: 4.7,
      notes: "煙熏味平衡，蜜香突出",
      flavorTags: ["煙熏", "蜜香", "醇厚"]
    },
    {
      id: 4,
      teaName: "西湖龍井",
      teaType: "綠茶",
      date: "2024-06-11",
      time: "09:20",
      weight: 5,
      waterTemp: 80,
      steepTime: 20,
      rounds: 2,
      rating: 4.0,
      notes: "低溫短時間，保持鮮嫩感",
      flavorTags: ["清香", "鮮爽", "淡雅"]
    },
    {
      id: 5,
      teaName: "白毫銀針",
      teaType: "白茶",
      date: "2024-06-10",
      time: "14:00",
      weight: 4,
      waterTemp: 85,
      steepTime: 60,
      rounds: 6,
      rating: 4.8,
      notes: "長時間浸泡，毫香更顯著",
      flavorTags: ["毫香", "甘甜", "清淡"]
    }
  ];

  const brewingStats = {
    totalSessions: 156,
    averageRating: 4.3,
    favoriteTemperature: 95,
    averageRounds: 4.2,
    mostUsedTea: "大益7542",
    bestRatedTea: "白毫銀針"
  };

  const weeklyBrewingChart = [
    { day: "週一", count: 2, avgRating: 4.2 },
    { day: "週二", count: 3, avgRating: 4.1 },
    { day: "週三", count: 1, avgRating: 4.5 },
    { day: "週四", count: 4, avgRating: 4.3 },
    { day: "週五", count: 2, avgRating: 4.4 },
    { day: "週六", count: 3, avgRating: 4.6 },
    { day: "週日", count: 2, avgRating: 4.2 }
  ];

  return (
    <div className="space-y-6">
      <Tabs value={selectedPeriod} onValueChange={setSelectedPeriod}>
        <TabsList className="grid w-full grid-cols-3 bg-white/60">
          <TabsTrigger value="week">本週</TabsTrigger>
          <TabsTrigger value="month">本月</TabsTrigger>
          <TabsTrigger value="all">全部</TabsTrigger>
        </TabsList>

        <TabsContent value={selectedPeriod} className="space-y-6">
          {/* Statistics Overview */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Card className="bg-white/70 backdrop-blur-sm border-amber-200">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium text-amber-800">總沖泡次數</CardTitle>
                <Activity className="h-4 w-4 text-amber-600" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-amber-900">{brewingStats.totalSessions}</div>
                <p className="text-xs text-amber-600">累計沖泡記錄</p>
              </CardContent>
            </Card>

            <Card className="bg-white/70 backdrop-blur-sm border-amber-200">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium text-amber-800">平均評分</CardTitle>
                <TrendingUp className="h-4 w-4 text-amber-600" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-amber-900">{brewingStats.averageRating}</div>
                <p className="text-xs text-amber-600">滿分 5.0 分</p>
              </CardContent>
            </Card>

            <Card className="bg-white/70 backdrop-blur-sm border-amber-200">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium text-amber-800">最愛茶品</CardTitle>
                <BarChart3 className="h-4 w-4 text-amber-600" />
              </CardHeader>
              <CardContent>
                <div className="text-lg font-bold text-amber-900">{brewingStats.mostUsedTea}</div>
                <p className="text-xs text-amber-600">沖泡頻率最高</p>
              </CardContent>
            </Card>
          </div>

          {/* Weekly Brewing Chart */}
          <Card className="bg-white/70 backdrop-blur-sm border-amber-200">
            <CardHeader>
              <CardTitle className="text-amber-800">沖泡頻率分析</CardTitle>
              <CardDescription className="text-amber-600">每日沖泡次數與評分趨勢</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-7 gap-2">
                {weeklyBrewingChart.map((data, index) => (
                  <div key={index} className="text-center">
                    <div className="text-xs text-amber-600 mb-2">{data.day}</div>
                    <div 
                      className="bg-gradient-to-t from-amber-400 to-amber-200 rounded-t mx-auto"
                      style={{ 
                        height: `${data.count * 20 + 20}px`, 
                        width: '24px' 
                      }}
                    />
                    <div className="text-xs text-amber-800 mt-1 font-medium">{data.count}</div>
                    <div className="text-xs text-amber-600">★{data.avgRating}</div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Brewing History List */}
          <Card className="bg-white/70 backdrop-blur-sm border-amber-200">
            <CardHeader>
              <CardTitle className="text-amber-800">沖泡記錄</CardTitle>
              <CardDescription className="text-amber-600">詳細的沖泡參數與品飲筆記</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {brewingHistory.map(record => (
                  <div key={record.id} className="p-4 bg-amber-50/50 rounded-lg border border-amber-100">
                    <div className="flex items-center justify-between mb-3">
                      <div>
                        <h3 className="font-semibold text-amber-900">{record.teaName}</h3>
                        <div className="flex items-center space-x-4 text-sm text-amber-700">
                          <span className="flex items-center">
                            <Calendar className="w-3 h-3 mr-1" />
                            {record.date}
                          </span>
                          <span className="flex items-center">
                            <Clock className="w-3 h-3 mr-1" />
                            {record.time}
                          </span>
                          <Badge variant="secondary" className="bg-amber-100 text-amber-800">
                            {record.teaType}
                          </Badge>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="flex items-center text-amber-600">
                          {"★".repeat(Math.floor(record.rating))}
                          <span className="ml-1 text-sm">({record.rating})</span>
                        </div>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-5 gap-3 mb-3">
                      <div className="flex items-center text-sm text-amber-700">
                        <Scale className="w-4 h-4 mr-1" />
                        <span>{record.weight}g</span>
                      </div>
                      <div className="flex items-center text-sm text-amber-700">
                        <Thermometer className="w-4 h-4 mr-1" />
                        <span>{record.waterTemp}°C</span>
                      </div>
                      <div className="flex items-center text-sm text-amber-700">
                        <Clock className="w-4 h-4 mr-1" />
                        <span>{record.steepTime}秒</span>
                      </div>
                      <div className="flex items-center text-sm text-amber-700">
                        <Droplets className="w-4 h-4 mr-1" />
                        <span>{record.rounds}泡</span>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <div className="flex flex-wrap gap-1">
                        {record.flavorTags.map(tag => (
                          <Badge key={tag} variant="outline" className="text-xs border-amber-300 text-amber-700">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                      <p className="text-sm text-amber-600">{record.notes}</p>
                    </div>

                    <div className="flex justify-end mt-3">
                      <Button size="sm" variant="outline" className="border-amber-300 text-amber-700 hover:bg-amber-50">
                        詳細記錄
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default BrewingHistory;
