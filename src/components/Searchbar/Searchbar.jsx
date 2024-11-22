import { useContext, useState } from 'react'
import '../Searchbar/searchbar.css'
import {contextAPI } from '../../contextAPI/Context'
function Searchbar(){
    const{setsearchTerm}= useContext(contextAPI)
    const handleSubmit=(event)=>{
        event.preventDefault()
        setsearchTerm(event.target.search.value)
    }
    return(
        <form onSubmit={handleSubmit} className='searchbar'>
            <input type="text" placeholder='Search Cocktails...' name="search" className='search'/>
            <input type="submit" value='Search' className='submit' />
        </form>
    )
}
export default Searchbar