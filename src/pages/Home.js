import { useState } from 'react'
import Loginform from '../components/Loginform'
import { Navigate } from 'react-router-dom'

const Home = () => {
  const [user,setUser] = useState(false)

  if(user){
    console.log('Logging in')
    return <Navigate to='/game'/>
  }

  return (
    <div className="Home">
      <p className='text-center h3 py-3'>Welcome to Quizgame</p>
      <Loginform type="Login" handleUser={() => setUser(true)}/>
    </div>
  )
}

export default Home