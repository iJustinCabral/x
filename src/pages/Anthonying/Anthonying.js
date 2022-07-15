import React from 'react'
import AnthonyImage from '../../images/Anthonying.jpeg'
import wrong from '../../sounds/wrong.mp3'
import {AnthonyPic} from './Anthonying.elements'

const Anthonying = () => {

  return (
    <>

    <AnthonyPic src={AnthonyImage}/>

    <audio controls autoPlay loop>
      <source src={wrong} type="audio/mpeg" />
    </audio>

    </>
  )
}

export default Anthonying
