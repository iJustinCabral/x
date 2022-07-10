import React, {useEffect} from 'react'
import { WindowWrapper, WindowContent, WindowContentWrapper,TerminalWrapper, WindowBar,CloseButton, BarTitle} from './Window.elements'
import FileIcon from '../../components/FileIcon/FileIcon'
import fileIcon from '../../images/file.png'
import Terminal from 'react-console-emulator'

const commands = {
  echo: {
    description: 'Echo a passed string.',
    usage: 'echo <string>',
    fn: (...args) => args.join(' ')
  }
}

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
           {openWindow === 1 &&
             <WindowContentWrapper>
              <FileIcon image={fileIcon} text={"Hello.txt"} />
              <FileIcon image={fileIcon} text={"ZEF.png"} />
              <FileIcon image={fileIcon} text={"Party.txt"} />
              <FileIcon image={fileIcon} text={"SRA.txt"} />
              <FileIcon image={fileIcon} text={"Diffie.txt"} />
             </WindowContentWrapper>

           }

           {openWindow === 2 &&
             <div> This is the system vault </div>
           }

           {openWindow === 3 &&
             <Terminal
             commands={commands}
             welcomeMessage={''}
             promptLabel={'alice:~$'}
             autoFocus={true}
             contentStyle={{ color : '#008106'}}
             style={{background: 'black'}}
             promptLabelStyle={{color : '#008106'}}
             inputTextStyle={{color : '#008106'}}

             />
           }

           {openWindow === 4 &&
             <div> testing 4</div>
           }
        </WindowContent >

      </WindowWrapper>
    </>
  )
}

export default Window
