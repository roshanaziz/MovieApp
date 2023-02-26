import React, { useContext, useState } from 'react'
import { useParams } from 'react-router-dom'
import { AppContext } from './Context';
import { useLocation } from 'react-router-dom';
import Header from './Components/Header';
import "./Components/SingleMovie.css"
import { AiFillHeart } from "react-icons/ai";
import Movies from './Components/Movies';
import {NotificationManager} from "react-notifications";

const SingleMovie = () => {
  let location = useLocation();
    const {id} = useParams();
    // console.log("loc is",location)
    let data = location?.state;
  //  console.log("data",data);
   const {curMovie,props} = data;


   const {imdbID, Title,Type, Year, Poster} = curMovie;
   const {favorites,setFavorites} = useContext(AppContext);
   const {exists,setExists} = useState(false);

    const showError = () => {
      NotificationManager.error("Removed from Favorites","",1000)
    };

    const showSuccess = () => {
      NotificationManager.success("Added to Favorites","",1000)
    };


   console.log(favorites);

  return <>
  <div><Header/></div>
  <div>   
    <button 
    className="heart"
    onClick={() => {
        const isFound = favorites.some(e => {
          return e.imdbID === curMovie.imdbID;
        })
          if (isFound){
            showError()
            const newFavoriteList = favorites.filter(
              (favourite) => favourite.imdbID !== curMovie.imdbID
            );
        
            setFavorites(newFavoriteList);
            localStorage.setItem('react-movie-app-favorites',JSON.stringify(newFavoriteList))
          }
          else{
          const newFavoriteList = [...favorites,curMovie]
          setFavorites(newFavoriteList)
          showSuccess()
          localStorage.setItem('react-movie-app-favorites',JSON.stringify(newFavoriteList))
          }
          
      //   }
      // })


    } }
    ><AiFillHeart style={{color: 'white'}}/></button>         
    <div className='mCard'>
      <img className='mPoster' src={Poster} alt={imdbID}/>
    </div>
    <div className='card-info'>
    <h4 className='mName'>{Title}</h4>
    <p className='mYear'>{Year}</p>
    <p className='type'>{Type}</p>
    </div>            
  </div>
  </>
}

export default SingleMovie