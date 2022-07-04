import React from 'react'
import { MenuContainer, Menu, MenuText, MenuIcon, DateText, Spacer } from './MenuBar.elements'

const MenuBar = () => {
  return (
    <>
        <Menu >
          <MenuContainer>

            <MenuText> 
              <MenuIcon />
              ThinkrOS
            </MenuText>

            <Spacer />

            <DateText>
              7/30/2022 - 11:17 AM
            </DateText>

          </MenuContainer>
        </Menu>
    </>
  )
}

export default MenuBar