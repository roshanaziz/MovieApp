import React, { useContext } from 'react'
import { AppContext } from './Context'
import Movies from './Components/Movies'
import Header from './Components/Header'
import "./App.css"
import MoviesGrid from './Components/MoviesGrid'
import Search from './Search'

// Creates the Home Page
const Home = () => {
  return<>
    <div><Header/></div>
    <div><Search/></div>
    {/* <div>
      <h3>Recommendations For You</h3>
      <Movies/>
    </div> */}
    <div>
      <h3>Movies</h3>
      <MoviesGrid/>
    </div>

  </>
}

export default Home