import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

export default function Meal() {

    const [mealInfo, setMealInfo] = useState(null);
    const { id } = useParams();
  
    useEffect(() => {
      fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
        .then(response => response.json())
        .then(data => setMealInfo(data.meals[0]))
        .catch(error => console.error(error))
        console.log(mealInfo)
    }, []);

    const ingredients = []
    if(mealInfo)
    {
      for(let i = 1; i <= 20; i++) {
        const ingredient = mealInfo[`strIngredient${i}`]
        if (ingredient){
          ingredients.push(ingredient)
        }
      }
    }
  
return(<>
  {mealInfo ? 
  ( 
    <div className='body'>
    <div className='row row-3'>
        <div className='col col-6'> 
          <div className='d-flex justify-content-center align-items-center flex-column'>
              <img src={mealInfo.strMealThumb} style={{ width: "500px", borderRadius: '10%', boxShadow: '2px 2px 2px 1px rgb(0 0 0 / 20%)' }} />
              <h2>{mealInfo.strMeal}</h2>
              <h6>{mealInfo.strTags}</h6>
          </div>
        </div>
      <div className='col col-6'>
        <h4>Ingredients:</h4>
        <ul style={{backgroundColor: 'lightgray', borderRadius: '5px', padding: '10px 30px'}}>
        {ingredients.map((ingredient, index) => (
         <li key={index}>
          <p>{ingredient}</p>
          </li>
        ))}
        </ul> 
      </div>
      <div className='col'>
        <div>
          <h1 style={{marginTop: '30px', textAlign: 'center'}}>Instructions</h1>
          <p>{mealInfo.strInstructions}</p>
        </div>
      </div>
    </div>
    </div>
  ) 
  : <div className='alert alert-primary'>Please Wait</div>}
       </>)

}