import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { GoogleOAuthProvider } from '@react-oauth/google'
import Thumbnail from './Pages/Thumbnail'
import Login from './Auth/Pages/Login'
import Signup from './Auth/Pages/Signup'
import Dashboard from './Pages/Dashboard'
import { AuthProvider } from './Auth/store/AuthContext'
import { ToastProvider } from './components/ToastContext'
import { ProtectedRoute, PublicRoute } from "./Auth/Components/ProtectedRoute"


const GoogleAuthWrapper = ({ Component }) => {
  return (
    <GoogleOAuthProvider clientId={import.meta.env.VITE_GOOGLE_CLIENT_ID}>
      <Component />
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
    element: <PublicRoute>
      <GoogleAuthWrapper Component={Signup} />
    </PublicRoute>
  },
  {
    path: "/login",
    element: <PublicRoute>
      <GoogleAuthWrapper Component={Login} />
    </PublicRoute>
  },
  {
    path: "/dashboard",
    element: <ProtectedRoute>
      <Dashboard/>
    </ProtectedRoute>
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
