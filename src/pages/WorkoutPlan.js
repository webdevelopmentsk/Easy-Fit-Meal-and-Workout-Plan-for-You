import React , { useState, useEffect } from 'react';
import RenderCaloriesRemain from '../components/molecules/RenderCaloriesRemain';
import Diary from '../components/organisms/Diary';
import caloriesBurned from '../algorithms/caloriesBurned';
import PageMenuBar from '../components/organisms/PageMenuBar';
import CutomizePlan from '../components/organisms/CutomizePlan';
import RenderFavoriteCardList from '../components/organisms/RenderFavoriteCardList';

//content
import { content } from '../data/content';
import { routesExerciseBar } from '../data/routes';
import { workoutPlans } from '../data/workoutPlans';

//context
import { Context } from '../context/Provider';

//Routers
import {Switch, Route} from 'react-router-dom';

const WorkoutPlan = () => {

    const content_workoutPlan = content.workOutPlan;
    const {state,changeState} = React.useContext(Context);
    const [showCheckBoxes, setShowCheckBoxes] = useState(false);

    const onSelectPlan = item =>{
      setShowCheckBoxes(true);
      const gender = state.userPersonalInfo.gender;
      const filterResults = [];
      workoutPlans[item.name].map(plan =>{
        if(plan.suitableFor.indexOf(gender) > -1) {
          const totalBurned =  caloriesBurned(plan,state);
          plan.calories =totalBurned;
          filterResults.push(plan);
        }
        return null;
      })
      changeState('workoutPlans',{total:filterResults,rendered:filterResults});
    };

    const deleteItemFavExercise = (index,type) => {
      let newList = [...state[type]];
      newList.splice(index,1);
      changeState(type,newList);
    };

    const onChangeItem = (item,type) =>{

      if(type=== 'favoriteExercises'){
            let value = false;
            let index = -1;
            state.favoriteExercises.map((obj,idx) => {
              if(obj.url === item.url)
              {value = true;index=idx;}
              return null;
            });
  
            if (value){
              deleteItemFavExercise(index,type);
            }
            else{
              addItem(item,type)
            }
            
        }
        else{
          let index = state[type].indexOf(item);
          index > -1 ? deleteItem(item,type) : addItem(item,type);
        }
  
    };

    useEffect(() =>{
      const levels = state.workoutPlanSelectLevels;
      const totalExercises = state.workoutPlans.total;
      let renderedExercises = [];
      levels.map(level =>{
        totalExercises.map(exercise =>{
          if(level === exercise.level){
            renderedExercises.push(exercise);
          }
          return null;
        })
        return null;});
      changeState('workoutPlans',{total:totalExercises,rendered:renderedExercises});
    },[state.workoutPlanSelectLevels]);


    const checkIfFavorite = item =>{
      let isLiked = false;

      state.favoriteExercises.length > 0 && state.favoriteExercises.map(
        obj => { 
          if(obj.url === item.url) 
          {
            isLiked = true;
          } return isLiked;}
      );
    
      return isLiked;
    };
    const addItem = (item,type) => {
      let newList = [...state[type],item];
      changeState(type,newList)
    };    
    
    const deleteItem = (item,type)=> {        
      let index = state[type].indexOf(item);
      let newList = [...state[type]];
      newList.splice(index,1);
      changeState(type,newList);
    };
      const onUserExerciseItemSelect = async(item,type,quantity) =>{

        const totalCalBurned = caloriesBurned(item,state,type,quantity)
        let data = {
            label: item,
            time: quantity,
            timeUnit: 'mins',
            calories: totalCalBurned,
            unitEnergy: 'Kcal',
            displayItem: `${item}  ${quantity}  mins  ${totalCalBurned}  Kcal`
        }
        let newList = [...state[type],data];
        changeState(type,newList)
      };
      
      const onClickSelectExerciseItem = async (item,type) =>{
        //let newList = [...state[type],item];
        //changeState(type,newList)
      };

    //CalTotalCalories from Exercise
    useEffect(()=>{
    let totalCal = 0;
    state.cardio.forEach(exercise => {
      let itemCal = Math.round(exercise.calories);
      totalCal = totalCal + itemCal;
    })
    state.strength.forEach(exercise => {
      let itemCal = Math.round(exercise.calories);
      totalCal = totalCal + itemCal;
    })
    state.flexibility.forEach(exercise => {
      let itemCal = Math.round(exercise.calories);
      totalCal = totalCal + itemCal;
    })
    state.otherActivities.forEach(exercise => {
      let itemCal = Math.round(exercise.calories);
      totalCal = totalCal + itemCal;
    })
  
    let data = state.calTrack;
    data.exerciseTotalCal = totalCal;
    changeState('calTrack',data);
  
  
  },[state.cardio,state.strength,state.flexibility,state.otherActivities]);


    return(
        <>
         <RenderCaloriesRemain />
         <Diary 
              content = {content_workoutPlan.diary}
              state ={state}
              deleteItem ={deleteItem}
              isItemObject = {true}
              onUserItemAdded = {onUserExerciseItemSelect}
              searchItemType = 'userExerciseItems'
              onClickSelectItem ={onClickSelectExerciseItem} 
        />
        <PageMenuBar routes ={routesExerciseBar} />
        <Switch>
                  <Route
                    path="/workoutplan/suggestedexercise"
                  >
                    <CutomizePlan 
                      state ={state}
                      mainState = 'workoutPlans'
                      content = {content_workoutPlan}
                      onSelectPlan = {onSelectPlan}
                      onChangeItem = {onChangeItem}
                      checkIfFavorite = {checkIfFavorite}
                      addItem ={addItem}
                      checkedBoxes ={state.workoutPlanSelectLevels}
                      type = 'workoutPlanSelectLevels'
                      showCheckBoxes = {showCheckBoxes}
                    />
                  </Route>
                  <Route
                    path="/workoutplan/favoriteexercise"
                  >
                    {state.favoriteRecipes && 
                    <RenderFavoriteCardList 
                    content = {content_workoutPlan}
                    state ={state}
                    mainState = 'favoriteExercises'
                    onChangeItem ={onChangeItem}
                    checkIfFavorite ={checkIfFavorite}
                    addItem ={addItem}
                    />}
                  </Route>
              </Switch>


        </>
    );
};

export default WorkoutPlan;