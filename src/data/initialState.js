export const initialState = {
    displayName: '',
    email: '',
    password: '',
    confirmPassword: '',
    userPersonalInfo:{
        age: 18,
        gender: 'female',
        height:168,
        weight:55,
        activity:'Little to no exercise',
        unitHeight:'cm',
        unitWeight:'kg',
        complete: false
    },
    userGoal:{
        goalType:'lose-weight',
        goalWeight: 50,
        goalUnitWeight:'kg',
        goalSpeed: 1,
        complete: false
    },
    calTrack:{
        goalCal: 0,
        foodTotalCal: 0,
        exerciseTotalCal: 0,
        remainingCal: 0,
        weeks: 0
    },
    //Food Diary
    breakfast:[], 
    lunch:[],
    dinner:[],
    snacks:[],
    searchRecipes:{
        total: [],
        rendered:[]
    },
    //Search Ingredients
    searchIngredients: [],
    searchFoodPreferences: [],
    searchMeals:[],
    favoriteRecipes:[],
    popUpRecipe: false,    
    checkedBoxes: [],
    dietPlan: '',
    mealPlanRecipes:{
        total: [],
        rendered:[]
    },
    mealPlanSelectedMeals:['breakfast','lunch','dinner','snacks'],
    userFoodItems: [],
    //Exercise Diary
    cardio:[],
    strength:[],
    flexibility:[],
    otherActivities: [],
    userExerciseItems:[],
    workoutPlans:{
        total: [],
        rendered:[]
    },
    workoutPlanSelectLevels:['beginner', 'intermediate','advanced'],
    favoriteExercises: [],
}
