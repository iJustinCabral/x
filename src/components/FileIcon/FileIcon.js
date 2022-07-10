import React from 'react'
import { IconWrapper, Text, Image } from './FileIcon.elements'

function FileIcon (props) {

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

export default FileIcon
