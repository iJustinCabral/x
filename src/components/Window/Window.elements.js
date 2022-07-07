import styled from "styled-components";

// *******************************************************************
// ***** NEED TO WORK ON THIS. THIS IS A DOG SHIT IMPLEMENTATION *****
// *******************************************************************


// The background of the Window which dims the rest of the desktop
export const WindowWrapper = styled.div`
    position: fixed;

    width: 100%;
    height: 100vh;
    top: 0;
    left: 0;
`
// Need to figure out the proper way to implement this. 
// Might have to make another component for just the top bar
// That way we can pass in the Name of each icon clicked
export const WindowTopBar = styled.div`
    position: fixed;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 642px;
    height: 40px;
    margin: 0 auto;
    margin-top: 130px;
    margin-left: 230px;
    background: #D9D9D9;
    border: 1px solid #000;
    z-index: 3;
    font-family: "Monaco", sans-serif;
    font-weight: bold;
`

export const WindowContent = styled.div`
    position: relative;
    width: 600px;
    margin: auto;
    margin-top: 160px;
    height: 300px;
    background: #fff;
    padding: 20px;
    border: 1px solid #000;
    overflow: auto;
    border-radius: 8px;
    z-index:2
`

export const CloseIcon = styled.button`
    content: 'x';
    cursor: pointer;
    position: fixed;
    background: red;
    width: 25px;
    height: 25px;
    border-radius: 50%;
    line-height: 20px;
    text-align: center;
    border: 1px solid #999;
    font-size: 20px;
    foreground-color: #fff;
`