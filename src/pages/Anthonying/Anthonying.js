import React from 'react'
import AnthonyImage from '../../images/Anthonying.jpeg'
import {AnthonyPic, Container, HaHaText} from './Anthonying.elements'

const Anthonying = () => {

  return (
    <>
      <Container>
      <AnthonyPic src={AnthonyImage}/>
      <HaHaText>uh uh uh...you didn't say the magic word!</HaHaText>
      </Container>
    </>
  )
}

export default Anthonying
