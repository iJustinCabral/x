import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import Home from './pages/Home/Home'
import Desktop from './pages/Desktop/Desktop'

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/thinkrOS" element={<Desktop />} />
      </Routes>
    </Router>
  )
}

export default App;
