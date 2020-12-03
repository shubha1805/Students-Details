
import React from "react";
import { useSelector } from "react-redux";
import './../App.css';


function About() {
  const profile = useSelector(state => state.profile)
  return (
    <div >
     <h1>SHUBHASHREE R</h1>
     <h2 className='mail'>email: shubhashree1805@gmail.com</h2>
     <hr className='line'/>
    </div>
  );
}

export default About;
