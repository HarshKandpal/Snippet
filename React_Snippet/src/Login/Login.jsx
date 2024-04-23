import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faSquareXTwitter,faSquareGooglePlus} from '@fortawesome/free-brands-svg-icons'
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import {Link} from 'react-router-dom'
import { useState } from 'react'
import GenericInput from '../GenericComponents/GenericInput'
function Login() {
  const [username,setUserName]=useState('')
  const [password,setPassword]=useState('')
  const[error,setError]=useState('')
  const[visiblePassword,setVisiblePassword]=useState(false)

  function togglePassword(){
    setVisiblePassword(!visiblePassword)
  }
  function handleSubmit(event){
    event.preventDefault()
    if(!username || !password){
      setError('Please enter both username and password')
      return
    }
    setError('')
  }
  return (
    <div className='flex justify-center items-center h-screen '>
        <div className='border rounded-md shadow-xl h-96 w-72 pt-6 pl-6' >
           <GenericInput labelName='UserName:'
           id='LoginUserName'
           className='border-0 border-gray-300 focus:border-2 focus:border-black outline-none w-56 shadow-md rounded-md mb-4 pl-2 placeholder-gray-300'
           labelClassName='font-semibold text-sm'
           placeholder='Enter the username'
           value={username}
           onChange={(e)=>setUserName(e.target.value)}/>
            <br/>
            <div className='relative w-56'>
            <label htmlFor='LoginPassword' className='font-semibold text-sm'>Password:</label>
            <br/>
            <input 
              id='LoginPassword'
              className='border-0 border-gray-300 focus:border-2 focus:border-black outline-none w-56 shadow-md rounded-md 
              pl-2 placeholder-gray-300 mb-1'
              placeholder='Enter the Password'
              type={visiblePassword?'password':'text'}
              value={password}
              onChange={(e)=>setPassword(e.target.value)}/>
          <div className=''onClick={togglePassword}>
          <button className='absolute bottom-0 right-0 mr-1 mb-2 h-4 '><FontAwesomeIcon className='pb-1' icon={visiblePassword?faEyeSlash:faEye}/></button>
          </div>
          </div>
            <div className='flex justify-end pr-9 mb-4'>
            <a href='#' className='text-black text-sm'>Forgot Password?</a>
            </div>
            {error && <p className="text-red-500 text-xs mt-2">{error}</p>}
            <button className='shadow-md w-56 rounded-md 
            bg-gradient-to-r from-blue-300 to-purple-600 hover:from-blue-700 hover:to-purple-700
             text-white text-semibold' onClick={handleSubmit}>Login</button>
             <div className='pl-16 mt-5'>
               <p className='text-sm'>or signup using</p>
             </div>
             <div className='pl-16 pt-1'>
             <button className='w-6 h-6 mr-2'><FontAwesomeIcon icon={faFacebook} className='w-6 h-6' /></button>
             <button className='w-6 h-6 mr-2'>
             <FontAwesomeIcon icon={faSquareXTwitter} className='w-6 h-6' /></button>
             <button className='w-6 h-6 mr-2'>
             <FontAwesomeIcon icon={faSquareGooglePlus} className='w-6 h-6' /></button>
             </div>
             <div className='pl-11 mt-10'>
               <p className='text-sm'>Not registered?<Link to='/Signup' className='text-black hover:text-blue-400 hover:text-blue-400 hover:underline underline-offset-2'> Signup</Link></p>
        </div>
        </div>  
    </div>
    
  )
}

export default Login