import { FC } from "react"
import { createGlobalStyle } from "styled-components"

export const FontLink: FC = () => (
  <>
    <link rel="preconnect" href="https://fonts.gstatic.com" />
    <link
      href="https://fonts.googleapis.com/css2?family=Roboto&display=swap"
      rel="stylesheet"
    />
  </>
)

export const GlobalStyle = createGlobalStyle`
  body, html, #__next {
    height: 100%;
    display: flex;
    flex-direction: column;

    padding: 0 20px;
  }

  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Roboto', sans-serif;
    background-color: ${({ theme }) => theme.colors.background};
    color: ${({ theme }) => theme.colors.font};
  }
`
