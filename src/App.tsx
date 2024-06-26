
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import { Data } from './pages/Data';
import { Login } from './pages/Login';

function App() {

  return (
    <div>
      <h1 className='text-amber-500'>Agency Amazon Test Task</h1>

      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/data" element={<Data />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </Router>

    </div>
  )
}

export default App
