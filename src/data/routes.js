export const routes = [
    { name: "Home", link: "/home",compName: "HomePage", icon:"home icon"},
    { name: "Meal Plan", link: "/mealplan",compName: "MealPlan",icon:"utensils icon"},
    { name: "Workout Plan", link: "/workoutplan",compName: "WorkoutPlan",icon:"dumbbell icon"},
    //{ name: "Sign In", link: "/signin", compName: "Sign In", icon: "sign in icon"}
  ];

export const routesRecipeBar = [
  { name: "Diet Plans", link: "/mealplan/dietplans",compName: "dietplans", icon:"clipboard list icon"},
  { name: "Searh Recipes", link: "/mealplan/searchrecipes",compName: "all", icon:"search icon"},
  { name: "Favorites", link: "/mealplan/favoriterecipes",compName: "favorites", icon:"heart icon"}
];

export const routesExerciseBar = [
  { name: "Workout Plans", link: "/workoutplan/suggestedexercise",compName: "suggestedWorkoutPlans", icon:"clipboard list icon"},
  //{ name: "Searh Exercise", link: "/workoutplan/searchexercise",compName: "All", icon:"search icon"},
  { name: "Favorites", link: "/workoutplan/favoriteexercise",compName: "favorites", icon:"heart icon"}
];

export const routesArticleBar = [
  {name: "Articles", link: "/home/populararticles",compName: "popularMindfulnessArticles", icon:"clipboard icon"},
  {name: "Favorites", link: "/home/favoritearticles",compName: "favorites", icon:"heart icon"},
];