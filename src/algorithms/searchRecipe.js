import edamam from '../apis/edamam';

const filterDietLables = (foodPreferences,recipe) =>{

    let match = 0;
    let length = foodPreferences.length;
    foodPreferences.map(preference =>{
        recipe.dietLabels.map(label => {label.toLowerCase()===preference && match++;})
    });
    if(match === length){
        return true;
    }else{
        return false;
    }
};

const generateRecipes = async searchObj =>{

    if(searchObj.ingredients && searchObj.foodPreferences){
        const filterResponses = [];
        await Promise.all(searchObj.foodPreferences.map(async dietLabel =>{
            const response = await edamam.get('/search',
            {
                params: {
                    q: searchObj.ingredients.join('+'),
                    diet: dietLabel
                },
            });
            response.data.hits.map(hit =>
                {
                    const isPreferable = filterDietLables(searchObj.foodPreferences,hit.recipe);
                    isPreferable && filterResponses.push(hit)
                } 
            );
        }));
        return filterResponses;
    }
    else{
        const response = await edamam.get('/search',
        {
            params: {
                q: searchObj.ingredients.join('+'),
            },
        });
        return response.data.hits;

    }
};

export const searchRecipe = async searchObj =>{
    const results = await generateRecipes(searchObj);
    const filterResults = [];
    results.map(hit => {
        let data = hit.recipe;
        data.unitEnergy = 'Kcal';
        data.displayItem = `${data.label}  ${Math.round(data.calories/data.yield)}  ${data.unitEnergy}`
        filterResults.push(data);
    });
    return filterResults;
}
