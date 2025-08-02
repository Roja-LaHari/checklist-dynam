export const checklistData = {
  classes: [
    {
      id: "class-a",
      name: "Class A",
      description: "Animals with specific dietary patterns - Carnivorous and Herbivorous",
      categories: [
        {
          id: "carnivorous",
          name: "Carnivorous",
          items: [
            {
              id: "car-1",
              title: "Identify meat-eating characteristics",
              description: "Study sharp teeth and claws for hunting"
            },
            {
              id: "car-2",
              title: "Observe hunting behavior",
              description: "Document predatory patterns and strategies"
            },
            {
              id: "car-3",
              title: "Analyze digestive system",
              description: "Examine short digestive tract adapted for meat"
            },
            {
              id: "car-4",
              title: "Study feeding habits",
              description: "Observe frequency and quantity of meat consumption"
            }
          ]
        },
        {
          id: "herbivorous",
          name: "Herbivorous",
          items: [
            {
              id: "herb-1",
              title: "Identify plant-eating adaptations",
              description: "Study flat teeth for grinding vegetation"
            },
            {
              id: "herb-2",
              title: "Observe grazing behavior",
              description: "Document feeding patterns on plants"
            },
            {
              id: "herb-3",
              title: "Analyze digestive system",
              description: "Examine long digestive tract for plant matter"
            },
            {
              id: "herb-4",
              title: "Study nutritional requirements",
              description: "Assess plant-based nutrition needs"
            }
          ]
        }
      ]
    },
    {
      id: "class-b",
      name: "Class B",
      description: "Mixed dietary patterns - Omnivorous, Herbivorous, and Vegan",
      categories: [
        {
          id: "omnivorous",
          name: "Omnivorous",
          items: [
            {
              id: "omni-1",
              title: "Identify mixed diet characteristics",
              description: "Study adaptations for both plant and meat consumption"
            },
            {
              id: "omni-2",
              title: "Observe flexible feeding behavior",
              description: "Document opportunistic feeding patterns"
            },
            {
              id: "omni-3",
              title: "Analyze digestive versatility",
              description: "Examine moderate digestive tract adaptations"
            },
            {
              id: "omni-4",
              title: "Study seasonal diet changes",
              description: "Observe dietary variations throughout the year"
            }
          ]
        },
        {
          id: "herbivorous-b",
          name: "Herbivorous",
          items: [
            {
              id: "herb-b-1",
              title: "Advanced plant identification",
              description: "Develop expertise in plant species recognition"
            },
            {
              id: "herb-b-2",
              title: "Seasonal feeding patterns",
              description: "Study how diet changes with plant availability"
            },
            {
              id: "herb-b-3",
              title: "Nutritional analysis",
              description: "Assess plant nutrient content and quality"
            }
          ]
        },
        {
          id: "vegan",
          name: "Vegan",
          items: [
            {
              id: "vegan-1",
              title: "Ethical considerations",
              description: "Understand ethical frameworks for plant-only diets"
            },
            {
              id: "vegan-2",
              title: "Nutritional completeness",
              description: "Ensure all nutritional needs are met with plants"
            },
            {
              id: "vegan-3",
              title: "Environmental impact",
              description: "Study environmental benefits of plant-based diets"
            }
          ]
        }
      ]
    },
    {
      id: "class-c",
      name: "Class C",
      description: "Comprehensive study covering all dietary patterns",
      categories: [
        {
          id: "carnivorous-c",
          name: "Carnivorous",
          items: [
            {
              id: "car-c-1",
              title: "Advanced predator study",
              description: "Deep dive into apex predator characteristics"
            },
            {
              id: "car-c-2",
              title: "Ecosystem role analysis",
              description: "Understand carnivore role in food webs"
            }
          ]
        },
        {
          id: "herbivorous-c",
          name: "Herbivorous",
          items: [
            {
              id: "herb-c-1",
              title: "Plant-animal co-evolution",
              description: "Study evolutionary relationships with plants"
            },
            {
              id: "herb-c-2",
              title: "Ecosystem engineering",
              description: "Understand how herbivores shape ecosystems"
            }
          ]
        },
        {
          id: "omnivorous-c",
          name: "Omnivorous",
          items: [
            {
              id: "omni-c-1",
              title: "Adaptive advantages",
              description: "Study benefits of dietary flexibility"
            },
            {
              id: "omni-c-2",
              title: "Urban adaptation",
              description: "Observe how omnivores adapt to city environments"
            }
          ]
        },
        {
          id: "vegan-c",
          name: "Vegan",
          items: [
            {
              id: "vegan-c-1",
              title: "Sustainable practices",
              description: "Implement sustainable plant-based systems"
            },
            {
              id: "vegan-c-2",
              title: "Global impact assessment",
              description: "Analyze worldwide effects of plant-based diets"
            }
          ]
        }
      ]
    }
  ]
};

export const getClassById = (classId) => {
  return checklistData.classes.find(cls => cls.id === classId);
};

export const getCategoryById = (classId, categoryId) => {
  const classData = getClassById(classId);
  if (!classData) return null;
  return classData.categories.find(category => category.id === categoryId);
};