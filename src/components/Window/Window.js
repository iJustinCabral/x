import React, {useEffect} from 'react'
import { WindowWrapper, WindowContent, WindowBar,CloseButton, BarTitle} from './Window.elements'
import { initTerminal } from 'ttty'
import fileIcon from '../../images/file.png'


const Window = ({openWindow, setOpenWindow, windowBarTitle}) => {

  if (openWindow === 0) return null

  return (
    <>
      <WindowWrapper>

        <WindowBar>
           <CloseButton onClick={() => setOpenWindow(0)}> X </CloseButton>
           <BarTitle> {windowBarTitle} </BarTitle>
        </WindowBar>

        <WindowContent>
           {openWindow === 1 && <div> <img src={fileIcon} alt="File" /> </div>}

           {openWindow === 2 && <div> This is the system vault </div>}

           {openWindow === 3 && <div id="terminal" />}

           {openWindow === 4 && <div> testing 4</div>}
        </WindowContent >

      </WindowWrapper>
    </>
  )
}

export default Window
