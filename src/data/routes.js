export const routes = [
    { name: "Home", link: "/",compName: "HomePage", icon:"home icon"},
    { name: "Meal Plan", link: "/mealplan",compName: "MealPlan",icon:"utensils icon"},
    { name: "Workout Plan", link: "/workoutplan",compName: "WorkoutPlan",icon:"dumbbell icon"},
    { name: "Sign In", link: "/signin", compName: "Sign In", icon: "sign-in icon"}
  ];

export const routesRecipeBar = [
  { name: "Suggested Recipes", link: "/mealplan/suggestedrecipes",compName: "Suggested Recipes", icon:"clipboard list icon"},
  { name: "Searh Recipes", link: "/mealplan/searchrecipes",compName: "All", icon:"search icon"},
  { name: "Favorite", link: "/mealplan/favoriterecipes",compName: "Favorites", icon:"heart icon"}
];

export const routesExerciseBar = [
  { name: "Suggested Workout Plans", link: "/workoutplan/suggestedexercise",compName: "Suggested Workout Plans", icon:"clipboard list icon"},
  //{ name: "Searh Exercise", link: "/workoutplan/searchexercise",compName: "All", icon:"search icon"},
  { name: "Favorite", link: "/workoutplan/favoriteexercise",compName: "Favorites", icon:"heart icon"}
];