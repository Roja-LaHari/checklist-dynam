import { Link } from "react-router-dom";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ProgressBar } from "@/components/ProgressBar";
import { checklistData } from "@/data/checklistData";
import { useChecklistProgress } from "@/hooks/useChecklistProgress";
import { ChevronRight } from "lucide-react";

export const HomePage = () => {
  const { getClassProgress } = useChecklistProgress();

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto py-8 px-4">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold mb-4">Dynamic Checklist System</h1>
          <p className="text-xl text-muted-foreground">
            Track your progress across different classification systems
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {checklistData.map((classItem) => {
            const progress = getClassProgress(classItem.categories);
            
            return (
              <Card key={classItem.id} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-xl">{classItem.name}</CardTitle>
                    <ChevronRight className="h-5 w-5 text-muted-foreground" />
                  </div>
                  <CardDescription>{classItem.description}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <ProgressBar 
                    completed={progress.completed} 
                    total={progress.total}
                  />
                  
                  <div className="space-y-2">
                    <h4 className="font-medium text-sm">Categories:</h4>
                    <div className="flex flex-wrap gap-2">
                      {classItem.categories.map((category) => (
                        <Link
                          key={category.id}
                          to={`/class/${classItem.id}/category/${category.id}`}
                        >
                          <Badge variant="secondary" className="hover:bg-primary hover:text-primary-foreground transition-colors">
                            {category.name}
                          </Badge>
                        </Link>
                      ))}
                    </div>
                  </div>

                  <Link
                    to={`/class/${classItem.id}`}
                    className="block w-full bg-primary text-primary-foreground rounded-md py-2 text-center font-medium hover:bg-primary/90 transition-colors"
                  >
                    View {classItem.name}
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