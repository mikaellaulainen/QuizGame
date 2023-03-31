import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from './pages/Layout'
import Home from './pages/Home'
import Register from './pages/Register'
import Game from './pages/Game'
import Create from './pages/Create'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout/>}>
          <Route index element={<Home/>}/>
          <Route path='register' element={<Register/>}/>
          <Route path='game' element={<Game/>}/>
          <Route path='create' element={<Create/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App