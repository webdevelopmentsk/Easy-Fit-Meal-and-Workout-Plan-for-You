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
    breakfast:[],
    lunch:[],
    dinner:[],
    snacks:[],
    ingredients: [],
    foodPreferences: [],
    meals:[],
    recipes: [],
    favoriteRecipes:[],
    popUpRecipe: false,    
    checkedBoxes: [],
    mealPlan: '',
    randomIngredients:['chicken','potato','lettuce'],
    mealPlanRecipes:[],
}
