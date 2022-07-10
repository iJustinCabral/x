import styled from "styled-components";

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
export const WindowContentWrapper = styled.div`
  display:flex;
  width: 100%;
  height: 100%;
  padding: 20px;
`

export const TerminalWrapper = styled.div`
  width: 100%;
  height: 100%;
  background: black;
`


export const WindowBar = styled.div`
  position: relative;
  width: 640px;
  height: 36px;
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
  font-weight: bold;
  border: 1px solid #000;
`
export const BarTitle = styled.div`
  min-width: 200x;
  height: 24px;
  background-color: #fff;
  padding-left: 20px;
  padding-right: 20px;
  padding-top: 4px;
  margin-left: 230px;
  font-family: "Monaco", sans-serif;
  font-weight: bold;
  border: 1px solid #000;
`
