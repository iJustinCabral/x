import React from 'react'
import { IconWrapper, Text, Image } from './AppIcon.elements'

const AppIcon = ({image, text}) => {
  return (
    <>
        <IconWrapper>
            <Image src ={image} />
            <Text>
                {text}
            </Text>
        </IconWrapper>
    </>
  )
}

export default AppIcon