import edamam from '../apis/edamam';

import { ingredients } from '../data/ingredients';

const getRecipes = async (item,ingredients) =>{

    const response = await edamam.get('/search',
    {
        params: {
            q: ingredients.join('+'),
            [item.parameter]: item.value
        },
    });
    return response.data.hits 
};

export const dietPlan = async (item, meal) => {
    let recommended = [];

        let initIngredients = ingredients[item.name][meal];
        let randomIngredients = [];
        let numIngred = 2;

        for (let i = 0; i < numIngred; i++) {
            let maxIndex = ingredients[item.name][meal].length - 1;
            let pickedIndex = Math.floor(Math.random() * maxIndex);

            randomIngredients.push(initIngredients[pickedIndex]);
            initIngredients.splice(pickedIndex, 1);
        };
        let response = await getRecipes(item,randomIngredients);

        response && await response.map(recipe => {recipe.recipe.meal = meal;recommended.push(recipe.recipe);});
    
    return recommended;
};


/*
const onSelectMealPlan = async(item,type) =>{
  await changeState(type,item)
  console.log(type)
  switch(item.parameter){
    case 'diet':{
       const response = await edamam.get('/search', 
      {
        params: {
          q: state.randomIngredients.join('+')
        },
      });
      response.data.hits && changeState('mealPlanRecipes',response.data.hits);
    };break;
    default:break;
  }
}

*/