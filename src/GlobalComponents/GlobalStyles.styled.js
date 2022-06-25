import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
* {
    font-family: Helvetica;
    font-weight: 300;
}

html {
    height: 100%;
}
body {
    padding: 0;
    margin: 0;
    height: 100%;
    width: 100%;
}
`
