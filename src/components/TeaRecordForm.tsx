import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { X, Camera, Thermometer, Clock, Scale, Droplets } from "lucide-react";
import FlavorWheel from "./FlavorWheel";
import { useToast } from "@/hooks/use-toast";
import { TeaRecord } from "@/types/tea";

interface TeaRecordFormProps {
  onClose: () => void;
  onSave: (record: TeaRecord) => void;
}

const TeaRecordForm = ({ onClose, onSave }: TeaRecordFormProps) => {
  const { toast } = useToast();
  const [formData, setFormData] = useState<Omit<TeaRecord, 'flavorTags'> & { flavorTags: string[] }>({
    name: "",
    type: "",
    origin: "",
    year: "",
    grade: "",
    weight: 7,
    waterTemp: 95,
    steepTime: 30,
    rounds: 1,
    rating: 4,
    notes: "",
    flavorTags: [],
    brewingMethod: ""
  });

  const [selectedFlavors, setSelectedFlavors] = useState<string[]>([]);

  const teaTypes = [
    "綠茶", "白茶", "黃茶", "青茶(烏龍)", "紅茶", "黑茶(普洱)", "花茶", "其他"
  ];

  const brewingMethods = [
    "蓋碗", "紫砂壺", "玻璃壺", "飄逸杯", "茶濾杯", "工夫茶", "其他"
  ];

  const commonFlavors = [
    "甘甜", "回甘", "生津", "苦澀", "醇厚", "清香", "花香", "果香", 
    "蜜香", "煙熏", "陳香", "木香", "草本", "礦物質", "海苔", "焙火"
  ];

  const handleFlavorToggle = (flavor: string) => {
    setFormData(prev => {
      const newFlavorTags = prev.flavorTags.includes(flavor)
        ? prev.flavorTags.filter(f => f !== flavor)
        : [...prev.flavorTags, flavor];
      return { ...prev, flavorTags: newFlavorTags };
    });
  };

  const handleSubmit = () => {
    if (!formData.name || !formData.type) {
      toast({
        title: "請填寫必要資訊",
        description: "茶品名稱和茶類為必填項目",
        variant: "destructive"
      });
      return;
    }

    onSave(formData);
    
    toast({
      title: "品飲記錄已保存",
      description: `${formData.name} 的品飲記錄已成功保存`,
    });
    
    onClose();
  };

  return (
    <Dialog open={true} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto bg-gradient-to-br from-amber-50 to-orange-50">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-amber-800 flex items-center">
            <Scale className="w-6 h-6 mr-2" />
            新增品飲記錄
          </DialogTitle>
          <DialogDescription className="sr-only">
            填寫表單以新增一筆新的茶品品飲記錄。
          </DialogDescription>
        </DialogHeader>

        <Tabs defaultValue="basic" className="space-y-6">
          <TabsList className="grid w-full grid-cols-3 bg-white/60">
            <TabsTrigger value="basic">基本資訊</TabsTrigger>
            <TabsTrigger value="brewing">沖泡參數</TabsTrigger>
            <TabsTrigger value="tasting">品飲感受</TabsTrigger>
          </TabsList>

          <TabsContent value="basic" className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="name" className="text-amber-800">茶品名稱 *</Label>
                <Input
                  id="name"
                  value={formData.name}
                  onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                  placeholder="例：大益7542"
                  className="border-amber-200 focus:border-amber-400"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="type" className="text-amber-800">茶類 *</Label>
                <Select value={formData.type} onValueChange={(value) => setFormData(prev => ({ ...prev, type: value }))}>
                  <SelectTrigger className="border-amber-200 focus:border-amber-400">
                    <SelectValue placeholder="選擇茶類" />
                  </SelectTrigger>
                  <SelectContent>
                    {teaTypes.map(type => (
                      <SelectItem key={type} value={type}>{type}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="origin" className="text-amber-800">產地</Label>
                <Input
                  id="origin"
                  value={formData.origin}
                  onChange={(e) => setFormData(prev => ({ ...prev, origin: e.target.value }))}
                  placeholder="例：雲南勐海"
                  className="border-amber-200 focus:border-amber-400"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="year" className="text-amber-800">年份</Label>
                <Input
                  id="year"
                  value={formData.year}
                  onChange={(e) => setFormData(prev => ({ ...prev, year: e.target.value }))}
                  placeholder="例：2018"
                  className="border-amber-200 focus:border-amber-400"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="grade" className="text-amber-800">等級/批次</Label>
                <Input
                  id="grade"
                  value={formData.grade}
                  onChange={(e) => setFormData(prev => ({ ...prev, grade: e.target.value }))}
                  placeholder="例：特級、A級"
                  className="border-amber-200 focus:border-amber-400"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="method" className="text-amber-800">沖泡器具</Label>
                <Select value={formData.brewingMethod} onValueChange={(value) => setFormData(prev => ({ ...prev, brewingMethod: value }))}>
                  <SelectTrigger className="border-amber-200 focus:border-amber-400">
                    <SelectValue placeholder="選擇器具" />
                  </SelectTrigger>
                  <SelectContent>
                    {brewingMethods.map(method => (
                      <SelectItem key={method} value={method}>{method}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>

            <Card className="bg-white/50 border-amber-200">
              <CardHeader>
                <CardTitle className="text-lg text-amber-800 flex items-center">
                  <Camera className="w-5 h-5 mr-2" />
                  茶湯色澤
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-center p-8 border-2 border-dashed border-amber-300 rounded-lg bg-amber-50/50">
                  <div className="text-center">
                    <Camera className="w-12 h-12 text-amber-400 mx-auto mb-2" />
                    <p className="text-amber-600">點擊拍攝茶湯</p>
                    <p className="text-sm text-amber-500 mt-1">AI將自動分析色澤特徵</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="brewing" className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="bg-white/50 border-amber-200">
                <CardHeader>
                  <CardTitle className="text-lg text-amber-800 flex items-center">
                    <Scale className="w-5 h-5 mr-2" />
                    茶葉用量
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <Label className="text-amber-700">重量 (克)</Label>
                      <span className="text-lg font-semibold text-amber-900">{formData.weight}g</span>
                    </div>
                    <Slider
                      value={[formData.weight]}
                      onValueChange={(value) => setFormData(prev => ({ ...prev, weight: value[0] }))}
                      min={3}
                      max={15}
                      step={0.5}
                      className="w-full"
                    />
                    <div className="flex justify-between text-xs text-amber-600">
                      <span>3g</span>
                      <span>15g</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-white/50 border-amber-200">
                <CardHeader>
                  <CardTitle className="text-lg text-amber-800 flex items-center">
                    <Thermometer className="w-5 h-5 mr-2" />
                    水溫控制
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <Label className="text-amber-700">溫度 (°C)</Label>
                      <span className="text-lg font-semibold text-amber-900">{formData.waterTemp}°C</span>
                    </div>
                    <Slider
                      value={[formData.waterTemp]}
                      onValueChange={(value) => setFormData(prev => ({ ...prev, waterTemp: value[0] }))}
                      min={70}
                      max={100}
                      step={5}
                      className="w-full"
                    />
                    <div className="flex justify-between text-xs text-amber-600">
                      <span>70°C</span>
                      <span>100°C</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-white/50 border-amber-200">
                <CardHeader>
                  <CardTitle className="text-lg text-amber-800 flex items-center">
                    <Clock className="w-5 h-5 mr-2" />
                    浸泡時間
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <Label className="text-amber-700">時間 (秒)</Label>
                      <span className="text-lg font-semibold text-amber-900">{formData.steepTime}秒</span>
                    </div>
                    <Slider
                      value={[formData.steepTime]}
                      onValueChange={(value) => setFormData(prev => ({ ...prev, steepTime: value[0] }))}
                      min={10}
                      max={300}
                      step={10}
                      className="w-full"
                    />
                    <div className="flex justify-between text-xs text-amber-600">
                      <span>10秒</span>
                      <span>5分鐘</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-white/50 border-amber-200">
                <CardHeader>
                  <CardTitle className="text-lg text-amber-800 flex items-center">
                    <Droplets className="w-5 h-5 mr-2" />
                    沖泡輪數
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <Label className="text-amber-700">輪數</Label>
                      <span className="text-lg font-semibold text-amber-900">第 {formData.rounds} 泡</span>
                    </div>
                    <Slider
                      value={[formData.rounds]}
                      onValueChange={(value) => setFormData(prev => ({ ...prev, rounds: value[0] }))}
                      min={1}
                      max={20}
                      step={1}
                      className="w-full"
                    />
                    <div className="flex justify-between text-xs text-amber-600">
                      <span>第1泡</span>
                      <span>第20泡</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="tasting" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div className="space-y-4">
                <Card className="bg-white/50 border-amber-200">
                  <CardHeader>
                    <CardTitle className="text-lg text-amber-800">整體評分</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <Label className="text-amber-700">評分</Label>
                        <span className="text-lg font-semibold text-amber-900">
                          {"★".repeat(Math.floor(formData.rating))} ({formData.rating}/5)
                        </span>
                      </div>
                      <Slider
                        value={[formData.rating]}
                        onValueChange={(value) => setFormData(prev => ({ ...prev, rating: value[0] }))}
                        min={1}
                        max={5}
                        step={0.5}
                        className="w-full"
                      />
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-white/50 border-amber-200">
                  <CardHeader>
                    <CardTitle className="text-lg text-amber-800">風味標籤</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {commonFlavors.map(flavor => (
                        <Badge
                          key={flavor}
                          variant={formData.flavorTags.includes(flavor) ? "default" : "outline"}
                          className={`cursor-pointer transition-colors ${
                            formData.flavorTags.includes(flavor)
                              ? "bg-amber-600 text-white hover:bg-amber-700"
                              : "border-amber-300 text-amber-700 hover:bg-amber-100"
                          }`}
                          onClick={() => handleFlavorToggle(flavor)}
                        >
                          {flavor}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                <div className="space-y-2">
                  <Label htmlFor="notes" className="text-amber-800">品飲筆記</Label>
                  <Textarea
                    id="notes"
                    value={formData.notes}
                    onChange={(e) => setFormData(prev => ({ ...prev, notes: e.target.value }))}
                    placeholder="記錄您的品飲感受、香氣變化、口感層次等..."
                    rows={6}
                    className="border-amber-200 focus:border-amber-400"
                  />
                </div>
              </div>

              <div>
                <FlavorWheel 
                  selectedFlavors={formData.flavorTags} 
                  onFlavorChange={(flavors) => setFormData(prev => ({ ...prev, flavorTags: flavors }))} 
                />
              </div>
            </div>
          </TabsContent>
        </Tabs>

        <div className="flex justify-end space-x-4 pt-4 border-t border-amber-200">
          <Button variant="outline" onClick={onClose} className="border-amber-300 text-amber-700 hover:bg-amber-50">
            取消
          </Button>
          <Button onClick={handleSubmit} className="bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-700 hover:to-orange-700 text-white">
            保存記錄
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default TeaRecordForm;
