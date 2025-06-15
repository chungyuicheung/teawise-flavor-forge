import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Search, Filter, Plus, Star, Calendar, MapPin } from "lucide-react";
import { Tea } from "@/types/tea";

interface TeaCollectionProps {
  teaCollection: Tea[];
}

const TeaCollection = ({ teaCollection }: TeaCollectionProps) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filterType, setFilterType] = useState("all");
  const [sortBy, setSortBy] = useState("name");

  const teaTypes = ["all", "普洱生茶", "普洱熟茶", "綠茶", "白茶", "烏龍茶", "紅茶", "黑茶"];
  const sortOptions = [
    { value: "name", label: "茶品名稱" },
    { value: "rating", label: "評分" },
    { value: "brewCount", label: "沖泡次數" },
    { value: "dateAdded", label: "收藏日期" },
    { value: "price", label: "價格" }
  ];

  const filteredTeas = teaCollection
    .filter(tea => 
      tea.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      tea.origin.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .filter(tea => filterType === "all" || tea.type === filterType)
    .sort((a, b) => {
      switch (sortBy) {
        case "rating":
          return b.rating - a.rating;
        case "brewCount":
          return b.brewCount - a.brewCount;
        case "dateAdded":
          return new Date(b.dateAdded).getTime() - new Date(a.dateAdded).getTime();
        case "price":
          return b.price - a.price;
        default:
          return a.name.localeCompare(b.name);
      }
    });

  return (
    <div className="space-y-6">
      {/* Search and Filter Bar */}
      <Card className="bg-white/70 backdrop-blur-sm border-amber-200">
        <CardContent className="p-4">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-amber-500 w-4 h-4" />
              <Input
                placeholder="搜尋茶品名稱或產地..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 border-amber-200 focus:border-amber-400"
              />
            </div>
            
            <div className="flex gap-2">
              <Select value={filterType} onValueChange={setFilterType}>
                <SelectTrigger className="w-32 border-amber-200">
                  <Filter className="w-4 h-4 mr-2" />
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {teaTypes.map(type => (
                    <SelectItem key={type} value={type}>
                      {type === "all" ? "全部茶類" : type}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>

              <Select value={sortBy} onValueChange={setSortBy}>
                <SelectTrigger className="w-32 border-amber-200">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {sortOptions.map(option => (
                    <SelectItem key={option.value} value={option.value}>
                      {option.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Tea Collection Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredTeas.map(tea => (
          <Card key={tea.id} className="bg-white/70 backdrop-blur-sm border-amber-200 hover:shadow-lg transition-shadow">
            <CardHeader className="pb-3">
              <div className="flex justify-between items-start">
                <div>
                  <CardTitle className="text-lg text-amber-900">{tea.name}</CardTitle>
                  <CardDescription className="text-amber-600">{tea.type}</CardDescription>
                </div>
                <div className="flex items-center space-x-1 text-amber-600">
                  <Star className="w-4 h-4 fill-current" />
                  <span className="text-sm font-medium">{tea.rating}</span>
                </div>
              </div>
            </CardHeader>
            
            <CardContent className="space-y-4">
              <div className="aspect-square bg-gradient-to-br from-amber-100 to-orange-100 rounded-lg flex items-center justify-center">
                <div className="text-center p-4">
                  <div className="w-16 h-16 bg-amber-200 rounded-full mx-auto mb-2 flex items-center justify-center">
                    <span className="text-2xl">🍃</span>
                  </div>
                  <p className="text-sm text-amber-700">茶品圖片</p>
                </div>
              </div>

              <div className="space-y-2">
                <div className="flex items-center text-sm text-amber-700">
                  <MapPin className="w-4 h-4 mr-1" />
                  <span>{tea.origin} · {tea.year}年</span>
                </div>
                
                <div className="flex items-center text-sm text-amber-700">
                  <Calendar className="w-4 h-4 mr-1" />
                  <span>沖泡 {tea.brewCount} 次</span>
                </div>

                <div className="flex flex-wrap gap-1">
                  {tea.flavorProfile.map(flavor => (
                    <Badge key={flavor} variant="outline" className="text-xs border-amber-300 text-amber-700">
                      {flavor}
                    </Badge>
                  ))}
                </div>

                <p className="text-sm text-amber-600 line-clamp-2">{tea.notes}</p>

                <div className="flex justify-between items-center pt-2">
                  <span className="text-lg font-semibold text-amber-900">¥{tea.price}</span>
                  <Button size="sm" variant="outline" className="border-amber-300 text-amber-700 hover:bg-amber-50">
                    查看詳情
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {filteredTeas.length === 0 && (
        <Card className="bg-white/70 backdrop-blur-sm border-amber-200">
          <CardContent className="p-12 text-center">
            <Search className="w-16 h-16 text-amber-300 mx-auto mb-4" />
            <h3 className="text-lg font-semibold text-amber-800 mb-2">未找到相關茶品</h3>
            <p className="text-amber-600">請嘗試調整搜尋條件或篩選選項</p>
          </CardContent>
        </Card>
      )}
    </div>
  );
};

export default TeaCollection;
