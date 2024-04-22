import {configureStore} from '@reduxjs/toolkit'
import reducers from './Slice.js'
const store=configureStore({
    reducer: reducers
})

export default store