import { Checkbox } from "@/components/ui/checkbox";
import { Card, CardContent } from "@/components/ui/card";

export const ChecklistItem = ({ item, isCompleted, onToggle }) => {
  return (
    <Card className={`transition-all duration-300 ${isCompleted ? 'bg-green-50 border-green-200' : ''}`}>
      <CardContent className="p-4">
        <div className="flex items-start space-x-3">
          <Checkbox
            checked={isCompleted}
            onCheckedChange={() => onToggle(item.id)}
            className="mt-1"
          />
          <div className="flex-1 space-y-1">
            <h3 className={`font-medium transition-colors ${isCompleted ? 'text-green-700 line-through' : 'text-foreground'}`}>
              {item.title}
            </h3>
            {item.description && (
              <p className={`text-sm transition-colors ${isCompleted ? 'text-green-600' : 'text-muted-foreground'}`}>
                {item.description}
              </p>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};