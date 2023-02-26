import React, {useContext, useEffect, useState } from "react";

// const API_URL =`http://www.omdbapi.com/?apikey=${process.env.REACT_APP_API_KEY}`
const API_URL = `http://www.omdbapi.com/?apikey=2ff0c97a`

const AppContext = React.createContext()


const AppProvider = ({children}) => {

    const [isLoading,setIsLoading] = useState(true);
    const [movie,setMovie] = useState([]);
    const [isError,setIsError] = useState({show: "false",msg: "" });
    const [query,setQuery] = useState("titanic");
    const [favorites,setFavorites] = useState([])


    const getMovies = async(URL)=>{
        try {
            const result = await fetch(URL);
            const data = await result.json();
            if(data.Response === "True"){
                setIsLoading(false);
                setMovie(data.Search);
            }else{
                setIsError({show: true, msg: data.error})
            }
            console.log(data)
            
        }catch (error){
            console.log(error);
        }
    }

    useEffect(() =>{
        getMovies(`${API_URL}&s=${query}`);

    },[query])

    useEffect(()=>{
        const movieFavorites = JSON.parse(
            localStorage.getItem('react-movie-app-favorites')
        );

        if(movieFavorites){
            setFavorites(movieFavorites);
        }
    },[])

    return (<
        AppContext.Provider value= {{isLoading,isError,movie,query,setQuery,favorites,setFavorites}}
        >{children}</AppContext.Provider>  

        );
        
};

export{AppContext,AppProvider};