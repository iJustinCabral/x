import React from 'react'
import { WindowWrapper, WindowContent, WindowBar,CloseButton, BarTitle} from './Window.elements'


const Window = ({openWindow, setOpenWindow}, props) => {

  if (openWindow === 0) return null

  /*
  const titles = ""
  switch(openWindow){
    case 1:
      titles = "Disk";
    break;
    case 2:
      titles = "Vault";
    break;
    case 3:
      titles = "Terminal";
    break;
    case 4:
      titles = "Trash";
    break;
  }
  */

  return (
    <>
      <WindowWrapper>

        <WindowBar>
        <CloseButton onClick={() => setOpenWindow(0)}> X </CloseButton>
        <BarTitle> {props.text} </BarTitle>
        </WindowBar>
        <WindowContent >
           This is a test window 1
        </WindowContent >
      </WindowWrapper>
    </>
  )
}

export default Window
