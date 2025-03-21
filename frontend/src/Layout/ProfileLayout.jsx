import { Outlet } from 'react-router-dom'
import UnavBar from '../User/components/UnavBar'

const ProfileLayout = () => {
  return (
    <div className="flex h-screen"> {/* Added padding-top to account for navbar */}
      <UnavBar/>
      <div className="flex-1 overflow-y-auto">
        <Outlet/>
      </div>
    </div>
  )
}

export default ProfileLayout
