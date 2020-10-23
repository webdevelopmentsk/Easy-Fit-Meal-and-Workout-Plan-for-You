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
              image:'https://3i77hz2byv5n1pii73412ndb-wpengine.netdna-ssl.com/wp-content/uploads/2017/12/iStock-665132286-1.jpg'
            },
            {
              name: 'Immune System Booster',text:'Keeping immune system strong', 
              parameter: 'diet', 
              value: 'low-fat', 
              image:'https://www.wcrf.org/sites/default/files/Immunity-656x410.png'
            },
            {
              name: 'High Protein Diet',text:'Less carbs & more protein', 
              parameter: 'diet', 
              value: 'high-protein', 
              image:'https://static.toiimg.com/thumb/msid-67851393,width-800,height-600,resizemode-75,imgsize-1219516,pt-32,y_pad-40/67851393.jpg'
            },
            {
              name: 'Simple Plan',text:'Easy, time-saving recipes', 
              parameter: 'time', 
              value: 30, 
              image:'https://assets.rebelmouse.io/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpbWFnZSI6Imh0dHBzOi8vd3d3LmJyaXQuY28vbWVkaWEtbGlicmFyeS9leUpoYkdjaU9pSklVekkxTmlJc0luUjVjQ0k2SWtwWFZDSjkuZXlKcGJXRm5aU0k2SW1oMGRIQnpPaTh2WVhOelpYUnpMbkppYkM1dGN5OHlNVGd5TURJd055OXZjbWxuYVc0dWFuQm5JaXdpWlhod2FYSmxjMTloZENJNk1UWXhOVE00Tnpnd01YMC44SEJaa09LdHA3cUpkcWdDRllFb2tWdWFrOGZqaXlkN2gxQ1VyalM5QmJZL2ltYWdlLmpwZz93aWR0aD05ODAiLCJleHBpcmVzX2F0IjoxNjQwNDc0MjExfQ.UEd4vbW92fsIb-phlyx-x2CGnwBRWg_N4yWWg04G_Q8/img.jpg?width=2000&height=2000'
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
            calories: 'Kcal/portion'
          },
          popup:{
            type: 'recipe',
            ingredients: 'Ingredients:',
            preparation: 'Preparation:',
            healthLabels: 'Health Labels:'
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
          name: 'Full Body Workout',text: 'One of the best workout splits for muscle growth and strength regardless of your training experience.',
          image:'https://builtwithscience.com/wp-content/uploads/2019/01/full-body-workout-A-thumbnail-min-e1568692521525.jpg'
        },
        {
          name: 'Yoga',text: 'Yoga is an ancient practice that brings together mind and body.',
          image:'https://static.onecms.io/wp-content/uploads/sites/35/2019/04/16045733/benefits-yoga-fb.jpg'
        },
        {
          name: 'Flexibility Routine',text: 'Stretches for the Inflexible',
          image:'https://www.verywellfit.com/thmb/SmjIwmy0AhURbEpqO3Kbh3TeryI=/1887x1415/smart/filters:no_upscale()/GettyImages-536906989-566ef3c03df78ce161a406c4.jpg'
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
