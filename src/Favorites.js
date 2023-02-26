import React from 'react'
import Header from './Components/Header'
import FavoriteGrid from './Components/FavoriteGrid'
import { useParams } from 'react-router-dom'

const Favorites = () => {

  return <>
    <div><Header/></div>
    <div>
        <h3>Favorites</h3>
        <FavoriteGrid/>
    </div>
    </>
}

export default Favorites