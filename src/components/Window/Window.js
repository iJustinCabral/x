import React, {useEffect, useState} from 'react'
import { WindowWrapper, WindowContent, WindowContentWrapper,TerminalWrapper, WindowBar,
         CloseButton, BarTitle, TextField, VaultContentWrapper, VaultPasswordText, UnlockButton, MessageText} from './Window.elements'
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
let didEnterCorrectPhrase = false;
const MAX_LENGTH = "10"


const Window = ({openWindow, setOpenWindow, windowBarTitle}) => {

  let congratsMessage = "";

  const [inputText, setInputText] = useState('');
  const [messageText, setMessageText] = useState('');

  const handleChange = event => {
    setInputText(event.target.value);

  };

  const handleVaultClick = event => {
    event.preventDefault();

   //******** TODO: Remove this before launch ********
    console.log('handleClick 👉️', inputText);

    if ( vaultPassphrase === inputText){
      document.getElementById('textField').value = '';
      didEnterCorrectPhrase = true;
      setMessageText("Congrats you solved our challenge! Rerouting...")
      setTimeout(() => {window.location.href = "/bigbang"}, 3000)
    }

    else{
      console.log("Wrong");
      setMessageText("Incorrect.. try again.")
      document.getElementById('textField').value = '';
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
              <FileIcon image={fileIcon} text={"File 1.txt"} />
              <FileIcon image={fileIcon} text={"File 2.png"} />
              <FileIcon image={fileIcon} text={"File 3.txt"} />
              <FileIcon image={fileIcon} text={"File 4.txt"} />
              <FileIcon image={fileIcon} text={"File 5.txt"} />
             </WindowContentWrapper>

           }

           {openWindow === 2 &&
            <VaultContentWrapper>
              <VaultPasswordText> Enter Vault Password </VaultPasswordText>
              <TextField maxLength={MAX_LENGTH} id="textField" onChange={handleChange} autoFocus="autoFocus" value ={inputText}/>
              <UnlockButton onClick = {handleVaultClick}> Unlock Vault</UnlockButton>
              <MessageText>{messageText}</MessageText>
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
