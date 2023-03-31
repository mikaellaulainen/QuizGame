import Navbar from 'react-bootstrap/Navbar'
import { LinkContainer } from 'react-router-bootstrap'

const Topnav = () => {
  return (
    <Navbar bg='dark' variant='dark'>
      <LinkContainer to="/">
        <Navbar.Brand className='ms-3'>Quizgame</Navbar.Brand>
      </LinkContainer>
    </Navbar>
  )
}

export default Topnav