import { createContext,useState } from "react";
export const contextAPI=createContext()
export const Context=({children})=>{
    
    const [searchTerm,setsearchTerm]=useState('margarita')
    const [SelectedCocktail,setSelectedCocktail]=useState({})
    return(
        <contextAPI.Provider value={{searchTerm,setsearchTerm,setSelectedCocktail,SelectedCocktail}}>
            {children}
        </contextAPI.Provider>
    )
}