import React from 'react'
import MenuBar from '../../components/MenuBar/MenuBar'
import AppIcon from '../../components/Applcon/AppIcon'
import Window from '../../components/Window/Window'
import diskIcon from '../../images/floppy.png'
import vaultIcon from '../../images/vault.png'
import terminalIcon from '../../images/terminal.png'
import trashIcon from '../../images/trash.png'
import { Container, Dock } from './Desktop.elements'
import { useState } from 'react'



const Desktop = () => {

const [openWindow, setOpenWindow] = useState(0);
const [windowBarTitle, setWindowBarTitle] = useState("")

  return (
    <>
    <Container>
      <MenuBar />
        <Dock>
          <AppIcon image={diskIcon} text={"Disk"}  onClick={() => {setOpenWindow(1); setWindowBarTitle("System Disk")}}/>
          <AppIcon image={vaultIcon} text={"Vault"} onClick={() => {setOpenWindow(2); setWindowBarTitle("System Vault")}}/>
          <AppIcon image={terminalIcon} text={"Terminal"} onClick={() => {setOpenWindow(3); setWindowBarTitle("Terminal")}} />
          <AppIcon image={trashIcon} text={"Trash"}  onClick={() => {setOpenWindow(4); setWindowBarTitle("Trash")}} />
        </Dock>
        <Window openWindow = {openWindow} setOpenWindow = {setOpenWindow} windowBarTitle={windowBarTitle} setWindowBarTitle={setWindowBarTitle}/>
    </Container>
    </>
  );
}

export default Desktop;
