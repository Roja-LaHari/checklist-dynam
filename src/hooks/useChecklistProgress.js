import { useState, useEffect } from 'react';

export const useChecklistProgress = () => {
  const [progress, setProgress] = useState({});

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

  const toggleItem = (itemId) => {
    setProgress(prev => ({
      ...prev,
      [itemId]: !prev[itemId]
    }));
  };

  const isItemCompleted = (itemId) => {
    return progress[itemId] || false;
  };

  const getCategoryProgress = (categoryItems) => {
    const completed = categoryItems.filter(item => isItemCompleted(item.id)).length;
    return { completed, total: categoryItems.length };
  };

  const getClassProgress = (classCategories) => {
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