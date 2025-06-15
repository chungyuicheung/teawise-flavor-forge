
import { useState, useRef, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface FlavorWheelProps {
  selectedFlavors: string[];
  onFlavorChange: (flavors: string[]) => void;
}

const FlavorWheel = ({ selectedFlavors, onFlavorChange }: FlavorWheelProps) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [hoveredSegment, setHoveredSegment] = useState<string | null>(null);

  const flavorCategories = [
    {
      name: "花香",
      color: "#FF6B9D",
      subFlavors: ["茉莉", "桂花", "玫瑰", "蘭花", "栀子"]
    },
    {
      name: "果香",
      color: "#FF9F40",
      subFlavors: ["柑橘", "蘋果", "桃子", "梨子", "熱帶水果"]
    },
    {
      name: "蜜香",
      color: "#FFCD56",
      subFlavors: ["龍眼蜜", "荔枝蜜", "花蜜", "蜂蜜", "甘甜"]
    },
    {
      name: "木香",
      color: "#8B4513",
      subFlavors: ["檀木", "樟木", "松木", "竹香", "木質"]
    },
    {
      name: "焙火",
      color: "#D2691E",
      subFlavors: ["炭火", "烘焙", "焦糖", "堅果", "烟熏"]
    },
    {
      name: "陳香",
      color: "#708090",
      subFlavors: ["倉味", "陳韻", "老味", "濕倉", "乾倉"]
    },
    {
      name: "草本",
      color: "#90EE90",
      subFlavors: ["青草", "薄荷", "藥草", "清香", "鮮葉"]
    },
    {
      name: "礦物",
      color: "#4682B4",
      subFlavors: ["岩石", "泥土", "海水", "鹽分", "金屬"]
    }
  ];

  const drawFlavorWheel = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const centerX = canvas.width / 2;
    const centerY = canvas.height / 2;
    const radius = Math.min(centerX, centerY) - 20;
    const innerRadius = radius * 0.4;

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Draw segments
    flavorCategories.forEach((category, index) => {
      const startAngle = (index * 2 * Math.PI) / flavorCategories.length;
      const endAngle = ((index + 1) * 2 * Math.PI) / flavorCategories.length;
      const midAngle = (startAngle + endAngle) / 2;

      // Draw outer ring (main category)
      ctx.beginPath();
      ctx.arc(centerX, centerY, radius, startAngle, endAngle);
      ctx.arc(centerX, centerY, innerRadius, endAngle, startAngle, true);
      ctx.closePath();

      const isSelected = selectedFlavors.includes(category.name);
      const isHovered = hoveredSegment === category.name;
      
      ctx.fillStyle = isSelected || isHovered ? category.color : category.color + '80';
      ctx.fill();
      ctx.strokeStyle = '#fff';
      ctx.lineWidth = 2;
      ctx.stroke();

      // Draw category label
      const labelX = centerX + Math.cos(midAngle) * (radius - innerRadius) / 2 * 1.3;
      const labelY = centerY + Math.sin(midAngle) * (radius - innerRadius) / 2 * 1.3;
      
      ctx.fillStyle = '#2D1B14';
      ctx.font = 'bold 12px Arial';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillText(category.name, labelX, labelY);

      // Draw inner segments (sub-flavors)
      category.subFlavors.forEach((subFlavor, subIndex) => {
        const subStartAngle = startAngle + (subIndex * (endAngle - startAngle)) / category.subFlavors.length;
        const subEndAngle = startAngle + ((subIndex + 1) * (endAngle - startAngle)) / category.subFlavors.length;
        const subMidAngle = (subStartAngle + subEndAngle) / 2;

        ctx.beginPath();
        ctx.arc(centerX, centerY, innerRadius, subStartAngle, subEndAngle);
        ctx.arc(centerX, centerY, innerRadius * 0.5, subEndAngle, subStartAngle, true);
        ctx.closePath();

        const isSubSelected = selectedFlavors.includes(subFlavor);
        const isSubHovered = hoveredSegment === subFlavor;
        
        ctx.fillStyle = isSubSelected || isSubHovered ? category.color : category.color + '40';
        ctx.fill();
        ctx.strokeStyle = '#fff';
        ctx.lineWidth = 1;
        ctx.stroke();

        // Draw sub-flavor label (only if segment is large enough)
        if ((endAngle - startAngle) / category.subFlavors.length > 0.3) {
          const subLabelX = centerX + Math.cos(subMidAngle) * innerRadius * 0.75;
          const subLabelY = centerY + Math.sin(subMidAngle) * innerRadius * 0.75;
          
          ctx.fillStyle = '#2D1B14';
          ctx.font = '10px Arial';
          ctx.textAlign = 'center';
          ctx.textBaseline = 'middle';
          ctx.fillText(subFlavor, subLabelX, subLabelY);
        }
      });
    });

    // Draw center circle
    ctx.beginPath();
    ctx.arc(centerX, centerY, innerRadius * 0.5, 0, 2 * Math.PI);
    ctx.fillStyle = '#FFF8DC';
    ctx.fill();
    ctx.strokeStyle = '#D2B48C';
    ctx.lineWidth = 2;
    ctx.stroke();

    // Draw center text
    ctx.fillStyle = '#8B4513';
    ctx.font = 'bold 14px Arial';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText('風味輪', centerX, centerY);
  };

  const getSegmentFromPoint = (x: number, y: number): string | null => {
    const canvas = canvasRef.current;
    if (!canvas) return null;

    const rect = canvas.getBoundingClientRect();
    const clickX = x - rect.left;
    const clickY = y - rect.top;
    
    const centerX = canvas.width / 2;
    const centerY = canvas.height / 2;
    const radius = Math.min(centerX, centerY) - 20;
    const innerRadius = radius * 0.4;

    const dx = clickX - centerX;
    const dy = clickY - centerY;
    const distance = Math.sqrt(dx * dx + dy * dy);
    const angle = Math.atan2(dy, dx);
    const normalizedAngle = angle < 0 ? angle + 2 * Math.PI : angle;

    if (distance < innerRadius * 0.5) return null;

    const segmentIndex = Math.floor((normalizedAngle / (2 * Math.PI)) * flavorCategories.length);
    const category = flavorCategories[segmentIndex];

    if (distance > innerRadius && distance < radius) {
      // Outer ring - main category
      return category.name;
    } else if (distance > innerRadius * 0.5 && distance < innerRadius) {
      // Inner ring - sub-flavors
      const categoryStartAngle = (segmentIndex * 2 * Math.PI) / flavorCategories.length;
      const categoryEndAngle = ((segmentIndex + 1) * 2 * Math.PI) / flavorCategories.length;
      const relativeAngle = normalizedAngle - categoryStartAngle;
      const categoryAngleRange = categoryEndAngle - categoryStartAngle;
      
      const subFlavorIndex = Math.floor((relativeAngle / categoryAngleRange) * category.subFlavors.length);
      return category.subFlavors[subFlavorIndex];
    }

    return null;
  };

  const handleCanvasClick = (event: React.MouseEvent<HTMLCanvasElement>) => {
    const segment = getSegmentFromPoint(event.clientX, event.clientY);
    if (segment) {
      const newFlavors = selectedFlavors.includes(segment)
        ? selectedFlavors.filter(f => f !== segment)
        : [...selectedFlavors, segment];
      onFlavorChange(newFlavors);
    }
  };

  const handleCanvasMouseMove = (event: React.MouseEvent<HTMLCanvasElement>) => {
    const segment = getSegmentFromPoint(event.clientX, event.clientY);
    setHoveredSegment(segment);
  };

  const handleCanvasMouseLeave = () => {
    setHoveredSegment(null);
  };

  useEffect(() => {
    drawFlavorWheel();
  }, [selectedFlavors, hoveredSegment]);

  return (
    <Card className="bg-white/70 backdrop-blur-sm border-amber-200">
      <CardHeader>
        <CardTitle className="text-lg text-amber-800">互動式風味輪</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex justify-center">
          <canvas
            ref={canvasRef}
            width={300}
            height={300}
            className="cursor-pointer border border-amber-200 rounded-lg bg-gradient-to-br from-amber-50 to-orange-50"
            onClick={handleCanvasClick}
            onMouseMove={handleCanvasMouseMove}
            onMouseLeave={handleCanvasMouseLeave}
          />
        </div>
        <div className="mt-4 text-center">
          <p className="text-sm text-amber-600">
            點擊風味輪選擇風味特徵
          </p>
          {hoveredSegment && (
            <p className="text-sm font-medium text-amber-800 mt-1">
              懸停: {hoveredSegment}
            </p>
          )}
          {selectedFlavors.length > 0 && (
            <div className="mt-2">
              <p className="text-sm text-amber-700 mb-1">已選擇風味:</p>
              <div className="flex flex-wrap gap-1 justify-center">
                {selectedFlavors.map(flavor => (
                  <span key={flavor} className="px-2 py-1 bg-amber-100 text-amber-800 rounded-full text-xs">
                    {flavor}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default FlavorWheel;
