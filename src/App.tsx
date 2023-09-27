import './App.css'
import NavBar from './components/NavBar'
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Home from './routes/Home'
import News from './routes/News'
import Sports from './routes/Sports'
import Staff from './routes/Staff'
import Register from './routes/Register'
import Login from './routes/Login'
import ResetPass from './routes/ResetPass'
import ConfirmReset from './routes/ConfirmReset'
import Subscribe from './routes/Subscribe'
import BusinessPanel from './routes/BusinessPanel'
import NotFound from './routes/NotFound'

function App() {

  return (
    <BrowserRouter>
      <>
      <NavBar />
      <Routes>
      <Route path="/" Component={Home} />
      <Route path="/news" Component={News} />
      <Route path="/sports" Component={Sports} />
      <Route path="/staff" Component={Staff} />
      <Route path="/register" Component={Register} />
      <Route path="/login" Component={Login} />
      <Route path="/reset-password" Component={ResetPass} />
      <Route path="/confirm-reset-password" Component={ConfirmReset} />
      <Route path="/subscribe" Component={Subscribe} />
      <Route path="/business-panel" Component={BusinessPanel} />
      <Route path="*" Component={NotFound} />
      </Routes>
      </>
    </BrowserRouter>
  )
}

export default App
