import React from 'react'
import { Link,  useNavigate } from 'react-router-dom'
import { useState } from 'react';
import {auth} from './firebase'
import { createUserWithEmailAndPassword } from 'firebase/auth';
import style from '../Styles/signUp.module.css'

const SignUp = () => {
    const[email, setEmail]= useState('');
    const[password, setPassword]= useState('');

    const navigate = useNavigate();

    const handleSubmit= async(e)=>{
        e.preventDefault()
        try{
           await createUserWithEmailAndPassword(auth , email, password)
            alert('Account Created')
            navigate('/login')

        } catch(err){
            console.log(err);
        }
        
    }


  return (
    <div id={style.MainContainer}>
        <form action="" onSubmit={handleSubmit}>
           <h1> Register Here</h1>
            <label htmlFor="">Email</label>
            <input type="text" onChange={(e)=>setEmail(e.target.value)} />
            <label htmlFor="">password</label>
            <input type="password" onChange={(e)=>setPassword(e.target.value)} />

            <div>
                <button type='submit'>Sign Up</button>
                <p>Already Registred? <Link to='/'>Login</Link></p>
            </div>
        </form>
    </div>
  )
}

export default SignUp
