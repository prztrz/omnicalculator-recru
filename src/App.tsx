import React from "react"
import { BrowserRouter } from "react-router-dom"
import { createGlobalStyle, ThemeProvider } from "styled-components"
import reset from "styled-reset"
import Provider from "./context/ContextProvider"
import theme from "./theme/theme"
import Main from "./sections/Main/Main"

const GlobalStyle = createGlobalStyle`
  ${reset}

  * {
    box-sizing: border-box;
  }
  
  body {
    font-family: 'Lato', sans-serif;
  }
`
function App() {
  return (
    <BrowserRouter>
      <Provider>
        <GlobalStyle />
        <ThemeProvider theme={theme}>
          <Main />
        </ThemeProvider>
      </Provider>
    </BrowserRouter>
  )
}

export default App
