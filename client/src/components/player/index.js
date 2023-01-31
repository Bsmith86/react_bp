import React from 'react'
import './index.css';


const Player = (props) => {
    
    let {whichPlayer, winner} = props
    return (
    <div className='player-container'>
      <h3>Player {whichPlayer}</h3>
      <p>Wins: {winner}</p>
    </div>
  )
}

export default Player
