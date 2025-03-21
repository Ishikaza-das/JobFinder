import Filter from './components/Filter'
import JobList from './store/JobList'


export default function Job() {
  return (
    <>
      <div className='p-2 grid grid-cols-6 gap-4'>
        <div className='col-span-1'>
          <Filter/>
        </div> 
        <div className='col-span-5'>
          <JobList/>
        </div>
      </div>
    </>
  )
}
