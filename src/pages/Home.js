import { Navigate } from 'react-router-dom'
import Loginform from '../components/Loginform'


const Home = ({ user,handleLogin,handleUsername,handlePassword,username,password }) => {
  if(user){
    return <Navigate to='/game'/>
  }
  return (
    <div className="Home">
      <p className='text-center h3 py-3'>Welcome to Quizgame</p>
      <Loginform handleLogin={handleLogin} handleUsername={handleUsername} handlePassword={handlePassword} password={password} username={username}/>
    </div>
  )
}

export default Home