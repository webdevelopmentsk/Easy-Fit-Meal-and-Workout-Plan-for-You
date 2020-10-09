export const initialState = {
    displayName: '',
    email: '',
    password: '',
    confirmPassword: '',
    userPersonalInfo:{
        age: 0,
        gender: 'female',
        height:0,
        weight:0,
        activity:'Little to no exercise',
        unitHeight:'cm',
        unitWeight:'kg',
        complete: false
    },
    userGoal:{
        goalType:'lose-weight',
        goalWeight: 0,
        goalUnitWeight:'kg',
        goalSpeed: 0,
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
    foodDiary:{
        breakfast:[], 
        lunch:[],
        dinner:[],
        snacks:[],
    },
    //Food Diary
    searchRecipes:{
        total: [],
        rendered:[]
    },
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
    userFoodItems: []
}
