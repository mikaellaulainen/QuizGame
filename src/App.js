import { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import loginService from './services/login'
import Layout from './pages/Layout'
import Home from './pages/Home'
import Register from './pages/Register'
import Game from './pages/Game'
import Create from './pages/Create'

const App = () => {
  const [user,setUser] = useState(null)
  const [password,setPassword] = useState('')
  const [username,setUsername] = useState('')
  const [error,setError] = useState(null)

  const handleLogin = async (e) => {
    e.preventDefault()
    try {
      const user = await loginService.login({
        username,password
      })
      setUser(user)
      console.log('LOGIN SUCCESS')
    } catch (exception) {
      setError(exception.response.data.error)
    }
  }
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout/>}>
          <Route index element={<Home error={error} user={user} handleLogin={handleLogin} handleUsername={({ target }) => setUsername(target.value)} handlePassword={({ target }) => setPassword(target.value)}/>} password={password} username={username}/>
          <Route path='register' element={<Register/>}/>
          <Route path='game' element={<Game user={user} logout={() => setUser(null)}/>}/>
          <Route path='create' element={<Create/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App