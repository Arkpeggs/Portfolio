import React from "react";
import "../../App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from "react-router-dom";


const mainPage = () => {
    return (

            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <span id="logo" className="navbar-brand">Arkisha Peggs</span>
                 <ul class="navbar-nav ml-auto mt-2 mt-lg-0">
             <li class="nav-item">
              <Link to="/Contact">Contact</Link> 
             </li>

             <li class="nav-item">
              <Link to="/Portfolio">Portfolio</Link>
             </li>
             <li class="nav-item">
              <Link to="/About">About</Link>
             </li>
             <li class="nav-item">
             <a target="_blank" href="https://drive.google.com/file/d/1vVF1XmhBkIpEInlFw5smb4gx6u3rhD3G/view?usp=sharing">Resume</a>
            </li>
           </ul>
            </nav>


    )
}
export default mainPage