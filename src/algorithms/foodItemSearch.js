/*import axios from 'axios';


export const foodItemSearch = async item =>{
  console.log(item)

  const url = `http://api.edamam.com/auto-complete?q=${item}&limit=5&app_id=0eef7209&app_key=7c3791ef5bad0542a2e6bec8f4934f45`

  const foods = await axios.get(url);
  console.log(foods)
  let list=[];
  for(let i=0; i<= 3; i++){list.push(foods.hints[i])}
  let constructedList = [];
  list.map(item =>{
    let data = {
            label:item.food.label,
            unityield: 'yield',
            yield:1,
            calories: Math.round(item.food.nutrients.ENERC_KCAL),
            unitCalories: 'Kcal',
    };
    constructedList.push(data)
  })
  return constructedList;
};
*/

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
