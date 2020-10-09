import edamam from '../apis/edamam';

export const searchRecipe = async searchObj =>{

    const response = await edamam.get('/search',
    {
        params: {
            q: searchObj.ingredients.join('+'),
            //mealType: 'breakfast',
            diet:'high-protein',

        },
    });
    return response.data.hits
};
