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
export const VaultContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: auto;
  height: auto;
`

export const VaultPasswordText = styled.h3`
  margin-top: 60px;
  margin-left: 200px;
  font-family: "Monaco", sans-serif;
  font-weight: bold;
`

export const TextField = styled.input`

  margin-left: 145px;
  width: 300px;
  height: 40px;
  border: 1px solid black;
  font-size: 26px;

`

export const UnlockButton = styled.button`
  width: 160px;
  height: 40px;
  margin-left: 220px;
  margin-top: 30px;
  background-color: red;
  border: 1px solid black;
  color: white;
  text-align: center;
  font-size: 16px;
  font-family: "Monaco", sans-serif;
  font-weight: bold;
  cursor: pointer;
  &:hover {
        background: #4CAF50;
    }
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
  min-width: 100px;
  height: 24px;
  background-color: #fff;
  padding-left: 20px;
  padding-right: 20px;
  padding-top: 4px;
  margin-left: 215px;
  font-family: "Monaco", sans-serif;
  font-weight: bold;
  border: 1px solid #000;
`

export const MessageText = styled.div`
  mind-width: 24px;
  padding-top: 5px;
  margin: 0 auto;
  font-family: "Monaco", sans-serif;
  font-weight: bold;
`
