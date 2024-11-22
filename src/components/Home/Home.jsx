import {useQuery} from '@tanstack/react-query'
import axios from 'axios'
import Searchbar from '../Searchbar/Searchbar'
import { useContext, useState } from 'react'
import Loader from '../loader/Loader'
import {contextAPI } from '../../contextAPI/Context'
import '../Home/home.css'
import { Link } from 'react-router-dom'
function Home(){
    const{searchTerm,setSelectedCocktail}=useContext(contextAPI)
    const {data,isError,isLoading}=useQuery({
        queryKey:['cocktail',searchTerm],
        queryFn:async()=>{
            const res=await axios(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${searchTerm}`)
            return res.data
        }
    })
    if(isLoading){
        return(<div style={{display:'flex',justifyContent:'center',alignItems:'center'}}>
            <Loader/>
            </div>)
    }
    return(
        <div style={{backgroundColor:'#F1F5F9'}}>
            <br />
            <Searchbar />
            
            <div className='layout'>
                {data.drinks?(
                    data.drinks.map((cocktail)=>(
                        <div className='card' key={cocktail.idDrink}>
                            <img src={cocktail.strDrinkThumb} alt="" />
                            <h2>{cocktail.strDrink}</h2>
                            <p>{cocktail.strCategory}</p>
                            <Link to={cocktail.idDrink} onClick={()=>{setSelectedCocktail(cocktail)}}><input type="button" className='seeDetails' value='View Details' /></Link>
                        </div>
                    ))
                ):(<p style={{textAlign:'center'}}>No Data Found "{searchTerm}"</p>)}
            </div>
        </div>
    )
}
export default Home