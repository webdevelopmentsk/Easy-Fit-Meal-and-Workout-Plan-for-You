import  { FoodDatabaseClient } from 'edamam-api';

const  client = new FoodDatabaseClient({
  appId: '0eef7209',
  appKey: '7c3791ef5bad0542a2e6bec8f4934f45'
});

export const foodItemSearch = async(item) =>{

    const foods = await client.search({ query: item });
    let list=[];
    for(let i=0; i<= 3; i++){list.push(foods.hints[i])}
    let constructedList = [];
    list.map(item =>{
      let data = {
              label:item.food.label,
              calories: Math.round(item.food.nutrients.ENERC_KCAL),
              yield:1
      };
      constructedList.push(data)
    })
    return constructedList;
};