import React, {useState, useEffect} from 'react'
import CategoriesDataService from '../services/categories'
import CategoryCard from '../Components/CategoryCard';

import {
    useParams, 
    Link
  } from "react-router-dom";


function Category() {
    const [category, setCategory] = useState({})
    const [plates, setPlates] = useState([])
    let { id } = useParams();

    useEffect(() => {
        
        getCategoryById(id)
        CategoriesDataService.getAllPlates()
        .then(res =>{
            setPlates(res.data)
        })
        .catch(err=>console.log(err))
        
    }, [])

    const getCategoryById = (id) =>{
        CategoriesDataService.get(id)
        .then(res => 
            setCategory(res.data))
        .catch(err => console.log(err))
    }

    return (
        <div>
            {
                <div className="category-details">
                    <h2 className="main-title">{category.name}</h2>
                    <div className="category-cards">
                        {
                            plates && plates.map(plate => (
                                plate.catId === id &&
                                <Link key={plate._id} to='#'>
                                    <CategoryCard key={plate._id} catData={plate} modal={true}/>
                                </Link>
                                
                            ))
                        }
                    </div>
                    
                </div>
            }
        </div>
    )
}


export default Category

