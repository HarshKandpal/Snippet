import { useState } from 'react'
import Tabs from './Components/Tabs/Tabs'
import Slidebar from './Components/Slidebar/Slidebar'
import Typing from './Components/Common/Typing'
import Sidebar from './Components/LetfMenu/Sidebar'
function App() {
   
  return (
    <>
    <div className='flex'>
      <div className=''>
      <Sidebar/>
       </div>
       <div className='flex-1 w-full border-2 border-secondary'>
          <Slidebar/>
          <Tabs/>
          {/* <Typing/> */}
       </div>
       </div>
      
     
      

    </>
  )
}

export default App


