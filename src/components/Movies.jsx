import React from 'react'

export default function Movies(props) {
  return (
    <>
    <div className="movie">
    
        <img src={props.Poster} alt="Poster" />
        
        <p>{props.Title}</p>
        <p>Year:{props.Year}</p>
    </div>
    </>
  )
}
