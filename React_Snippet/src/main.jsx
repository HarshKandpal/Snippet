import React from 'react'
import ReactDOM from 'react-dom/client'
import {createBrowserRouter,RouterProvider} from 'react-router-dom'
import App from './App.jsx'
import './index.css'
import {Provider} from 'react-redux'
import store from './Store/Store.js'
import Login from './Login/Login'
import Signup from './Signup/Signup.jsx'
import Home from './Components/Home.jsx'
const router=createBrowserRouter([
    {
        path:"/",
        element:<Login/>
    },
    {
        path:"/Signup",
        element:<Signup/>
    },
    {
        path:"/Home",
        element:<Home/>
    }
])
ReactDOM.createRoot(document.getElementById('root')).render(
    // <Provider store={store}>
    // <App />
    // </Provider>
    // <Login/>
    // <Signup/>
    <Provider store={store}>
    <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
  </Provider>
    
  
)
