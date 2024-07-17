import { Outlet } from 'react-router-dom'
import Sidebar from './Navbar'

const Root = () => {
  
  return (
    <>
      <div>
        <Sidebar>
        <Outlet />
        </Sidebar>
      </div>
    </>
  )
}

export default Root