import React, { useContext } from 'react'
import {NavLink} from "react-router-dom"
import { AppContext } from '../Context'
import "./Movies.css"
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'


// Creates a Horizontal Movie List to Recommend Movies
const Movies = () => {
    let navigate = useNavigate()
    const {movie} = useContext(AppContext)


  return <>
    <section className='Recommendations'>
    <div className='HideScroll'>
    <div className="list">

        { movie?.length > 0 && movie?.map((curMovie)=> {
        const {imdbID, Title, Year, Poster} = curMovie;
        return(
            <div key={imdbID}>
                <div className='card' onClick={()=> navigate('movie/' + imdbID, {state:{curMovie}}) }>
                    <img className='rPoster' src={Poster} alt={imdbID}/>
                </div>
                <div className='card-info'>
                <h4>{Title}</h4>
                <p>{Year}</p>
                </div>
            
            </div>
            )
        })

        }
    </div>
    </div>
    </section>
    
  </>
}

export default Movies