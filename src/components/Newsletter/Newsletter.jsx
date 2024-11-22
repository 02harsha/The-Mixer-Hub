import React from 'react';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '../Newsletter/newsletter.css'

import 'react-toastify/dist/ReactToastify.css';
function Newsletter(){
    const submitDetails=(e)=>{
        e.preventDefault()
        toast("success! check your mail")}
    return(
        <div className='container'>
             <ToastContainer/>
            <form className='form' onSubmit={submitDetails}>
               
                <h2 style={{textAlign:'center',color:''}}>Our News letter</h2>
                <label htmlFor="firsrname">First Name</label>
                <input type="text" id="firstname" />
                <label htmlFor="lastname">Last Name</label>
                <input type="text" id="lastname" />
                <label htmlFor="email">Email</label>
                <input type="email" id="email"/>
                <input type="submit" name="" className='submit1' value='Submit'/>
            </form>
        </div>
    )
}
export default Newsletter