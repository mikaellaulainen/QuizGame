import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
const Create = () => {
  //Creating new quiz here
  return (
    <div>
      <Form className='border border-dark col-6 mx-auto my-3 p-3'>
        <Form.Label>Create new Quiz</Form.Label>
        <Form.Control type='text' placeholder='Quiz name'/>
        <Form.Label>First question</Form.Label>
        <Form.Control type='text' placeholder='Quiz name'/>
        <Form.Control type='text' placeholder='answer option 1'/>
        <Button className='my-3'>Create</Button>
      </Form>
    </div>
  )
}

export default Create