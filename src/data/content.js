export const content  = {
  homePage:{
    userPersonalInfo:{
      text: 'User Information',
      age:{name: 'Age',value: 'age'},
      weight:{
        name: 'Weight', 
        value: 'weight', 
        units: {metric: 'kg',usStandard: 'pounds'}},
      height:{name: 'Height', 
              value: 'height', 
              units: {metric: 'cm',usStandard: 'inches'}},
      gender:{name: 'Gender',
              value: 'gender',
              options:{
                male:{name:'Male', value:'male'},
                female:{name:'Female', value:'female'}}},
      activity:{
              name: 'Activity', value: 'activity', 
              options:['Light: exercise 1-3 times/week',
                      'Moderate: exercise 4-5 times/week',
                      'Active: Daily exercise or intense exercise 3-4 times/week',
                      'Very Active: intense exercise 6-7 times/week']},
      submit:{
              buttonText: "Submit",
              displayComplete: "Complete! You are good to go!",
              displayInComplete: "Your personal information is incomplete."}
    },
    userGoal: {
      text: {
        heading: 'Specify Your Goal',
        goal:'Goal:',
        target: 'Target Weight:',
        weeks: 'I want to reach my goal in (#weeks):',
        suggestions:'Healthy weight-loss/gain rates are 1-2 pounds/week (0.5 to 1 kg)'  
      },
      options: [
              {name:'Lose Weight', value: 'lose-weight'},
              {name:'Maintain Weight', value: 'maintain-weight'},
              {name:'Gain Weight', value: 'gain-weight'}
             ],
    },
    calculateCalories:{
      text: 'Calculate Calories'
    },
    results:{
      text: 'Results',
      maintain: {
        text: 'In order to main your current weight, you should eat:',
        units: 'Calories/day'
      },
      reachGoal: {
        text: 'In order to reach your goal in 6 weeks, you should eat:',
        units: 'Calories/day'
      }
    }
  },
  mealPlan:{
        foodDiary:{
          text: 'Food Diary',
          options:[{name: 'Breakfast', value:'breakfast'},
                  {name: 'Lunch', value:'lunch'},
                  {name: 'Dinner', value:'dinner'},
                  {name: 'Snacks', value:'snacks'},
                  ]
        },
        mealPlanRecipes:{
          type: 'mealPlan',
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
              value: 'balanced', 
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
              value: '&time=30', 
              image:'https://assets.rebelmouse.io/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpbWFnZSI6Imh0dHBzOi8vd3d3LmJyaXQuY28vbWVkaWEtbGlicmFyeS9leUpoYkdjaU9pSklVekkxTmlJc0luUjVjQ0k2SWtwWFZDSjkuZXlKcGJXRm5aU0k2SW1oMGRIQnpPaTh2WVhOelpYUnpMbkppYkM1dGN5OHlNVGd5TURJd055OXZjbWxuYVc0dWFuQm5JaXdpWlhod2FYSmxjMTloZENJNk1UWXhOVE00Tnpnd01YMC44SEJaa09LdHA3cUpkcWdDRllFb2tWdWFrOGZqaXlkN2gxQ1VyalM5QmJZL2ltYWdlLmpwZz93aWR0aD05ODAiLCJleHBpcmVzX2F0IjoxNjQwNDc0MjExfQ.UEd4vbW92fsIb-phlyx-x2CGnwBRWg_N4yWWg04G_Q8/img.jpg?width=2000&height=2000'
            },
          ],
        },
        ingredients: 
        {
          type: 'ingredients',
          text: 'Select Ingredients',
          placeholder: 'Add an ingredient ...'
        },
        foodPreferences: {
          text: 'Slect Food Preferences',
          type: 'foodPreferences',
          options: [
            {name: 'High Protein',value: 'high-protein'},
            {name: 'High Fiber',value: 'high-fiber'},
            {name: 'Low Fat',value: 'low-fat'},
            {name: 'Low Carb',value: 'low-carb'},
            {name: 'Low Sodium',value: 'low-sodium'},
          ]
        },
        meals:{
          text: 'Select Meal',
          type: 'meals',
          options:[
            {name: 'Breakfast', value:'breakfast'},
            {name: 'Lunch', value:'lunch'},
            {name: 'Dinner', value:'dinner'},
            {name: 'Snack', value:'snack'}]
        },
        searchRecipe:{
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
        recipeCard:{
          units:{
            time: 'mins',
            portion: 'portions',
            calories: 'Kcal/portion'
          },
          popup:{
            ingredients: 'Ingredients:',
            preparation: 'Preparation:',
            healthLabels: 'Health Labels:'
          }, 
        }



  },
}
