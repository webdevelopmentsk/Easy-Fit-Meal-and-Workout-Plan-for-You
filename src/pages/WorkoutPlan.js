import React , { useState, useEffect } from 'react';
import RenderCaloriesRemain from '../components/molecules/RenderCaloriesRemain';
import Diary from '../components/organisms/Diary';
import caloriesBurned from '../algorithms/caloriesBurned';
import PageMenuBar from '../components/organisms/PageMenuBar';
import CustomizePlan from '../components/organisms/CustomizePlan';
import RenderFavoriteCardList from '../components/organisms/RenderFavoriteCardList';
import $ from 'jquery';
import RandomQuoteCard from '../components/molecules/RandomQuoteCard';

//content
import { content } from '../data/content';
import { routesExerciseBar } from '../data/routes';
import { workoutPlans } from '../data/workoutPlans';

//context
import { Context } from '../context/Provider';

//Routers
import {Switch, Route} from 'react-router-dom';
import { Link } from 'react-router-dom'
import { routes } from '../data/routes';

const WorkoutPlan = () => {

    const content_workoutPlan = content.workOutPlan;
    const {state,changeState} = React.useContext(Context);
    const [showCheckBoxes, setShowCheckBoxes] = useState(false);
    const [randomQuote, setRandomQuote] = useState([]);

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

    const resetUserItems = async (searchItemType) =>{
      changeState(searchItemType,[]);
    }

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

  const getRandomQuote = async () => {
    let totalQuotes = []
    for( let i=0; i < 2; i++){
      let result = await $.ajax({
        url: "https://api.forismatic.com/api/1.0/",
        jsonp: "jsonp",dataType: "jsonp",data: 
        {method: "getQuote",lang: "en",format: "jsonp"}
    });
    totalQuotes.push(result)
    }
    setRandomQuote(totalQuotes);
  }
  
  useEffect(() =>{ //Get Random Quote
    getRandomQuote();
  },[])


    return(
        <div className = "mainContainer mainContainer">
          <div className = "subContainer subContainer__pageInput">
          <Diary 
              content = {content_workoutPlan.diary}
              state ={state}
              deleteItem ={deleteItem}
              isItemObject = {true}
              onUserItemAdded = {onUserExerciseItemSelect}
              searchItemType = 'userExerciseItems'
              onClickSelectItem ={onClickSelectExerciseItem} 
              resetUserItems ={resetUserItems}
          />
          </div>
          <div className ='subContainer subContainer__linkToPage'>
            {routes.map((route,index) => index !== 2 && 
            <Link key={index} className = "pageMenuBar__link" to={route.link}
            ><i className= {`${route.icon} pageMenuBar__link__icon subContainer__linkToPage__icon`}/>
            <span className = "pageMenuBar__link__name"> {route.name}</span>
            </Link>)
            }
          </div>

          <div className = "subContainer subContainer__caloriesRemain">
                <RenderCaloriesRemain/>
          </div>
          <div className = "subContainer subContainer__randomQuotes">
                <RandomQuoteCard 
                  items = {randomQuote}
                  showImage = 'workout'
                />
          </div>
          <div className ="subContainer subContainer__pageMenuBar">
          <PageMenuBar routes ={routesExerciseBar} />
          </div>
          <div className ="subContainer subContainer__cards">
            <Switch>
                  <Route
                    path="/workoutplan/suggestedexercise"
                  >
                    <CustomizePlan 
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
          </div>
        </div>
    );
};

export default WorkoutPlan;