/* IMPORT PACKAGES AND STYLING */
import { Routes, Route, Navigate } from 'react-router-dom'
import './App.css'

/* IMPORT COMPONENTS */
import NavBar from './Components/NavBar'
import Home from './Components/Home'
import Show from './Components/Show'
import New from './Components/New'
import Edit from './Components/Edit'


function App() {
 
  return (
      <div>
       <NavBar />
       <Routes>
          <Route path='/' element={<Navigate to='/bookmarks' replace/>}/>
          <Route path='/bookmarks' element={ <Home /> }/>
          <Route path='/bookmarks/new' element={<New />}/> 
          <Route path='/bookmarks/:index' element={<Show />}/> 
          <Route path='/bookmarks/:index/edit' element={<Edit />}/> 
       </Routes>
      </div>
  )
}

export default App

// listen and mount components (Route Links)
// Link to click somewhere else
// Navigate somehwere after an action
// Params that will fire 