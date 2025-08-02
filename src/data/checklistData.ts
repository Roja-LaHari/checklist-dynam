// Data structure for the dynamic checklist system
export interface ChecklistItem {
  id: string;
  title: string;
  description?: string;
}

export interface Category {
  id: string;
  name: string;
  items: ChecklistItem[];
}

export interface Class {
  id: string;
  name: string;
  description: string;
  categories: Category[];
}

// Sample data structure - easily extendable
export const checklistData: Class[] = [
  {
    id: "class-a",
    name: "Class A",
    description: "Basic dietary classifications",
    categories: [
      {
        id: "carnivorous",
        name: "Carnivorous",
        items: [
          {
            id: "meat-consumption",
            title: "Meat Consumption Guidelines",
            description: "Understanding proper meat consumption practices"
          },
          {
            id: "protein-sources",
            title: "Identify Primary Protein Sources",
            description: "Catalog main protein sources in diet"
          },
          {
            id: "hunting-patterns",
            title: "Study Hunting Patterns",
            description: "Analyze natural hunting behaviors and patterns"
          },
          {
            id: "digestive-system",
            title: "Digestive System Analysis",
            description: "Examine carnivorous digestive adaptations"
          }
        ]
      },
      {
        id: "herbivorous",
        name: "Herbivorous",
        items: [
          {
            id: "plant-identification",
            title: "Plant Species Identification",
            description: "Learn to identify edible plant species"
          },
          {
            id: "nutritional-requirements",
            title: "Nutritional Requirements Assessment",
            description: "Calculate daily nutritional needs from plants"
          },
          {
            id: "seasonal-availability",
            title: "Seasonal Plant Availability",
            description: "Map seasonal availability of plant foods"
          },
          {
            id: "processing-methods",
            title: "Plant Processing Methods",
            description: "Learn various plant processing techniques"
          }
        ]
      }
    ]
  },
  {
    id: "class-b",
    name: "Class B",
    description: "Advanced dietary classifications",
    categories: [
      {
        id: "omnivorous",
        name: "Omnivorous",
        items: [
          {
            id: "balanced-diet",
            title: "Balanced Diet Planning",
            description: "Create balanced omnivorous meal plans"
          },
          {
            id: "food-combining",
            title: "Food Combining Principles",
            description: "Understand optimal food combination strategies"
          },
          {
            id: "adaptation-strategies",
            title: "Dietary Adaptation Strategies",
            description: "Develop flexible dietary adaptation methods"
          }
        ]
      },
      {
        id: "herbivorous-b",
        name: "Herbivorous",
        items: [
          {
            id: "advanced-nutrition",
            title: "Advanced Plant Nutrition",
            description: "Deep dive into plant-based nutritional science"
          },
          {
            id: "supplement-strategies",
            title: "Supplement Strategies",
            description: "Identify necessary nutritional supplements"
          }
        ]
      },
      {
        id: "vegan",
        name: "Vegan",
        items: [
          {
            id: "ethical-considerations",
            title: "Ethical Framework Development",
            description: "Establish ethical guidelines for food choices"
          },
          {
            id: "complete-proteins",
            title: "Complete Protein Sources",
            description: "Identify and combine complete protein sources"
          },
          {
            id: "meal-planning",
            title: "Comprehensive Meal Planning",
            description: "Create complete vegan meal planning systems"
          }
        ]
      }
    ]
  },
  {
    id: "class-c",
    name: "Class C",
    description: "Comprehensive dietary framework",
    categories: [
      {
        id: "carnivorous-c",
        name: "Carnivorous",
        items: [
          {
            id: "advanced-hunting",
            title: "Advanced Hunting Techniques",
            description: "Master advanced hunting and tracking methods"
          },
          {
            id: "meat-preservation",
            title: "Meat Preservation Methods",
            description: "Learn traditional and modern meat preservation"
          }
        ]
      },
      {
        id: "herbivorous-c",
        name: "Herbivorous",
        items: [
          {
            id: "permaculture",
            title: "Permaculture Principles",
            description: "Apply permaculture to herbivorous systems"
          },
          {
            id: "wild-foraging",
            title: "Wild Foraging Skills",
            description: "Develop safe wild foraging capabilities"
          }
        ]
      },
      {
        id: "omnivorous-c",
        name: "Omnivorous",
        items: [
          {
            id: "ecological-impact",
            title: "Ecological Impact Assessment",
            description: "Assess environmental impact of food choices"
          },
          {
            id: "cultural-foods",
            title: "Cultural Food Integration",
            description: "Integrate diverse cultural food practices"
          }
        ]
      },
      {
        id: "vegan-c",
        name: "Vegan",
        items: [
          {
            id: "sustainable-practices",
            title: "Sustainable Practice Implementation",
            description: "Implement sustainable vegan practices"
          },
          {
            id: "community-building",
            title: "Community Building",
            description: "Build supportive vegan communities"
          }
        ]
      }
    ]
  }
];

// Helper functions
export const getClassById = (classId: string): Class | undefined => {
  return checklistData.find(cls => cls.id === classId);
};

export const getCategoryById = (classId: string, categoryId: string): Category | undefined => {
  const cls = getClassById(classId);
  return cls?.categories.find(cat => cat.id === categoryId);
};