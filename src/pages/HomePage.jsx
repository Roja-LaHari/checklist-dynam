import { Link } from "react-router-dom";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ProgressBar } from "@/components/ProgressBar";
import { checklistData } from "@/data/checklistData";
import { useChecklistProgress } from "@/hooks/useChecklistProgress";

export const HomePage = () => {
  const { getClassProgress } = useChecklistProgress();

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto py-8 px-4">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold mb-4">Dynamic Checklist System</h1>
          <p className="text-xl text-muted-foreground">
            Track your progress across different classes and categories
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {checklistData.classes.map((classItem) => {
            const progress = getClassProgress(classItem.categories);
            
            return (
              <Card key={classItem.id} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-2xl">{classItem.name}</CardTitle>
                  <CardDescription>{classItem.description}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <ProgressBar 
                    completed={progress.completed} 
                    total={progress.total}
                  />
                  
                  <div className="space-y-2">
                    <p className="text-sm font-medium">Categories:</p>
                    <div className="flex flex-wrap gap-2">
                      {classItem.categories.map((category) => (
                        <span 
                          key={category.id}
                          className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-primary/10 text-primary"
                        >
                          {category.name}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <Link
                    to={`/class/${classItem.id}`}
                    className="block w-full bg-primary text-primary-foreground rounded-md py-2 text-center font-medium hover:bg-primary/90 transition-colors"
                  >
                    Start {classItem.name}
                  </Link>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </div>
  );
};