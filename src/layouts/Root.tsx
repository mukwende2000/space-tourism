import { Outlet } from 'react-router-dom'
import Header from '../components/Header'

function Root() {
  return (
    <div className="bg-home_m bg-cover md:bg-home_t lg:bg-home_d">
      <Header />
      <Outlet />
    </div>
  )
}

export default Root
