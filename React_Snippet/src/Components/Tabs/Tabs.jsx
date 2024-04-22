import React,{useState,useEffect, useCallback} from 'react'

function Tabs() {
  const [currentTab,setCurrentTab]=useState(0)

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



  return (
    <>
    <div className='bg-tabsColor w-11/12 rounded-md shadow-md ml-5 mt-3'>
    <div className='flex space-x-2 flex-wrap justify-start border-b-2 border-white-500'>
      {Para.map((ele)=>( <button className={`relative h-full text-gray-500 hover:text-sky-700 ${currentTab===ele.id?'underline decoration-2 decoration-sky-500':'none'} pt-0.5 `} onClick={()=>setCurrentTab(ele.id)} key={ele.id}>{ele.button}</button>))
  }
     
    </div>
    <div className='mt-2'>
      {
        <p className='text-textColor pb-2'>{Para[currentTab].text}
        </p>
      }
    </div>
    </div>
    </>
  )
}

export default Tabs