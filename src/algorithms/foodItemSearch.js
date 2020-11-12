/*
import foodDB from '../apis/foodDB'; 

const getFoodItem = async (item) =>{

  const response = await foodDB.get('',
  {
      params: {
        ingr: item,
      },
  });
  return response.data 
};


export const foodItemSearch = async(item) =>{
  console.log(item)
  const foods = await getFoodItem(item);
  console.log(foods)

    let list=[];
    for(let i=0; i<= 3; i++){list.push(foods[i])}
    let constructedList = [];
    list.map(item =>{
      let data = {
              label:item.food.label,
              unitYield: 'yield',
              yield:1,
              calories: Math.round(item.food.nutrients.ENERC_KCAL),
              unitEnergy: 'Kcal',
              displayItem: `${item.food.label}  yield  1  ${Math.round(item.food.nutrients.ENERC_KCAL)}  Kcal`
      };
      constructedList.push(data);
      return null;
    })
    return constructedList;
};
*/

import  { FoodDatabaseClient } from 'edamam-api';

const  client = new FoodDatabaseClient({
  appId: '0eef7209',
  appKey: '7c3791ef5bad0542a2e6bec8f4934f45'
});

export const foodItemSearch = async(item,quantity) =>{

    const foods = await client.search({ query: item });
    let list=[];
    for(let i=0; i<= 3; i++){list.push(foods.hints[i])}
    let constructedList = [];
    list.map(item =>{
      let data = {
              label:item.food.label,
              unitYield: 'yield',
              yield:quantity,
              calories: Math.round(item.food.nutrients.ENERC_KCAL*quantity),
              unitEnergy: 'Kcal',
              displayItem: `${item.food.label}  yield ${quantity} ${Math.round(item.food.nutrients.ENERC_KCAL*quantity)}  Kcal`
      };
      constructedList.push(data);
      return null;
    })
    return constructedList;
};
