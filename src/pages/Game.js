import { Button } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'

const Game = ({ logout }) => {

  return (
    <div className="game">
      <p>Here we should have quiz options,and possibility to make own quiz</p>
      <LinkContainer to='/create'>
        <Button>Create your own quiz</Button>
      </LinkContainer>
      <button onClick={logout}>Logout</button>
    </div>
  )
}

export default Game