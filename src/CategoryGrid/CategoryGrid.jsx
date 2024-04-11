import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';

export default function CategoryGrid() {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        fetch("https://www.themealdb.com/api/json/v1/1/categories.php")
            .then(response => response.json())
            .then(data => setCategories(data.categories))
            .catch(error => console.error(error));
    }, []);

    return (
        <div>
            <div className='body'>
            <div className='row row-3 gy-5'>       
            {categories.map((category, index) => (
                <div className='col col-4 d-flex justify-content-center' key={index}>
                    <Link to={`/Category/${category.strCategory}`} style={{ textDecoration: 'none' }}>  
                     <div className='card'>
                        <img className='card-img' src={category.strCategoryThumb} style={{ width: '450px' }} />
                        <h4 className='card-title d-flex justify-content-center'>{category.strCategory}</h4>
                    </div>
                    </Link>
                    
                 </div>
            ))}

            </div>
        </div>
        </div> 
    );
}
