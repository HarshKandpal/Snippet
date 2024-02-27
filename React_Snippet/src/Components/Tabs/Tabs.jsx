import React,{useState,useEffect} from 'react'

function Tabs() {
  const [currentTab,setCurrentTab]=useState(0)
  const[statement,setText]=useState('')
  const[ind,setInd]=useState(0)
  const [buttonClick,setButtonClick]=useState(true)

  const Para=[
    {
      id:0,
      button:'Tab1',
      text:'You can also use variant modifiers to target media queries like responsive breakpoints, dark mode, prefers-reduced-motion, and more. For example, use md:scroll-p-0 to apply the scroll-p-0 utility at only medium screen sizes and above.'
    },
    {
      id:1,
      button:'Tab2',
      text: 'You can also use a tool like degit to scaffold your project with one of the templates. Assuming the project is on GitHub and uses main as the default branch, you can create a local copy using:'
    }
  ]

  useEffect(()=>{
    let timer=setTimeout(() => {
        
        if(ind<Para[currentTab].text.length && buttonClick){
            setText((ele)=>ele+Para[0].text.charAt(ind))
            setInd((ind)=>ind+1);
        }
        else{
          setText('')
          setInd(0)
             clearInterval(timer)
        }
    }, 100);

},[ind,buttonClick])

const tabChange=(id)=>{
  setButtonClick(false)
  setText('')
  setInd(0)
  setCurrentTab(id)

  setTimeout(() => {
    setButtonClick(true);
  }, 10);
  
}
  
  return (
    <>
    <div className='bg-tabsColor w-11/12 rounded-md shadow-md ml-5 mt-3'>
    <div className='flex space-x-2 flex-wrap justify-start border-b-2 border-white-500'>
      {Para.map((ele)=>( <button className={`relative h-full text-gray-500 hover:text-sky-700 ${currentTab===ele.id?'underline decoration-2 decoration-sky-500':'none'} pt-0.5 `} onClick={()=>tabChange(ele.id)} key={ele.id}>{ele.button}</button>))
  }
     
    </div>
    <div className='mt-2'>
      {
        <p className='text-textColor pb-2'>{statement}
        </p>
      }
    </div>
    </div>
    </>
  )
}

export default Tabs