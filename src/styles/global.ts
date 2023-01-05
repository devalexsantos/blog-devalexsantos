import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        border: 0;
        box-sizing: border-box;
    }

    body {
        background-color: ${(props) => props.theme['gray-800']};
        color: ${(props) => props.theme['gray-100']};
        -webkit-font-smoothing: antialiased;
    }

    body, input, textarea, button {
        font: 300 1rem Nunito, sans-serif;
    }

    a {
    text-decoration: none;
    color: ${(props) => props.theme['gray-100']};

    &:hover {
        text-decoration: underline;
        }
    }
`
