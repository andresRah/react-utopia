import React from 'react'
import {NavBar} from '../NavBar'




export const Hero = (props) => {
  return (
    <div>
    <p>{props.saludo}</p> 
    <NavBar/>
    </div>
  )
}

