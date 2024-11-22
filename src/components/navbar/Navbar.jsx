import {Link} from 'react-router-dom'
import styles from '../navbar/navbar.module.css'
import { useState } from 'react'
function Navbar(){
    const [color1,setcolor1]=useState(false)
    const [color2,setcolor2]=useState(false)
    const [color3,setcolor3]=useState(false)
    
    return(
        <div className={styles.navbar}>
            <div className={styles.logo}><h1>COCKTAIL.COM</h1></div>
            <div className={styles.links}>
                <Link to='/home' onClick={()=>{
                    setcolor1(true)
                    setcolor2(false)
                    setcolor3(false)}} className={color1?styles.green:styles.black}>Home</Link>
                <Link to='/about' onClick={()=>{setcolor1(false)
                    setcolor2(true)
                    setcolor3(false)}} className={color2?styles.green:styles.black}>About</Link>
                <Link to='/newsletter' onClick={()=>{setcolor3(true)
                    setcolor1(false)
                    setcolor2(false)}} className={color3?styles.green:styles.black}>NewsLetter</Link>
            </div>
        </div>
    )
}
export default Navbar