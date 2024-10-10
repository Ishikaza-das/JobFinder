import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Thumbnail from './Pages/Thumbnail.jsx'
import Login from './User/Pages/Login.jsx'

const router = createBrowserRouter([
  {path: "/",element:<App/>, children:[
    {path:"/",element:<Thumbnail/>},
    {path:"/login",element:<Login/>}
  ]}
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
    {/* <App /> */}
  </StrictMode>,
)
