import { useState, useEffect } from 'react';

export interface ChecklistProgress {
  [itemId: string]: boolean;
}

export const useChecklistProgress = () => {
  const [progress, setProgress] = useState<ChecklistProgress>({});

  // Load progress from localStorage on mount
  useEffect(() => {
    const savedProgress = localStorage.getItem('checklistProgress');
    if (savedProgress) {
      try {
        setProgress(JSON.parse(savedProgress));
      } catch (error) {
        console.error('Error loading checklist progress:', error);
      }
    }
  }, []);

  // Save progress to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('checklistProgress', JSON.stringify(progress));
  }, [progress]);

  const toggleItem = (itemId: string) => {
    setProgress(prev => ({
      ...prev,
      [itemId]: !prev[itemId]
    }));
  };

  const isItemCompleted = (itemId: string): boolean => {
    return progress[itemId] || false;
  };

  const getCategoryProgress = (categoryItems: { id: string }[]): { completed: number; total: number } => {
    const completed = categoryItems.filter(item => isItemCompleted(item.id)).length;
    return { completed, total: categoryItems.length };
  };

  const getClassProgress = (classCategories: { items: { id: string }[] }[]): { completed: number; total: number } => {
    let totalCompleted = 0;
    let totalItems = 0;
    
    classCategories.forEach(category => {
      const categoryProgress = getCategoryProgress(category.items);
      totalCompleted += categoryProgress.completed;
      totalItems += categoryProgress.total;
    });

    return { completed: totalCompleted, total: totalItems };
  };

  return {
    progress,
    toggleItem,
    isItemCompleted,
    getCategoryProgress,
    getClassProgress
  };
};