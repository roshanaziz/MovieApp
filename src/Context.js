import React, {useContext, useEffect, useState } from "react";

const API_URL = `http://www.omdbapi.com/?apikey=2ff0c97a`

const AppContext = React.createContext()


const AppProvider = ({children}) => {
    // All the States
    const [isLoading,setIsLoading] = useState(true);
    const [movie,setMovie] = useState([]);
    const [isError,setIsError] = useState({show: "false",msg: "" });
    const [query,setQuery] = useState("titanic");
    const [favorites,setFavorites] = useState([])

    // Gets Movies from API
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

    // Calls Get Movies and constantly refreshes for Search
    useEffect(() =>{
        getMovies(`${API_URL}&s=${query}`);

    },[query])

    // Connects with Local Storage
    useEffect(()=>{
        const movieFavorites = JSON.parse(
            localStorage.getItem('react-movie-app-favorites')
        );

        if(movieFavorites){
            setFavorites(movieFavorites);
        }
    },[])

    // App Provider, provides States
    return (<
        AppContext.Provider value= {{isLoading,isError,movie,query,setQuery,favorites,setFavorites}}
        >{children}</AppContext.Provider>  

        );
        
};

export{AppContext,AppProvider};