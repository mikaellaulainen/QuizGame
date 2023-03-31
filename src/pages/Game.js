import { Button } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'

const Game = () => {

  return (
    <div className="game">
      <p>Here we should have quiz options,and possibility to make own quiz</p>
      <LinkContainer to='/create'>
        <Button>Create your own quiz</Button>
      </LinkContainer>
    </div>
  )
}

export default Game