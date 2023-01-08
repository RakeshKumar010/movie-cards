import React from "react";
import Header from "./components/Header";
import Movies from "./components/Movies";
import './App.css'
import Data from './movie.json';

export default function App(){
  return(<>
  <div className="head">
     <Header/>
    
  </div>
 <br /><br /><br />
  <div className="main">
   {Data.map((element)=>{
    return(<Movies Poster={element.Poster} Year={element.Year} Title={element.Title}/>)
   })}
  
  </div>
  
  </>)
}