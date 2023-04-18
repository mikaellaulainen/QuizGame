import { Navigate } from 'react-router-dom'
import Loginform from '../components/Loginform'


const Home = ({ user,handleLogin,handleUsername,handlePassword,username,password,error }) => {
  if(user){
    return <Navigate to='/game'/>
  }
  return (
    <div className="Home vh-100 pt-lg-5">
      <Loginform handleLogin={handleLogin} handleUsername={handleUsername} handlePassword={handlePassword} password={password} username={username} error={error}/>
    </div>
  )
}

export default Home