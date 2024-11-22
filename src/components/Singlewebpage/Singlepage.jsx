import { useContext } from "react"
import { contextAPI } from "../../contextAPI/Context"
import '../Singlewebpage/singlepage.css'

function Singlepage(){
    const {SelectedCocktail}=useContext(contextAPI)
    console.log(SelectedCocktail)
    return(
        <div className="container">
            <div className="image">
                <img src={SelectedCocktail.strDrinkThumb} alt="" />
            </div>
            <div className="content">
                <p><span>Name:</span> {SelectedCocktail.strDrink}</p>
                <p><span>Category:</span> {SelectedCocktail.strCategory}</p>
                <p><span>Info:</span> {SelectedCocktail.strAlcoholic}</p>
                <p><span>Glass:</span> {SelectedCocktail.strGlass}</p>
                <p><span>Ingredients:</span> {SelectedCocktail.strIngredient1},{SelectedCocktail.strIngredient2},{SelectedCocktail.strIngredient3},{SelectedCocktail.strIngredient4}</p>
                <p><span>Instructions:</span> {SelectedCocktail.strInstructions}</p>
            </div>
        </div>
    )
}
export default Singlepage