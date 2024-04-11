import React, { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'

export default function MealsByCategoryGrid() {
  const [meals, setMeals] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${id}`)
      .then(response => response.json())
      .then(data => setMeals(data.meals))
      .catch(error => console.error(error))
  }, []);

  return (
    <div>
        <div className='body'>
        <div className='row row-3 gy-5'>    
        {meals.map((meal, index) => (
            <div className='col col-4 d-flex justify-content-center' key={index}>
              <Link to={`/Meal/${meal.idMeal}`} style={{textDecoration: "none"}}>
                 <div className='card' style={{width: '450px'}}>
                    <img className='card-img' src={meal.strMealThumb} style={{ width: '100%' }} />
                    <h4 className='card-title d-flex justify-content-center'>{meal.strMeal}</h4>
                </div>
              </Link>
             </div>
        ))}

        </div>
        </div>
    </div>
);
}
