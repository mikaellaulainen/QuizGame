import { Button } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'
import { Navigate } from 'react-router-dom'

const Game = ({ user,logout }) => {
  if(!user){
    return <Navigate to='/'/>
  }
  return (
    <div className="game">
      <p>Welcome {user.fullname}!</p>
      <p>Here we should have quiz options,and possibility to make own quiz</p>
      <LinkContainer to='/create'>
        <Button>Create your own quiz</Button>
      </LinkContainer>
      <button onClick={logout}>Logout</button>
    </div>
  )
}

export default Game