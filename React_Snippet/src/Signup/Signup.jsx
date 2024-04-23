import React from 'react'
import { useState } from 'react'
import {Link} from 'react-router-dom'
import GenericInput from '../GenericComponents/GenericInput'
function Signup() {
    const [signSwitch,ChangeSignSwitch]=useState(false)
  return (
    signSwitch?(
    <div className='flex justify-center items-center h-screen '>
        <div className='border rounded-md shadow-xl h-96 w-72 pt-6 pl-6' >
        <GenericInput labelName='UserName:'
           id='SignupUserName'
           className='border-0 border-gray-300 focus:border-2 focus:border-black outline-none w-56 shadow-md rounded-md mb-4 pl-2 placeholder-gray-300'
           labelClassName='font-semibold text-sm'
           placeholder='Enter the username'
           />
            <br/>
            <GenericInput labelName='Name:'
           id='SignupName'
           className='border-0 border-gray-300 focus:border-2 focus:border-black outline-none w-56 shadow-md rounded-md 
            pl-2 placeholder-gray-300 mb-4'
            labelClassName='font-semibold text-sm'
            placeholder='Enter the FullName'
           />
            <br/>
            <GenericInput labelName='Email:'
           id='SignupEmail'
           className='border-0 border-gray-300 focus:border-2 focus:border-black outline-none w-56 shadow-md rounded-md 
           pl-2 placeholder-gray-300 mb-10'
            labelClassName='font-semibold text-sm'
            placeholder='Enter the Email'
           />
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
    <GenericInput labelName='Password:'
           id='SignupPassword'
           className='border-0 border-gray-300 focus:border-2 focus:border-black outline-none w-56 shadow-md rounded-md mb-4 pl-2 placeholder-gray-300'
           labelClassName='font-semibold text-sm'
           placeholder='Enter the Password'
           type='password'/>
        <br/>
        <GenericInput labelName='ConfirmPassword:'
           id='SignupConfirmPassword'
           className='border-0 border-gray-300 focus:border-2 focus:border-black outline-none w-56 shadow-md rounded-md mb-4 pl-2 placeholder-gray-300'
           labelClassName='font-semibold text-sm'
           placeholder='Re-Enter the Password'
           type='password'/>
        <br/>
        <GenericInput labelName='OTP:'
           id='SignupOTP'
           className='border-0 border-gray-300 focus:border-2 focus:border-black outline-none w-56 shadow-md rounded-md 
          pl-2 placeholder-gray-300 mb-8'
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