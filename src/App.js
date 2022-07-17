import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import Home from './pages/Home/Home'
import Desktop from './pages/Desktop/Desktop'
import BigBang from './pages/BigBang/BigBang'
import Anthonying from './pages/Anthonying/Anthonying'


function App() {

  return (
  
    <Router>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/thinkrOS" element={<Desktop />} />
        <Route path="/bigbang" element={<BigBang />} />
        <Route path="/nicetry" element={<Anthonying />} />
      </Routes>
    </Router>
  )
}

export default App;

/*      <Route
            path ="/thinkrOS"
            element={loggedIn? <Navigate to="/thinkrOS "/> : <Navigate to="/nicetry"/>}
        />
        

        <Route
            path ="/bigbang"
            element={unlockedVault ? <Navigate to="/bigbang "/> : <Navigate to="/nicetry"/>}
        />

        <Route path="/thinkrOS" element={<Desktop />} />
        <Route path="/bigbang" element={<BigBang />} />
*/
