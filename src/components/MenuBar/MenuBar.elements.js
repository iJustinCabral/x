import styled  from "styled-components";
import thinkr from '../../images/logo.png'


export const Menu = styled.div`
    background: #fff;
    height: 40px;
    display: flex;
    position: sticky;
    top: 0;
    z-index: 999; 
    outline: black solid 1px;
`

export const MenuContainer = styled.div`
    display: flex;
    justify-content: space-between;
    height: 40px;
`

export const MenuText = styled.div`
    color: #000;
    justify-self: flex-start;
    font-size: 1rem;
    display: flex;
    align-items: center;
    font-weight: bold;
    font-family: "Monaco", sans-serif;
    margin-left: 4px;
`
export const DateText = styled.div`
    color: #000;
    justify-self: flex-end;
    font-size: 1rem;
    display: flex;
    align-items: center;
    font-weight: bold;
    font-family: "Monaco", sans-serif;

`

export const Spacer = styled.div`
    width: 730px;
`

export const MenuIcon = styled.img.attrs ({ src: `${thinkr}`}) `
    height: 30px;
    width: 30px;
`