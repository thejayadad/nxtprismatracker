'use client'
import React from 'react'
import {FiArrowDown} from "react-icons/fi"

const NoWorkoutMessage = () => {
  return (
    <div className="flex flex-col items-center cursor-pointer"
    style={{
        marginTop: '-100px'
    }}
    
    >
    <img 
    src='../logo.png'
    className='h-[400px]'
        style={{
            marginBottom: '-100px'
        }}
    alt='Logo'
    />
    <h2 
    
    className="text-center text-grey">
      No Workouts Posted Yet, Post your first workout today!
    </h2>
    <h2 
    
    className="text-center flex items-center flex-col text-grey">
        Create A Workout Below <br />
        <FiArrowDown className="text-primary text-5xl pulsate" />
    </h2>
    
  </div>
  )
}

export default NoWorkoutMessage