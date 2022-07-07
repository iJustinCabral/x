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

  /* const [isWindowOpen, setIsWindowOpen] = useState(false)

  const toggleWindow = () => {
    setIsWindowOpen(!isWindowOpen)
  } */

  return (
    <>
    <Container>
      <MenuBar />
        <Dock>
          <AppIcon image={diskIcon} text={"Disk"} />
          <AppIcon image={vaultIcon} text={"Vault"} />
          <AppIcon image={terminalIcon} text={"Terminal"} />
          <AppIcon image={trashIcon} text={"Trash"} />
        </Dock>
    </Container>
    </>
  );
}

export default Desktop;
