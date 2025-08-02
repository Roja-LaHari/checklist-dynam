import { useParams, Link } from "react-router-dom";
import { ArrowLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ProgressBar } from "@/components/ProgressBar";
import { getClassById } from "@/data/checklistData";
import { useChecklistProgress } from "@/hooks/useChecklistProgress";

export const ClassPage = () => {
  const { classId } = useParams();
  const { getCategoryProgress } = useChecklistProgress();
  
  const classData = classId ? getClassById(classId) : null;

  if (!classData) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Class Not Found</h1>
          <Link to="/">
            <Button>Return Home</Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto py-8 px-4">
        <div className="mb-6">
          <Link to="/">
            <Button variant="outline" className="mb-4">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Home
            </Button>
          </Link>
          
          <h1 className="text-3xl font-bold mb-2">{classData.name}</h1>
          <p className="text-muted-foreground text-lg">{classData.description}</p>
        </div>

        <div className="grid gap-6">
          {classData.categories.map((category) => {
            const progress = getCategoryProgress(category.items);
            
            return (
              <Card key={category.id} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div>
                      <CardTitle className="text-xl">{category.name}</CardTitle>
                      <CardDescription>{category.items.length} items</CardDescription>
                    </div>
                    <ChevronRight className="h-5 w-5 text-muted-foreground" />
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <ProgressBar 
                    completed={progress.completed} 
                    total={progress.total}
                  />
                  
                  <Link
                    to={`/class/${classId}/category/${category.id}`}
                    className="block w-full bg-primary text-primary-foreground rounded-md py-2 text-center font-medium hover:bg-primary/90 transition-colors"
                  >
                    Start {category.name} Checklist
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