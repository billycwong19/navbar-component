import React, { useState } from 'react';
import { NavbarContainer, LeftNavbar, ThemeToggleButtonLight, ThemeToggleButtonDark, RightNavbar, HamburgerContainer, DropDownNav, DropDownNavList, Close } from './Navbar.styled';

export default function Navbar({ themeToggler, theme }) {
    const [dropDown, setDropDown] = useState(false)

    const handleShowDropDown = (event) => {
       dropDown === false ? setDropDown(true) : setDropDown(false)
    }

    return(
        <>
        <NavbarContainer>
            <LeftNavbar>
                <p>navbar</p>

                { theme === 'light' ?
                <ThemeToggleButtonLight onClick={() => themeToggler()}>
                <div></div>
                </ThemeToggleButtonLight>
                :
                <ThemeToggleButtonDark onClick={() => themeToggler()}>
                    <div></div>
                </ThemeToggleButtonDark>
                }
                
            </LeftNavbar>
            <RightNavbar>
                <div>
                    <p>Login</p>
                    <p>Sign Up</p>
                    <p>Info</p>
                </div>
            </RightNavbar>
            
            <HamburgerContainer>
                <div onClick={() => handleShowDropDown()} >
                    <hr />
                    <hr />
                    <hr />
                </div>  
            </HamburgerContainer>

        </NavbarContainer>

        { dropDown &&
            <DropDownNav>
                <DropDownNavList>
                <Close>
                    <p onClick={() => handleShowDropDown()}>close</p>
                </Close>
                    <li>Login</li>
                    <hr />
                    <li>Sign Up</li>
                    <hr />
                    <li>Info</li>
                    <hr />
                </DropDownNavList>
            </DropDownNav>
        }
        </>
    )
}