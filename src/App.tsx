import React from "react"
import { Reset } from "styled-reset"
import Provider from "./context/ContextProvider"

function App() {
  return (
    <Provider>
      <Reset />
      <div className="App">hello</div>
    </Provider>
  )
}

export default App
