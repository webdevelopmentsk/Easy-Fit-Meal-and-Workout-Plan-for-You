export const content  = {
  appLogo:{
    name: 'Easy Fit'
  },
  landingPage:{
    heading1: 'Create Your Own Fitness & Diet Plan',
    heading2:'We offer a simple way to customize a routine that works for you!',
    buttonExplore: 'Explore Easy Fit',
  },
  caloriesRemain:{
    heading: 'Calories Remaining',
    text1: 'Goal',
    text2: 'Food',
    text3: 'Exercise',
    text4: 'Remaining'
  },
  homePage:{
    userPersonalInfo:{
      text:{
        heading1: "Let's get started",
        heading2: "Specify your personal information.",
        textbtn: 'Click Here',
        textAfter: 'Change Your Information',
      },
      age:{name: 'Age',value: 'age'},
      weight:{
        name: 'Weight', 
        value: 'weight', 
        units: ['kg','lb']},
      height:{name: 'Height', 
              value: 'height', 
              units: ['cm','inch']},
      gender:{name: 'Gender',
              value: 'gender',
              options:['male', 'female']},
      activity:{
              name: 'Activity', value: 'activity', 
              options:['Little to no exercise',
                      'Light: exercise 1-3 times/week',
                      'Moderate: exercise 4-5 times/week',
                      'Active: Daily exercise or intense exercise 3-4 times/week',
                      'Very Active: intense exercise 6-7 times/week']},
      submit:{
              buttonText: 'Submit',
              displayComplete: 'Complete! You are good to go!',
              displayInComplete: 'Your personal information is incomplete.'}
    },
    userGoal: {
      text: {
        heading1: "Let's Set Your Goal",
        heading2: "Whether you want to lose weight, gain muscle or increase your endurance, it's important to tailor your workout to fit your goals.",
        textbtn: 'Click Here',
        textAfter: 'Change Your Goal',
      },

      goal:'Goal:',
      target: 'Target:',
      intensity: {
        text: 'Intensity',
        options: ['Slow', 'Fast'],
        },
      suggestions:'Healthy weight-loss/gain rates are 1-2 pounds/week (0.5 to 1 kg)',
      submit: {
        buttonText: 'Submit',
        displayComplete: 'Complete! You are good to go!',
        displayInComplete: 'Your personal information is incomplete.'
      },
      options: [
              {name:'Lose Weight', value: 'lose-weight'},
              {name:'Maintain Weight', value: 'maintain-weight'},
              {name:'Gain Weight', value: 'gain-weight'}
             ],
    },
    results:{
      text: 'Results',
      image:'https://d50b62f6164e0c4a0279-11570554cb5edae3285603e6ab25c978.ssl.cf5.rackcdn.com/html_body_blocks/images/000/007/051/original/HowToStickToYourMealPlan_en0480002f5673756c159558dce0a778f1.jpg?1524197354',
      textGoal: 'Goal',
      textEstimatedTime: 'Estimated Time',
      timeUnit: 'Weeks',
      textCalories: 'Daily Calorie Need',
      energyUnit: 'Kcal'
    }
  },
  mealPlan:{
    diary:{
      text: 'Food Diary',
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
            ingredients: 'Ingredients:',
            preparation: 'Go to Preparation',
          }, 
    }
  },
  workOutPlan:{
    diary:{
      text: 'Exercise/Activity',
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
        textAddToDiary: 'Add Exercise'
      }, 
    }
  }
}
