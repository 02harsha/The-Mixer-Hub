import { Routes,Route } from "react-router-dom"

import Home from '../components/Home/Home'
import About from '../components/About/About'
import Newsletter from "../components/Newsletter/Newsletter"
import Singlepage from "../components/Singlewebpage/Singlepage"
import Errorpage from "../components/Errorpage/Errorpage"
import { useContext } from "react"
import { contextAPI } from "../contextAPI/Context"

function Allroutes(){
    const {SelectedCocktail}=useContext(contextAPI)

    return(
        <Routes>
            <Route path="/Home" element={<Home/>}/>
            <Route path="/About" element={<About/>}/>
            <Route path="/newsletter" element={<Newsletter/>}/>
            <Route path='/Home/:id' element={<Singlepage/>}/>
            <Route path="*" element={<Errorpage/>}></Route>
        </Routes>
    )
}
export default Allroutes