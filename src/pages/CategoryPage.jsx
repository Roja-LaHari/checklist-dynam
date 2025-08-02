import { useParams, Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ChecklistItem } from "@/components/ChecklistItem";
import { ProgressBar } from "@/components/ProgressBar";
import { getClassById, getCategoryById } from "@/data/checklistData";
import { useChecklistProgress } from "@/hooks/useChecklistProgress";

export const CategoryPage = () => {
  const { classId, categoryId } = useParams();
  const { toggleItem, isItemCompleted, getCategoryProgress } = useChecklistProgress();
  
  const classData = classId ? getClassById(classId) : null;
  const categoryData = classId && categoryId ? getCategoryById(classId, categoryId) : null;

  if (!classData || !categoryData) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Category Not Found</h1>
          <Link to="/">
            <Button>Return Home</Button>
          </Link>
        </div>
      </div>
    );
  }

  const progress = getCategoryProgress(categoryData.items);

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto py-8 px-4 max-w-4xl">
        <div className="mb-6">
          <Link to={`/class/${classId}`}>
            <Button variant="outline" className="mb-4">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to {classData.name}
            </Button>
          </Link>
          
          <div className="mb-6">
            <h1 className="text-3xl font-bold mb-2">{categoryData.name}</h1>
            <p className="text-muted-foreground">
              {classData.name} → {categoryData.name}
            </p>
          </div>

          <ProgressBar 
            completed={progress.completed} 
            total={progress.total}
            className="mb-8"
          />
        </div>

        <div className="space-y-4">
          {categoryData.items.map((item) => (
            <ChecklistItem
              key={item.id}
              item={item}
              isCompleted={isItemCompleted(item.id)}
              onToggle={toggleItem}
            />
          ))}
        </div>

        {progress.completed === progress.total && progress.total > 0 && (
          <div className="mt-8 p-6 bg-green-50 border border-green-200 rounded-lg text-center">
            <h3 className="text-lg font-semibold text-green-800 mb-2">
              🎉 Congratulations!
            </h3>
            <p className="text-green-700">
              You've completed all items in the {categoryData.name} category!
            </p>
          </div>
        )}
      </div>
    </div>
  );
};