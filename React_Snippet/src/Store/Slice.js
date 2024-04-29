import {createSlice} from '@reduxjs/toolkit'

const initialState={data:{},
currentApi:'',
session:null,
isLoggedin:false}

const gameSlice=createSlice({
    name:'gameSlice',
    initialState,
    reducers:{
        setGame(state,action){
            state.push(action.payload)
            state.currentApi=action.payload
            // state.data=action.payload.game
        },
        deleteGame(state){
            state.data={}
            // state.data=action.payload.game
        },
        setLogInUser(state,action){
            state.session=action.payload
            state.isLoggedin=true
        },
        setLogOutUser(state){
            state.session=null
            state.isLoggedin=false
        }

    }
})


export const { setGame, deleteGame,setLogInUser,setLogOutUser} = gameSlice.actions
const reducers=gameSlice.reducer
export default reducers