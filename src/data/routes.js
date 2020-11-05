export const routes = [
    { name: "Home", link: "/home",compName: "HomePage", icon:"home icon"},
    { name: "Meal Plan", link: "/mealplan",compName: "MealPlan",icon:"utensils icon"},
    { name: "Workout Plan", link: "/workoutplan",compName: "WorkoutPlan",icon:"dumbbell icon"},
    //{ name: "Sign In", link: "/signin", compName: "Sign In", icon: "sign in icon"}
  ];

export const routesRecipeBar = [
  { name: "Suggested Recipes", link: "/mealplan/suggestedrecipes",compName: "suggestedRecipes", icon:"clipboard list icon"},
  { name: "Searh Recipes", link: "/mealplan/searchrecipes",compName: "all", icon:"search icon"},
  { name: "Favorite", link: "/mealplan/favoriterecipes",compName: "favorites", icon:"heart icon"}
];

export const routesExerciseBar = [
  { name: "Suggested Workout Plans", link: "/workoutplan/suggestedexercise",compName: "suggestedWorkoutPlans", icon:"clipboard list icon"},
  //{ name: "Searh Exercise", link: "/workoutplan/searchexercise",compName: "All", icon:"search icon"},
  { name: "Favorite", link: "/workoutplan/favoriteexercise",compName: "favorites", icon:"heart icon"}
];

export const routesArticleBar = [
  {name: "Popular Mindfulness Articles", link: "/home/populararticles",compName: "popularMindfulnessArticles", icon:"clipboard icon"},
  {name: "Favorite", link: "/home/favoritearticles",compName: "favorites", icon:"heart icon"},
];