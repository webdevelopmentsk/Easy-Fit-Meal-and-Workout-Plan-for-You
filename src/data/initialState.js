export const initialState = {
    displayName: '',
    email: '',
    password: '',
    confirmPassword: '',
    userPersonalInfo:{
        age: 0,
        unitAge: 'years',
        gender: 'female',
        height:0,
        weight:0,
        activity:'Little to no exercise',
        unitHeight:'cm',
        unitWeight:'kg',
        complete: false,
        displayAllFields: true,
        ageMin: 12,
        ageMax: 60,
        weightMin: 40,
        weightMax: 300,
        heightMin: 40,
        heightMax: 250
    },
    userGoal:{
        goalType:'lose-weight',
        goalWeight: 0,
        goalUnitWeight:'kg',
        goalSpeed: 'Slow ~ (0.5 kg/week)',
        complete: false,
        displayAllFields: true,
        weightMin: 40,
        heightMax: 300,
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
    //Articles
    articles_homePage: [],
    articles_mealPlan: [],
    articles_workoutPlan: [],
    favoriteArticles: [],
}
