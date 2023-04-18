import { useEffect, useState } from 'react'
import { Button, Row } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'
import { Navigate } from 'react-router-dom'
import quizService from '../services/getQuizzes'
import Quizinfo from '../components/Quizinfo'

const Game = ({ user,logout }) => {
  const [quizzes, setQuizzes] = useState([])
  if(!user){
    return <Navigate to='/'/>
  }

  useEffect(() => {
    quizService.getQuizzes().then(allQuizzes => {
      setQuizzes(allQuizzes)
      console.log(allQuizzes)
    })
  }, [])

  return (
    <div className="game">
      <p>Welcome {user.fullname}!</p>
      <p>Here we should have quiz options,and possibility to make own quiz</p>
      <LinkContainer to='/create'>
        <Button>Create your own quiz</Button>
      </LinkContainer>
      <button onClick={logout}>Logout</button>
      <Row className='text-center justify-content-center w-100'>
        {quizzes.map(quiz =>
          <Quizinfo key={quiz.id} quiz={ quiz }/>
        )}
      </Row>

    </div>
  )
}

export default Game