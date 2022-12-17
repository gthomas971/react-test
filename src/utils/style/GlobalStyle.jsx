import { useContext } from 'react'
import { ThemeContext } from '../context/index'
import {createGlobalStyle} from "styled-components";

const StyledGlobalStyle = createGlobalStyle`
    * {
        font-family: 'Trebuchet MS', Helvetica, sans-serif;
        font-size : 33px;
    }
 
    body {
        background-color: ${({ isDarkMode }) => (isDarkMode ? 'black' : 'white')};
        margin: 0;  
    }
`

export const GlobalStyle = function GlobalStyle() {
    const { theme } = useContext(ThemeContext)

    return <StyledGlobalStyle isDarkMode={theme === 'dark'} />
}

