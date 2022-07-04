import React from 'react'
import MenuBar from '../../components/MenuBar/MenuBar'
import AppIcon from '../../components/Applcon/AppIcon'
import Window from '../../components/Window/Window'
import diskIcon from '../../images/floppy.png'
import vaultIcon from '../../images/vault.png'
import terminalIcon from '../../images/terminal.png'
import { Container } from './Desktop.elements'


const Desktop = () => {
  return (
    <>
    <Container>
      <MenuBar />
      <AppIcon image={diskIcon} text={"Disk"} />
      <AppIcon image={vaultIcon} text={"Vault"} />
      <AppIcon image={terminalIcon} text={"Terminal"} />
    </Container>
    </>
  );
}

export default Desktop;
