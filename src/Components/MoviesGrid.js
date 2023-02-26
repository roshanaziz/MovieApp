import React, {useContext} from 'react'
import "./Movies.css"
import { AppContext } from '../Context'
import { Link, NavLink } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

 // Creates the Grid for Movies on the Home Page
 const MoviesGrid = (props) => {
    let navigate = useNavigate();
  const {movie} = useContext(AppContext)
  return <>
  <section className="movie-page">
        <div className="grid grid-4-col">
            { movie?.length > 0 && movie?.map((curMovie)=> {
                const {imdbID, Title, Year, Poster} = curMovie;
                return(
                    <div key={imdbID}>
                        <div className='card' onClick={()=> navigate('movie/' + imdbID, {state:{curMovie}}) }>
                            <img className='poster' src={Poster} alt={imdbID}/>
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
    </section>
  </>
}

export default MoviesGrid
