import React, {useContext} from 'react'
import "./Movies.css"
import { AppContext } from '../Context'
import { Link, NavLink, useParams } from 'react-router-dom'
import { useNavigate, redirect} from 'react-router-dom'


 const FavoriteGrid = () => {
    let navigate = useNavigate();
  const {favorites} = useContext(AppContext)


  return <>
  <section className="movie-page">
        <div className="grid grid-4-col">
            { favorites?.length > 0 && favorites?.map((curMovie)=> {
                const {imdbID, Title, Year, Poster} = curMovie;
                return(
                    <div key={imdbID}>
                        <div className='card' 
                        // onClick={()=> {
                        //     const fullLink = window.location.href
                        //     fullLink.replace('Favroites',"")
                        //     console.log(fullLink)
                        //     const newURL = fullLink+'movie/'+imdbID;
                        //     history.pushState
                        //     navigate(newURL, {state:{curMovie}})
                        //     }}
                            >
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

export default FavoriteGrid
