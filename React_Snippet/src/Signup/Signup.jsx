import React from 'react'
import { useState } from 'react'
import {Link} from 'react-router-dom'
import GenericInput from '../GenericComponents/GenericInput'
function Signup() {
    const intialUserState={
      userName:'',
      name:'',
      Email:''
    }
    const intialPasswordState={
      password:'',
      confirmPassword:'',
      OTP:''
    }
    const [signSwitch,ChangeSignSwitch]=useState(true)
    const[data,setData]=useState(intialUserState)
    const[error,setError]=useState(intialUserState)
    const[Pdata,setPData]=useState(intialPasswordState)
    const[Perror,setPError]=useState(intialPasswordState)
    function UpdateData(property,value){
      signSwitch?setData({...data, [property]:value}):
      setPData({...Pdata, [property]:value})
    }
    function validateError(){
      let errors={}
      //Username should be unique add later
      if(!data.userName.trim())
        errors={...errors,userName:'UserName is required'}
      if(!data.name.trim())
        errors={...errors,name:'Name is required'}
      if(!data.Email.trim())
        errors={...errors,Email:'Email is required'}
      else if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.Email))
        errors={...errors,Email:'Invalid Email address'}
      setError(errors)
      console.log(errors)
      return Object.keys(errors).length===0
    }
    function validatePError(){
      let Perrors={}
      if(!Pdata.password.trim())
        Perrors={...Perrors,password:'Password is required'}
      else if(!/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(Pdata.password)){
        Perrors={...Perrors,password:'Password does not meet criteria'}
      }
      if(!Pdata.confirmPassword.trim())
        Perrors={...Perrors,confirmPassword:'Confirm Password is required'}
      else if(Pdata.password===Pdata.confirmPassword){
        Perrors={...Perrors,confirmPassword:'Password do not match'}
      }
      if(!Pdata.OTP.trim())
        Perrors={...Perrors,OTP:'Password is required'}
      setPError(Perrors)
        console.log(Perrors)
      return Object.keys(Perrors).length===0
    }
    function handleSubmit1(){
      //event.preventDefault()
      if(signSwitch){
        if(validateError())
        ChangeSignSwitch(false)
      }
      else{
        ChangeSignSwitch(true)
      } 
    }
    function OnSubmit1(){
      if(validatePError()){
        console.log('Sign successfully done!')
      }
    }
  return (
    signSwitch?(
    <div className='flex justify-center items-center h-screen '>
        <div className='border rounded-md shadow-xl h-96 w-72 pt-6 pl-6' >
          <div className='mb-1'>
        <GenericInput labelName='UserName:'
           id='SignupUserName'
           className='border-0 border-gray-300 focus:border-2 focus:border-black outline-none w-56 shadow-md rounded-md mb-1 pl-2 placeholder-gray-300'
           labelClassName='font-semibold text-sm'
           placeholder='Enter the username'
           value={data.userName}
           onChange={(e)=>UpdateData('userName',e.target.value)}
           />
           {error.userName && <p className='text-red-500 text-xs'>{error.userName}</p>}
           </div>
           <div className='mb-1'>
            <GenericInput labelName='Name:'
           id='SignupName'
           className='border-0 border-gray-300 focus:border-2 focus:border-black outline-none w-56 shadow-md rounded-md 
            pl-2 placeholder-gray-300 mb-1'
            labelClassName='font-semibold text-sm'
            placeholder='Enter the FullName'
            value={data.name}
            onChange={(e)=>UpdateData('name',e.target.value)}
           />
           {error.name && <p className='text-red-500 text-xs'>{error.name}</p>}
           </div>
           <div className='mb-6'>
            <GenericInput labelName='Email:'
           id='SignupEmail'
           className='border-0 border-gray-300 focus:border-2 focus:border-black outline-none w-56 shadow-md rounded-md 
           pl-2 placeholder-gray-300 mb-1'
            labelClassName='font-semibold text-sm'
            placeholder='Enter the Email'
            value={data.Email}
            onChange={(e)=>UpdateData('Email',e.target.value)}
           />
           {error.Email && <p className='text-red-500 text-xs'>{error.Email}</p>}
           </div>
            <button className='shadow-md w-56 rounded-md 
            bg-gradient-to-r from-blue-300 to-purple-600 hover:from-blue-700 hover:to-purple-700
             text-white text-semibold' onClick={handleSubmit1}>Next</button>
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
           type='password'
           value={Pdata.password}
           onChange={(e)=>UpdateData('password',e.target.value)}/>
        <br/>
        <GenericInput labelName='ConfirmPassword:'
           id='SignupConfirmPassword'
           className='border-0 border-gray-300 focus:border-2 focus:border-black outline-none w-56 shadow-md rounded-md mb-4 pl-2 placeholder-gray-300'
           labelClassName='font-semibold text-sm'
           placeholder='Re-Enter the Password'
           type='password'
           value={Pdata.confirmPassword}
           onChange={(e)=>UpdateData('confirmPassword',e.target.value)}/>
        <br/>
        <GenericInput labelName='OTP:'
           id='SignupOTP'
           className='border-0 border-gray-300 focus:border-2 focus:border-black outline-none w-56 shadow-md rounded-md 
          pl-2 placeholder-gray-300 mb-8'
           placeholder='Enter the OTP'
         value={Pdata.OTP}
         onChange={(e)=>UpdateData('OTP',e.target.value)}/>
        <br/>
        <div className='flex justify-between mr-10'>
        <button className='shadow-md w-16 h-6 rounded-md 
        bg-gradient-to-r from-blue-300 to-purple-600 hover:from-blue-700 hover:to-purple-700
         text-white text-semibold' onClick={handleSubmit1}>Prev</button>
        <button className=' shadow-md w-16 h-6 rounded-md bg-gradient-to-r from-blue-300 to-purple-600 hover:from-blue-700 hover:to-purple-700
         text-white text-semibold' onClick={OnSubmit1}>Submit</button>
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