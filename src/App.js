import React from 'react'
import Home from "./Home"
import Error from './Error'
import SingleMovie from './SingleMovie'
import { Routes, Route} from "react-router-dom"
import Favorites from './Favorites';
import "react-notifications/lib/notifications.css"
import {NotificationContainer} from "react-notifications";


const App = () => {
  return <>
  {/* Notification Creator */}
  <div>
    <NotificationContainer/>
  </div>
    <Routes>
      <Route path="/" element = {<Home/>}/>
      <Route path="/movie/:id" element={<SingleMovie/>} />
      <Route path='/Favorites' element={<Favorites/>}/>
    </Routes>

  </>
}

export default App