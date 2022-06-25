import React, { useState } from "react";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./GlobalComponents/GlobalStyles.styled";
import Navbar from './Navbar/Navbar'
import {lightTheme, darkTheme} from "./GlobalComponents/Theme";

function App() {
    const [theme, setTheme] = useState('light')

    const themeToggler = () => {
        theme === 'light' ? setTheme('dark') : setTheme('light')
    }

    return (
        <>
          <ThemeProvider theme={ theme === 'light' ? lightTheme : darkTheme }>
            <GlobalStyles />
                <Navbar themeToggler={themeToggler} theme={theme} />
          </ThemeProvider>
        </>
    );
}

export default App;
