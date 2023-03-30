import { Link } from "react-router-dom";
import React from "react";
import "./nav.css";
import Searchbar from "./searchbar";
import ShowsState from "../context/shows/showsState";

function Nav(){
    return(
        <div className="navbar">
            <span><Link to ="/">MOVIEZAPI</Link></span>
            <section>
            <Searchbar/>
            </section>

            <ul>
                <li className="navlinks">
                    <Link to ="/">Home</Link>
                </li>
            </ul>
        </div>
    )
}

export default Nav;