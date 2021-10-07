import React, {useState, useEffect} from 'react'
import CategoryCard from '../Components/CategoryCard'
import CategoriesDataService from '../services/categories'
import {
    Link
} from "react-router-dom";

export default function Home() {
    const [data, setData] = useState()
    useEffect(() => {
        CategoriesDataService.getAll()
        .then(res =>{
        setData(res.data)
        })
        .catch(err=>console.log(err))
    }, [])
    
    return (
        <div className="home-page">
            
            <h2 className="main-title">Top Catégories</h2>
            <div className="category-cards">
                {
                        data && data.map(category =>(
                            <Link key={category._id} to={`/category/${category._id}`}>
                                <CategoryCard key={category._id} catData={category}/>
                            </Link>
                        ))
                }
                
            </div>
            
            
        </div>
    )
}
