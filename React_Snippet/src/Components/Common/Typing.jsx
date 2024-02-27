import React ,{Component} from 'react'
import { useState } from 'react'
import { useEffect } from 'react'

function Typing() {
    const[active,setActive]=useState(0)
    const[statement,setText]=useState('')
    const[ind,setInd]=useState(0)

    const Para=[
        {
            id:0,
            text:"you can also use a tool like degit to scaffold your project with one of the templates. Assuming the project is on GitHub and uses main as the default branch, you can create a local copy using:"
        }
    ]
    useEffect(()=>{
        
            let timer=setTimeout(() => {
                if(ind<Para[active].text.length){
                    setText((ele)=>ele+Para[0].text.charAt(ind))
                    setInd((ind)=>ind+1);
                }
                else{
                     clearInterval(timer)
                }
            }, 100);
       
    },[ind])
  return (
    <>
    <div className='mt-2'>
        {statement}
    </div>
    </>
    
  )
}

export default Typing