import { useState } from 'react'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import Question from '../components/Question'
import { Navigate } from 'react-router-dom'

const Create = () => {
  const [done,setDone] = useState(false)
  const [quizname,setQuizname] = useState('')
  const [question,setQuestion] = useState('')
  const [questions,setQuestions] = useState([])
  const [correct,setCorrect] = useState('')
  const [option2,setOption2] = useState('')
  const [option3,setOption3] = useState('')
  //Creating new quiz here
  const addQuestion = (e) => {
    e.preventDefault()
    console.log('Added new question')
    const questionObject = {
      questionName: question,
      correctAnswer: correct,
      wrongAnswer1: option2,
      wrongAnswer2: option3,
    }
    setQuestions(questions.concat(questionObject))
    setQuestion('')
    setCorrect('')
    setOption2('')
    setOption3('')
  }
  const postQuiz = (e) => {
    e.preventDefault()
    console.log('Posting your quiz to database')
    const quizObject = {
      quizname: quizname,
      questions: questions
    }
    console.log(quizObject)
    console.log('GOING TO  GAMEE')
    setDone(!done)
  }
  if(done){
    return <Navigate to='/game'/>
  }
  return (
    <div>
      <Form onSubmit={addQuestion} className='border border-dark col-6 mx-auto my-3 p-3'>
        <Form.Label>Create new Quiz</Form.Label>
        <Form.Control value={quizname} onChange={({ target }) => setQuizname(target.value)} type='text' placeholder='Quiz name'/>
        <Form.Label>Create new question</Form.Label>
        <Form.Control value={question} onChange={({ target }) => setQuestion(target.value)} className='my-3' type='text' placeholder='Question'/>
        <Form.Control value={correct} onChange={({ target }) => setCorrect(target.value)} className='my-3' type='text' placeholder='Correct answer'/>
        <Form.Control value={option2} onChange={({ target }) => setOption2(target.value)} className='my-3' type='text' placeholder='answer option 2'/>
        <Form.Control value={option3} onChange={({ target }) => setOption3(target.value)} className='my-3' type='text' placeholder='answer option 3'/>
        <Button type="submit">Add new question</Button>
      </Form>
      {questions.length > 0 &&
        <div className='mx-auto col-6'>
          <div>
            {questions.map(item => (
              <Question key={item.questionName} item={item}/>
            ))}
          </div>
          <Button onClick={postQuiz} className='mt-3'>Create Quiz</Button>
        </div>
      }
    </div>
  )
}

export default Create