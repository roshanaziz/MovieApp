import React, { useContext } from 'react'
import { AppContext } from './Context';
import "./Components/Search.css"
import {FiSearch} from "react-icons/fi";

export const Search = () => {
  const {query,setQuery,isError} = useContext(AppContext)

  return <>
    <section className = 'search-section'>
        <form action='#' onSubmit={(e)=>e.preventDefault()}>
          <div className='searchBar'>
            <input 
            type="text"
            placeholder='Search Here'
            value = {query}
            onChange = {(e)=>setQuery(e.target.value)}
            />
            
          </div>
        </form>
        <div className='card-error'>
          <p>{isError.show && isError.msg}</p>
        </div>
        </section>
  </>;
}

export default Search;