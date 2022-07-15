import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import Home from './pages/Home/Home'
import Desktop from './pages/Desktop/Desktop'
import BigBang from './pages/BigBang/BigBang'
import Anthonying from './pages/Anthonying/Anthonying'

let enteredPassphrase = false;

let loggedIn = false;

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />

        <Route
            path ="/thinkrOS"
            element={loggedIn ? <Navigate to="/thinkrOS "/> : <Anthonying />}
        />

        <Route
            path ="/bigbang"
            element={enteredPassphrase ? <Navigate to="/bigbang "/> : <Anthonying />}
        />


      </Routes>
    </Router>
  )
}

export default App
;
