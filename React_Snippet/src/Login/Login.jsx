import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faSquareXTwitter,faSquareGooglePlus } from '@fortawesome/free-brands-svg-icons'
import {Link} from 'react-router-dom'
function Login() {
  return (
    <div className='flex justify-center items-center h-screen '>
        <div className='border rounded-md shadow-xl h-96 w-72 pt-6 pl-6' >
            <label htmlFor='LoginUserName'className='font-semibold text-sm'>UserName:</label>
            <br/>
            <input 
            className='border-0 border-gray-300 focus:border-2 focus:border-black outline-none w-56 shadow-md rounded-md mb-4 pl-2 placeholder-gray-300'
            id='LoginUserName'
            type='text'
            placeholder='Enter the username'/>
            <br/>
            <label htmlFor='LoginPassword' className='font-semibold text-sm'>Password:</label>
            <br/>
            <input
            className='border-0 border-gray-300 focus:border-2 focus:border-black outline-none w-56 shadow-md rounded-md 
            pl-2 placeholder-gray-300 mb-1'
            id='LoginPassword'
            type='password'
            placeholder='Enter the Password'/>
            <div className='flex justify-end pr-9 mb-4'>
            <a href='#' className='text-black text-sm'>Forgot Password?</a>
            </div>
            <button className='shadow-md w-56 rounded-md 
            bg-gradient-to-r from-blue-300 to-purple-600 hover:from-blue-700 hover:to-purple-700
             text-white text-semibold'>Login</button>
             <div className='pl-16 mt-5'>
               <p className='text-sm'>or signup using</p>
             </div>
             <div className='pl-16 pt-1'>
             <FontAwesomeIcon icon={faFacebook} className='w-6 h-6 mr-2' />
             <FontAwesomeIcon icon={faSquareXTwitter} className='w-6 h-6 mr-2' />
             <FontAwesomeIcon icon={faSquareGooglePlus} className='w-6 h-6 mr-2' />
             </div>
             <div className='pl-11 mt-10'>
               <p className='text-sm'>Not registered?<Link to='/Signup' className='text-black hover:text-blue-400 hover:text-blue-400 hover:underline underline-offset-2'> Signup</Link></p>
        </div>
        </div>  
    </div>
  )
}

export default Login