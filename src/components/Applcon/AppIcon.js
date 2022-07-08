import React from 'react'
import { IconWrapper, Text, Image } from './AppIcon.elements'

function AppIcon (props) {

  return (
    <>
        <IconWrapper onClick = {props.onClick}>
            <Image src ={props.image} />
            <Text>
                {props.text}
            </Text>
        </IconWrapper>
    </>
  )
}

export default AppIcon
