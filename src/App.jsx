import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Groups from './pages/Groups'
import Activities from './pages/Activities'
import Community from './pages/Community'
import Log from './pages/Log'
import Scan from './pages/Scan'

function App() {
  return (
    <Routes>
      <Route path = "/" element = {<Home/>}/>
      <Route path = "/groups" element = {<Groups/>}/>
      <Route path = "/activities" element = {<Activities/>}/>
      <Route path = "/community" element = {<Community/>}/>
      <Route path = "/log" element = {<Log/>}/>
      <Route path = "/scan" element = {<Scan/>}/>
    </Routes>
  )
}

export default App