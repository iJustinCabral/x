import styled from "styled-components";

// *******************************************************************
// ***** NEED TO WORK ON THIS. THIS IS A DOG SHIT IMPLEMENTATION *****
// *******************************************************************


// The background of the Window which dims the rest of the desktop
export const WindowWrapper = styled.div`
    position: relative;
    display: contents;
    align-content: center;
    justify-content: center;
`

export const WindowContent = styled.div`
    position: relative;
    width: 600px;
    margin: auto;
    height: 300px;
    background: #fff;
    padding: 20px;
    border: 1px solid #000;
    overflow: auto;
    z-index:2
`

export const WindowBar = styled.div`
  position: relative;
  width: 640px;
  height: 30px;
  z-index: 3;
  background: #A5A5A5;
  margin: auto;
  border: 1px solid #000;
  display: flex;
  align-items: center;
  justifty-content: space-between;
`
export const CloseButton = styled.button`
  width: 24px;
  height: 24px;
  color: #000;
  background-color:#F91515;
  border-radius: 20px;
  border: none;
  outline: none;
  cursor: pointer;
  margin-left: 10px;
`
export const BarTitle = styled.div`
  min-width: 200x;
  height: 24px;
  background-color: #fff;
  border-radius: 4px;
  padding-left: 20px;
  padding-right: 20px;
  margin-left: 235px;
  font-family: "Monaco", sans-serif;
  font-weight: bold;
`
