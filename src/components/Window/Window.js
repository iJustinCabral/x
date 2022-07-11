import React, {useEffect, useState} from 'react'
import { WindowWrapper, WindowContent, WindowContentWrapper,TerminalWrapper, WindowBar,CloseButton, BarTitle, TextField, VaultContentWrapper, VaultPasswordText, UnlockButton} from './Window.elements'
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



const vaultPassphrase = "testing"
const didEnterCorrectPhrase = false;
const MAX_LENGTH = "10"


const Window = ({openWindow, setOpenWindow, windowBarTitle}) => {

  const [inputText, setInputText] = useState('');

  const handleChange = event => {
    setInputText(event.target.value);

  };

  const handleVaultClick = event => {
    event.preventDefault();

   //******** TODO: Remove this before launch ********
    console.log('handleClick 👉️', inputText);

    if ( vaultPassphrase === inputText){
      console.log("you got it");
      // TODO: Forward to the congratulations page
    }
    else{
      console.log("Wrong");
      document.getElementById('textField').value = '';
      //TODO: DDOS ANY USER THAT GETS IT WRONG
    }
  };

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
            <VaultContentWrapper>
              <VaultPasswordText> Enter Vault Password </VaultPasswordText>
              <TextField maxLength={MAX_LENGTH} id="textField" onChange={handleChange} type="password" autoFocus="autoFocus" value ={inputText}/>
              <UnlockButton onClick = {handleVaultClick}> Unlock Vault</UnlockButton>
            </VaultContentWrapper>
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
             <div> Trash is empty.</div>
           }
        </WindowContent >

      </WindowWrapper>
    </>
  )
}

export default Window
