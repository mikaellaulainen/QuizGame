import { Outlet } from 'react-router-dom'
/*import Topnav from '../components/Topnav' HIDDEN FOR DEVELOPMENT*/

const Layout = () => {
  return (
    <>
      {/*<Topnav/>*/}
      <Outlet/>
    </>
  )
}

export default Layout