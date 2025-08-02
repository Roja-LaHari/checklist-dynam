import { Progress } from "@/components/ui/progress";

export const ProgressBar = ({ completed, total, className }) => {
  const percentage = total > 0 ? (completed / total) * 100 : 0;
  
  return (
    <div className={`space-y-2 ${className}`}>
      <div className="flex justify-between text-sm text-muted-foreground">
        <span>{completed} of {total} completed</span>
        <span>{Math.round(percentage)}%</span>
      </div>
      <Progress value={percentage} className="h-2" />
    </div>
  );
};