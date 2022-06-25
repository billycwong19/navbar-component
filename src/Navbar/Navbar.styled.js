import styled from 'styled-components'

export const NavbarContainer = styled.div`
    width: 100vw;
    background-color: ${({ theme }) => theme.background};
    height: 4em;
    display: flex;
    justify-content: space-between;
    align-items: center;
`

export const LeftNavbar = styled.div`
    display: flex;
    align-items: center;
    p {
        margin: 0 1em;
        color: ${({ theme }) => theme.font};
    }
`
export const ThemeToggleButton = styled.div`
    height: 2em;
    width: 3.5em;
    border-radius: 20px;
    background-color: white;
`

export const ThemeToggleButtonLight = styled(ThemeToggleButton)`
    display: flex;
    align-items: center;
    background-color: ${({ theme }) => theme.hover};

    div {
        background-color: ${({ theme }) => theme.background};
        height: 1.5em;
        width: 1.5em;
        border-radius: 20px;
        border: solid black 2px;
        position: relative;
        transition: .2s;
        left: .2em;
    }

    div:active {
        left: 1.6em;
    }
`

export const ThemeToggleButtonDark = styled(ThemeToggleButtonLight)`    

    div{
        transition:.2s;
        left: 1.6em;
    }
    div:active {
        left: .2em;
    }
`

export const RightNavbar = styled.div`
    display: none;

    div {
        display: flex; 
        width: 100%;
        justify-content: space-evenly;
        p {
        margin-left: 1em;
        color: ${({ theme }) => theme.font};
        transition: .3s;
        margin-right: 1rem;
    }
        p:hover {
            color: ${({ theme }) => theme.hover};
            cursor: pointer;
        }
    }

    @media only screen and (min-width: 400px) {
            display: flex;
            justify-content: space-evenly;
        }
    @media only screen and (min-width: 992px) {
            width:50%; 
        }

`

export const HamburgerContainer = styled.div`
    div {
        display: flex;
        flex-direction: column;
        hr {
        margin: .15em 1em .15em 0;
        width: 20px;
        border: 3px solid ${({ theme }) => theme.font};
        transition: .2s;
        }
        hr:active {
        margin: .3em 1em .3em 0;
        }
    }
    
    @media only screen and (min-width: 400px) {
            display: none;
            justify-content: space-evenly;
        }
`

export const DropDownNav = styled.div`
    width: 100%;
    height: fit-content;
    position: absolute;
    background-color: ${({ theme }) => theme.background};
    display: flex;
    flex-direction: column;
    margin-top: -4em;
    padding-bottom: 1em;
`

export const DropDownNavList = styled.div`
        text-align: center;

        hr {
            border: solid darkgray 1px;
            width: 30%;
        }
        li {
            font-size: 20px;
            list-style: none;
            color: ${({ theme }) => theme.font};
            transition: .3s;
        }
        li:hover {
            color: ${({ theme }) => theme.hover};
            cursor: pointer;
        }
`

export const Close = styled.div`
    width: 100%;
    display: flex;
    justify-content: flex-end;

    p {
        color: ${({ theme }) => theme.font};
        margin-right: 1em;
    }
    p:hover {
        color: ${({ theme }) => theme.hover};
        cursor: pointer;
    }
`