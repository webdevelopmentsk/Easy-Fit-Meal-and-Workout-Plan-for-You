export const content  = {
  appLogo:{
    name: 'Easy Fit'
  },
  landingPage:{
    options: [
      'Track what you eat and exercise',
      'Customize meal and workout plans',
      'Follow a calorie budget and reach your goals',
    ],
    buttonExplore:'Explore'
  },
  caloriesRemain:{
    heading: "Calories Remaining",
    text1: 'Goal',
    text2: 'Food',
    text3: 'Exercise',
    text4: 'Remaining'
  },
  homePage:{
    pageName: 'homePage',
    userPersonalInfo:{
      inputForm:[
        {inputName:{text: 'Age', value: 'age'},
         input:{type: 'number', min: 15, max:50},
         units: {name: 'unitAge', list: ['years']},
         select: '',
        },
        {inputName:{text: 'Weight', value: 'weight'},
         input:{type: 'number', min: 40, max:300},
         units: {name: 'unitWeight', list: ['kg','lb']},
         select: '',
        },
        {inputName:{text: 'Height', value: 'height'},
        input:{type: 'number', min: 40, max:250},
        units: {name: 'unitHeight', list: ['cm','inch']},
        select: '',
        },
        {inputName:{text: 'Gender', value: 'gender'},
        input:'',
        select: ['male','female'],
        units: '',
        },
        {inputName:{text: 'Activity', value: 'activity'},
        input:'',
        select:['Little to no exercise',
        'Light: exercise 1-3 times/week',
        'Moderate: exercise 4-5 times/week',
        'Active: Daily exercise or intense exercise 3-4 times/week',
        'Very Active: intense exercise 6-7 times/week'],
        units: '',}
      ],
      submit:{
        buttonText: 'Submit',
        incomplete: 'Please fill in all information! Some numbers might be out of acceptable ranges.',
        complete: 'Great! You are good to go!'
      },
    },
    userGoal: {
      inputForm:[
        {inputName:{text: 'Goal', value: 'goalType'},
         input: '',
         units: '',
         select: ['lose-weight','maintain-weight', 'gain-weight'],
        },
        {inputName:{text: 'Target', value: 'goalWeight'},
        input:{type: 'number', min: 0, max:300},
        units: {name: 'goalUnitWeight', list: ['kg','lb']},
        select: '',
        },
        {inputName:{text: 'Intensity', value: 'goalSpeed'},
        input:'',
        units: '',
        select: ['Slow ~ (0.5 kg/week) ','Medium ~ (0.75 kg/week)','Fast ~ (1 kg/week)'],
        },
      ],
      submit:{
        buttonText: 'Submit',
        incomplete: 'Please fill in all information! Some numbers might be out of acceptable ranges.',
        complete: 'Great! You are good to go!'
      },
    },
    results:{
      text: 'Results',
      image:'https://d50b62f6164e0c4a0279-11570554cb5edae3285603e6ab25c978.ssl.cf5.rackcdn.com/html_body_blocks/images/000/007/051/original/HowToStickToYourMealPlan_en0480002f5673756c159558dce0a778f1.jpg?1524197354',
      textCurrentWeight: 'Current Weight',
      textTargetWeight: 'Target',
      textGoal: 'Goal',
      textEstimatedTime: 'Estimated Time',
      timeUnit: 'Weeks',
      textCalories: 'Daily Caloric Need',
      energyUnit: 'Kcal'
    },
    articles:{
      heading: 'Top Health and Wellness Articles',
      searchText: 'Search Articles'
    },
    favoriteArticles:{
      heading: 'Your Favorite Articles',
    }
  },
  mealPlan:{
    pageName: 'mealPlan',
    diary:{
      text: 'Food Diary',
      textAddToDiary: 'Add to Diary',
      options:[{name: 'Breakfast', value:'breakfast'},
                  {name: 'Lunch', value:'lunch'},
                  {name: 'Dinner', value:'dinner'},
                  {name: 'Snacks', value:'snacks'},
                  ],
      addItem:{
            text: 'Add',
            placeholderSearch: 'Search for a food',
            placeholderQuantity: 'Enter quantity',
            type: 'food',
            searchResults: 'Search Results',
            eneryUnit: 'Kcal'
          },
        },
    plans:{
          type: 'dietPlan',
          text: "Choose a diet you'd like to follow",
          options: [
            {
              name: 'Classic Plan',text:'Just healthy balanced diet',
              parameter: 'diet', 
              value: 'balanced', 
              image:'https://static1.squarespace.com/static/59f0e6beace8641044d76e9c/5a09a41dec212d1131bde7ee/5a1d4b7ee2c483f5ad52809e/1566312153281/Web+size+photo+for+Balanced+Meals+blog.jpg?format=1500w'
            },
            {
              name: 'Immune Booster',text:'Keeping immune system strong', 
              parameter: 'diet', 
              value: 'low-fat', 
              image:'https://www.uspm.com/wp-content/uploads/2018/02/Heart-health-heart-month-Stethoscope-organic-food-and-sport-equipment.jpg'
            },
            {
              name: 'High Protein Diet',text:'Less carbs & more protein', 
              parameter: 'diet', 
              value: 'high-protein', 
              image:'https://mamgrsfreaks.com/wp-content/uploads/2020/04/HighProteinFoods_enb321660c23cfad1ed2613b6739f369de.jpg'
            },
            {
              name: 'Simple Plan',text:'Easy, time-saving recipes', 
              parameter: 'time', 
              value: 30, 
              image:'https://bryantarchway.com/wp-content/uploads/2018/11/food-and-time.jpg'
            },
          ],
        },
    searchIngredients: 
        {
          type: 'searchIngredients',
          text: 'Select Ingredients',
          placeholderSearch: 'Add an ingredient ...',
          placeholderQuantity: 'Enter quantity',
        },
    searchFoodPreferences: {
          text: 'Slect Food Preferences',
          type: 'searchFoodPreferences',
          options: [
            {name: 'High Protein',value: 'high-protein'},
            {name: 'High Fiber',value: 'high-fiber'},
            {name: 'Low Fat',value: 'low-fat'},
            {name: 'Low Carb',value: 'low-carb'},
            {name: 'Low Sodium',value: 'low-sodium'},
          ]
        },
    selectSubOptions:{
          text: 'Select Meal',
          type: 'searchMeals',
          options:[
            {name: 'Breakfast', value:'breakfast'},
            {name: 'Lunch', value:'lunch'},
            {name: 'Dinner', value:'dinner'},
            {name: 'Snacks', value:'snacks'}]
        },
    searchRecipes:{
          type: 'searchRecipes',
          button:{
            text: 'Search Recipe'
          },
          errors:{
            noSearchOption: 'Please specify search options'
          },
          results:{
            text: 'Please see the results'
          } 
        },
    favoriteRecipes:{
          results:{
            text: 'Please see the results'
          },
        },
    card:{
          units:{
            time: 'mins',
            portion: 'portions',
            calories: 'Kcal/pp'
          },
          popup:{
            type: 'recipe',
            ingredients: 'Ingredients',
            preparation: 'How to Cook',
            tags: 'Health Lables'
          }, 
    }
  },
  workOutPlan:{
    pageName: 'workOutPlan',
    diary:{
      text: 'Exercise/Activity',
      textAddToDiary: 'Add this exercise to your diary',
      options:[
        {name: 'Cardio', value:'cardio'},
        {name: 'Strength', value:'strength'},
        {name: 'Flexibility', value:'flexibility'},
        {name: 'Other Activities', value:'otherActivities'}],
      addItem:{
        text: 'Add',
        placeholderSearch: 'Search for an exercise',
        placeholderQuantity: 'Enter duration (min)',
        type: 'exercise',
        searchResults: 'Search Results',
        eneryUnit: 'Kcal'
      },
    },
    plans:{
      type: 'workoutPlan',
      text: "Choose a plan you'd like to follow",
      options: [
        {
          name: 'Full Body Workout',text: 'For muscle growth and strength',
          image:'https://content.active.com/Assets/Active.com+Content+Site+Digital+Assets/Fitness/580x350/Squats.jpg'
        },
        {
          name: 'Yoga',text: 'Yoga brings together mind and body.',
          image:'https://miro.medium.com/max/700/0*C5Y8W-6e9OVIB3AM'
        },
        {
          name: 'Flexibility Routine',text: 'Stretches for the Inflexible',
          image:'https://htpartners.com/wp-content/uploads/2017/07/iStock_000007946674Small.jpg'
        },
      ],
    },
    selectSubOptions:{
      text: 'Select Levels',
      type: '',
      options:[
        {name: 'Beginner', value:'beginner'},
        {name: 'Intermediate', value:'intermediate'},
        {name: 'Advanced', value:'advanced'},]
    },
    card:{
      units:{
        time: 'mins',
        calories: 'Kcal'
      },
      popup:{
        type: 'workout',
        textAddToDiary: 'Add Exercise',
        textSeeExercise: 'See Video'
      }, 
    }
  }
}
