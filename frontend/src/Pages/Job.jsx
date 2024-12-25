import Filter from './components/Filter'
import Navbar from './components/Navbar'

export default function Job() {
  return (
    <>
      <Navbar/>
      <div className='flex flex-row'>
        <Filter/>
      </div>
    </>
  )
}
