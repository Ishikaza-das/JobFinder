import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { GoogleOAuthProvider } from '@react-oauth/google'
import Thumbnail from './Pages/Thumbnail'
import Login from './Auth/Pages/Login'
import Signup from './Auth/Pages/Signup'
import Dashboard from './Pages/Dashboard'
import { AuthProvider } from './Auth/store/AuthContext'
import { CompanyAuthProvider } from './Auth/store/CompanyAuthContex'
import { ToastProvider } from './components/ToastContext'
import { ProtectedRoute } from "./Auth/Components/ProtectedRoute"
import {  CompanyProtectedRoute } from "./Auth/Components/ProtectedRoute"
import Job from './Pages/Job'
// import GoogleLogin from './Auth/Components/GoogleLogin'
import Profile from './User/pages/Profile'
import CompanySignup from './Auth/Pages/CompanySignup'
import CompanyLogin from './Auth/Pages/CompanyLogin'
import CompanyDetails from './Auth/Pages/CompanyDetails'
import ValidateEmail from './Auth/Components/ValidateEmail'
import CompanyDashboard from './Pages/CompanyDashboard'


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
    element: 
      <GoogleAuthWrapper Component={Signup} />
  },
  {
    path: "/login",
    element: 
      <GoogleAuthWrapper Component={Login} />
  },
  {
    path: "/dashboard",
    element: <ProtectedRoute>
      <Dashboard/>
    </ProtectedRoute>
  },
  {
    path: "/jobs",
    element: <ProtectedRoute>
      <Job/>
    </ProtectedRoute>
  },
  {
    path:"/profile",
    element: <ProtectedRoute>
      <Profile/>
    </ProtectedRoute>
  },
  {
    path:"/post-job/signup",
    element:
      <CompanySignup/>
  },
  {
    path:"/post-job/login",
    element:
      <CompanyLogin/>
  },
  {
    path:"/post-job/details",
    element:
    <CompanyProtectedRoute>
      <CompanyDetails/>
    </CompanyProtectedRoute>
  },
  {
    path:"/post-job/validate",
    element:
      <ValidateEmail/>
  },
  {
    path:"/company/dashboard",
    element: <CompanyProtectedRoute>
      <CompanyDashboard/>
    </CompanyProtectedRoute>
  }
])

function App() {
  return (
    <ToastProvider>
      <AuthProvider>
        <CompanyAuthProvider>
        <RouterProvider router={router}/>
        </CompanyAuthProvider>
      </AuthProvider>
    </ToastProvider>
  )
}

export default App
