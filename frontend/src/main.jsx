import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Thumbnail from './Pages/Thumbnail.jsx'
import Login from './Auth/Pages/Login.jsx'
import Signup from './Auth/Pages/Signup.jsx'
import Dashboard from './Pages/Dashboard.jsx'

const router = createBrowserRouter([
  {path: "/",element:<App/>, children:[
    {path:"/",element:<Thumbnail/>},
    {path:"/signup",element:<Signup/>},
    {path:"/login",element:<Login/>},
    {path:"/dashboard",element:<Dashboard/>}
  ]}
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
    {/* <App /> */}
  </StrictMode>,
)
