import React from "react";
import './../App.css';
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

function Nav() {

    return (
        <nav class="navbar navbar-expand-sm  navbar-dark">
       <a class="navbar-brand" href="#">logo</a>
         <ul class="navbar-nav">
         <Link to={'/signUp'}> <li class="nav-item">
            <a class="nav-link" >Register/Login</a>
          </li>
          </Link>
        </ul>
      </nav>
    );
}

export default Nav;