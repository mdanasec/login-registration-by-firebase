import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useState } from 'react';
import {auth} from './firebase'
import { signInWithEmailAndPassword } from 'firebase/auth';
import style from '../Styles/login.module.css'

const Login = () => {
    const[email, setEmail]= useState('');
    const[password, setPassword]= useState('');

    const navigate = useNavigate('')

    const handleSubmit= async(e)=>{
        e.preventDefault()
        try{
           await signInWithEmailAndPassword(auth , email, password)
            alert("Login successfully")
            navigate('/page')

        } catch(err){
            console.log(err);
            alert("incorrect password")
        }
        
    }


  return (
    <div id={style.MainContainer}>
        <form action="" onSubmit={handleSubmit}>
            <h1>Login here</h1>
            <label htmlFor="">Email</label>
            <input type="text" onChange={(e)=>setEmail(e.target.value)} />
            <label htmlFor="">password</label>
            <input type="password" onChange={(e)=>setPassword(e.target.value)} />

            <div>
                <button type='submit'>Login</button>
                <p>Don't have account? <Link to='/signup'>Register</Link></p>
            </div>
        </form>
    </div>
  )
}

export default Login
