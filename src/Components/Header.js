import React from "react";
import { NavLink } from "react-router-dom";
import "./Header.css"
import Favorites from "../Favorites";



const Header = () => {
  return (
    <nav className="Header">
        <div className="Logo">
            <h1>
            <span>M</span>ovie
            <span>B</span>ase
            </h1>
        </div>
        <div className="Options">
            <ul>
                <li>
                    <a href="/">Home</a>
                </li>
                <li>
                    <a href="/Favorites">Favorites</a>
                </li>
            </ul>

        </div>
       
    </nav>
  )
}

export default Header