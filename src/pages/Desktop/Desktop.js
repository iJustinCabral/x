import React from 'react'
import MenuBar from '../../components/MenuBar/MenuBar'
import AppIcon from '../../components/Applcon/AppIcon'
import Window from '../../components/Window/Window'
import diskIcon from '../../images/floppy.png'
import vaultIcon from '../../images/vault.png'
import terminalIcon from '../../images/terminal.png'
import trashIcon from '../../images/trash.png'
import { Container, Dock, IconWrapper, Image, Text } from './Desktop.elements'
import { useState } from 'react'


const Desktop = () => {

const [openWindow, setOpenWindow] = useState(0);
const titles=["","Disk","Vault","Terminal","Trash"]

  return (
    <>
    <Container>
      <MenuBar />
        <Dock>
          <AppIcon image={diskIcon} text={"Disk"}  onClick={() => setOpenWindow(1)}/>
          <AppIcon image={vaultIcon} text={"Vault"} />
          <AppIcon image={terminalIcon} text={"Terminal"} />
          <AppIcon image={trashIcon} text={"Trash"}  />
        </Dock>
        <Window openWindow = {openWindow} setOpenWindow = {setOpenWindow} text={titles[1]}/>
    </Container>
    </>
  );
}

export default Desktop;
