import {createSlice} from '@reduxjs/toolkit'

const initialState={data:{},
currentApi:''}

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
        }
    }
})


export const { setGame, deleteGame} = gameSlice.actions
const reducers=gameSlice.reducer
export default reducers