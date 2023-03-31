import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import { Link } from 'react-router-dom'


const Loginform = ({ handleUser }) => {
  return (
    <Form onSubmit={handleUser} className='border border-dark p-3 col-11 col-md-8 col-lg-4 col-xl-3 mx-auto'>
      <Form.Group>
        <Form.Label>Email address</Form.Label>
        <Form.Control type='email' placeholder='example@example.com'/>
      </Form.Group>
      <Form.Group>
        <Form.Label>Password</Form.Label>
        <Form.Control type='password' placeholder='Password'/>
      </Form.Group>
      <div className='text-center'>
        <Button type='submit' className='login-btn my-3 btn-lg px-5 btn-dark'>Login</Button>
      </div>
      <div className="text-center">
        <Form.Text className='h5'>
          Dont have account? <Link to='/register'>Register!</Link>
        </Form.Text>
      </div>
    </Form>
  )
}

export default Loginform