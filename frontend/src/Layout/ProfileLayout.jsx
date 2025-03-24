import { Outlet } from 'react-router-dom'
import UnavBar from '../User/components/UnavBar'

const ProfileLayout = () => {
  return (
    <div className="flex h-screen"> 
      <UnavBar/>
      <div className="flex-1">
        <Outlet/>
      </div>
    </div>
  )
}

export default ProfileLayout
