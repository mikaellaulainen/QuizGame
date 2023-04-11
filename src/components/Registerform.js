import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import registerService from '../services/register'
import { useState } from 'react'

const Loginform = () => {
  const [usermail,setUsermail] = useState('')
  const [firstname,setFirstname] = useState('')
  const [lastname, setLastname] = useState('')
  const [password,setPassword] = useState('')

  const createUser = (e) => {
    console.log(firstname,lastname)
    e.preventDefault()
    const newUserObject = {
      fullname: (firstname,lastname),
      password: password,
      usermail: usermail
    }
    registerService.createUser(newUserObject)
  }
  return (
    <Form onSubmit={createUser} className='border border-dark p-3 col-11 col-md-8 col-lg-4 col-xl-3 mx-auto'>
      <Form.Group>
        <Form.Label>Firstname</Form.Label>
        <Form.Control value={firstname} onChange={({ target }) => setFirstname(target.value)} type='text' placeholder='Firstname'/>
        <Form.Label>Lastname</Form.Label>
        <Form.Control value={lastname} onChange={({ target }) => setLastname(target.value)} type='text' placeholder='Lastname'/>
      </Form.Group>
      <Form.Group>
        <Form.Label>Email address</Form.Label>
        <Form.Control value={usermail} onChange={({ target }) => setUsermail(target.value)} type='email' placeholder='example@example.com'/>
      </Form.Group>
      <Form.Group>
        <Form.Label>Password</Form.Label>
        <Form.Control value={password} onChange={({ target }) => setPassword(target.value)} type='password' placeholder='Password'/>
      </Form.Group>
      <div className='text-center'>
        <Button type="submit" className='login-btn my-3 btn-lg px-5 btn-dark'>Register</Button>
      </div>
    </Form>
  )
}

export default Loginform