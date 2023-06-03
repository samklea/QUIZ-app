import React from 'react'
import Q1 from './Q1'
import Pattern from './Pattern'
import '../Component/Book.css'

const Book = () => {
  return (
   <div>
            <div className="left">
                <Q1/>
                <h3>Which type of JavaScript language is</h3>
    <br></br>
    <input type="radio"></input><label>Object-oriented</label> 
    <br></br>
    <input type="radio"></input><label>Machine-language</label>
    <br></br>
    <input type="radio"></input><label>Assembly-language</label>
    <br></br>
                
            </div>
            <div className="right">
                <Pattern/>
            </div>
        </div>
  )
}

export default Book