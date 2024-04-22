import React from 'react'
import { useState } from 'react'
import {Link} from 'react-router-dom'
function Signup() {
    const [signSwitch,ChangeSignSwitch]=useState(true)
  return (
    signSwitch?(
    <div className='flex justify-center items-center h-screen '>
        <div className='border rounded-md shadow-xl h-96 w-72 pt-6 pl-6' >
            <label htmlFor='SignupUserName'className='font-semibold text-sm'>UserName:</label>
            <br/>
            <input 
            className='border-0 border-gray-300 focus:border-2 focus:border-black outline-none w-56 shadow-md rounded-md mb-4 pl-2 placeholder-gray-300'
            id='SignupUserName'
            type='text'
            placeholder='Enter the username'/>
            <br/>
            <label htmlFor='SignupName' className='font-semibold text-sm'>Name:</label>
            <br/>
            <input
            className='border-0 border-gray-300 focus:border-2 focus:border-black outline-none w-56 shadow-md rounded-md 
            pl-2 placeholder-gray-300 mb-4'
            id='SignupName'
            type='text'
            placeholder='Enter the FullName'/>
            <br/>
            <label htmlFor='SignupEmail' className='font-semibold text-sm'>Email:</label>
            <br/>
            <input
            className='border-0 border-gray-300 focus:border-2 focus:border-black outline-none w-56 shadow-md rounded-md 
            pl-2 placeholder-gray-300 mb-10'
            id='SignupEmail'
            type='text'
            placeholder='Enter the Email'/>
            <button className='shadow-md w-56 rounded-md 
            bg-gradient-to-r from-blue-300 to-purple-600 hover:from-blue-700 hover:to-purple-700
             text-white text-semibold' onClick={()=>ChangeSignSwitch(false)}>Next</button>
            <div className='pl-5 mt-10'>
               <p className='text-sm'>Already have an account?<Link to="/" className='text-black hover:text-blue-400 hover:underline underline-offset-2'>Login</Link></p>
        </div>
        </div>  
    </div>):(
    <div className='flex justify-center items-center h-screen '>
    <div className='border rounded-md shadow-xl h-96 w-72 pt-6 pl-6' >
        <label htmlFor='SignupPassword'className='font-semibold text-sm'>Password:</label>
        <br/>
        <input 
        className='border-0 border-gray-300 focus:border-2 focus:border-black outline-none w-56 shadow-md rounded-md mb-4 pl-2 placeholder-gray-300'
        id='SignupPassword'
        type='password'
        placeholder='Enter the Password'/>
        <br/>
        <label htmlFor='SignupConfirmPassword'className='font-semibold text-sm'>ConfirmPassword:</label>
        <br/>
        <input 
        className='border-0 border-gray-300 focus:border-2 focus:border-black outline-none w-56 shadow-md rounded-md mb-4 pl-2 placeholder-gray-300'
        id='SignupConfirmPassword'
        type='password'
        placeholder='Re-Enter the Password'/>
        <br/>
        <label htmlFor='SignupOTP' className='font-semibold text-sm'>OTP:</label>
        <br/>
        <input
        className='border-0 border-gray-300 focus:border-2 focus:border-black outline-none w-56 shadow-md rounded-md 
        pl-2 placeholder-gray-300 mb-8'
        id='SignupOTP'
        type='text'
        placeholder='Enter the OTP'/>
        <br/>
        <div className='flex justify-between mr-10'>
        <button className='shadow-md w-16 h-6 rounded-md 
        bg-gradient-to-r from-blue-300 to-purple-600 hover:from-blue-700 hover:to-purple-700
         text-white text-semibold' onClick={()=>ChangeSignSwitch(true)}>Prev</button>
        <button className=' shadow-md w-16 h-6 rounded-md bg-gradient-to-r from-blue-300 to-purple-600 hover:from-blue-700 hover:to-purple-700
         text-white text-semibold'>Submit</button>
        </div>
        <div className='pl-5 mt-10'>
           <p className='text-sm'>Already have an account?<Link to='/' className='text-black hover:text-blue-400 hover:underline underline-offset-2'>Login</Link></p>
    </div>
    </div>  
</div>

    )
  )
}

export default Signup