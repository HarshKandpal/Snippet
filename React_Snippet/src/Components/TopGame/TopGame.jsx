import React from 'react'
import { useEffect } from 'react'
import {useSelector,useDispatch} from 'react-redux'
import { setGame, deleteGame} from '../../Store/Slice.js'
import IgdbApi from '../../Store/GameApi.js'
function TopGame() {  
    const current=useSelector((state)=>state.currentApi) 
    const body="fields name, rating,cover.*;sort rating desc;limit 5;";    
    const method='Post'
    useEffect(()=>{
        if(current!='Trending'){
            useDispatch(deleteGame())
            const data= IgdbApi(method,body)
            const currentApi='Trending'
            useDispatch(setGame(data,currentApi))
        }
    },[])
  return (
    <div>TopGame</div>
  )
}

export default TopGame