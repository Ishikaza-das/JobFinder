import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { GoogleOAuthProvider } from '@react-oauth/google'
import Thumbnail from './Pages/Thumbnail'
import Login from './Auth/Pages/Login'
import Signup from './Auth/Pages/Signup'
import Dashboard from './Pages/Dashboard'
import { AuthProvider } from './Auth/store/AuthContext'
import { ToastProvider } from './components/ToastContext'

const GoogleAuthWrapper = () => {
  return (
    <GoogleOAuthProvider clientId={import.meta.env.VITE_GOOGLE_CLIENT_ID}>
      <Login/>
    </GoogleOAuthProvider>
  )
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <Thumbnail/>
  },
  {
    path: "/signup",
    element: <Signup/>
  },
  {
    path: "/login",
    element: <GoogleAuthWrapper/>
  },
  {
    path: "/dashboard",
    element: <Dashboard/>
  }
])

function App() {
  return (
    <ToastProvider>
      <AuthProvider>
        <RouterProvider router={router}/>
      </AuthProvider>
    </ToastProvider>
  )
}

export default App
