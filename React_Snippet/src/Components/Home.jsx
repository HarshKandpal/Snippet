import React from 'react'
import auth from '../Appwrite/AuthUtil';
import {useNavigate} from 'react-router-dom'
import {useSelector,useDispatch} from 'react-redux'
function Home() {
    const nav=useNavigate()
    const current=useSelector((state)=>state) 
    async function UserLogout(){
        const session=await auth.Logout()
        if(session){
            nav('/')
        }
    }
       function User(){
            console.log(current.session)
            console.log(current.isLoggedin)
       }
  return (
    <>
    <button className='border border-orange-400' onClick={UserLogout}>Logout</button>
    <button className='border border-orange-400' onClick={User}>hello</button>
    </>
  )
}

export default Home