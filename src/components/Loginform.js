import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import { Link } from 'react-router-dom'
import Logo from '../img/logo-black.png'

const Loginform = ({ error,handleLogin,handleUsername,handlePassword,password,username }) => {


  return (
    <Form onSubmit={handleLogin} className='login-form border border-dark p-3 col-12 col-md-8 col-lg-4 col-xl-3 mx-auto'>
      <Form.Group className='text-center'>
        <img src={Logo} alt="" />
      </Form.Group>
      <Form.Group>
        <Form.Label>Username</Form.Label>
        <Form.Control value={username} onChange={handleUsername} type='text' placeholder='Username'/>
      </Form.Group>
      <Form.Group>
        <Form.Label>Password</Form.Label>
        <Form.Control value={password} onChange={handlePassword} type='password' placeholder='Password'/>
      </Form.Group>
      {error &&
        <div className="login-error p-3 mt-3">
          <p>{error}</p>
        </div>
      }
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