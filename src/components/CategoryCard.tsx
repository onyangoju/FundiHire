
import { LucideIcon } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

interface CategoryCardProps {
  title: string;
  icon: LucideIcon;
  count: number;
  color: string;
  onClick?: () => void;
}

const CategoryCard = ({ title, icon: Icon, count, color, onClick }: CategoryCardProps) => {
  return (
    <Card onClick={onClick} className="hover:shadow-md transition-all duration-300 hover:scale-[1.02] cursor-pointer border-gray-200">
      <CardContent className="p-4 text-center">
        <div className={`w-12 h-12 ${color} rounded-lg flex items-center justify-center mx-auto mb-3`}>
          <Icon className="h-6 w-6 text-white" />
        </div>
        <h3 className="font-semibold text-gray-900 text-sm">{title}</h3>
        <p className="text-xs text-gray-500 mt-1">{count} providers</p>
      </CardContent>
    </Card>
  );
};

export default CategoryCard;
