import React,{useState} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome' 
import { faBars, faClose,faRightFromBracket } from '@fortawesome/free-solid-svg-icons'
function Sidebar() {
    const[active,setActive]=useState(0)
    const Slide=()=>{
        active==0?setActive(1):setActive(0)
    }
    const menu=[
        {
            id:"Menu",
            text:"Menu"
        },
        {
            id:"About",
            text:"About"
        },
        {
            id:"Home",
            text:"Home"
        }
    ]
  return (
    <>
    <div className='flex justify-start '>
    
        <div className={`flex justify-between ${active==0?'transform translate-x-[-90%] ':'transform translate-x-[0] border-r-2 border-secondary w-40'} duration-300 h-screen `}>
            <div className={`flex flex-col justify-between ${active==0?'border-r-2 border-primary':''} h-full w-full`}>
                <div>
                {menu.map((ele)=>(
                    <div className='h-auto w-full text-center font-semibold pt-2 ' key={ele.id}>{ele.text}</div>
                ))}
                </div>
            <div className='font-semibold pl-7 pb-3' ><FontAwesomeIcon icon={faRightFromBracket} /> Logout</div>
            </div>
                <button className={`bg-primary ${active==0?'rounded-r-md':'rounded-l-md'} h-10 w-5 self-center text-textColor`} onClick={Slide}>{active==0?'>':'<'}</button>
        </div>
        </div>
        
        
    </>
    
  )
}

export default Sidebar