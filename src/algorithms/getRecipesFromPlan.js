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

        response && await response.map(recipe => {
          recipe.recipe.meal = meal;
          recipe.recipe.displayItem = `${recipe.recipe.label}  ${Math.round(recipe.recipe.calories/recipe.recipe.yield)}  Kcal`
          recommended.push(recipe.recipe);
          return null;
        });
    
    return recommended;
};
