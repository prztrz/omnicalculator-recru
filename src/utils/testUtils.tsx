import React from "react"
import { render } from "@testing-library/react"
import { MemoryRouter } from "react-router-dom"
import { ThemeProvider } from "styled-components"
import ContextProvier from "../context/ContextProvider"

import theme from "../theme/theme"

export default (children: React.ReactNode) =>
  render(
    <ContextProvier>
      <ThemeProvider theme={theme}>
        <MemoryRouter>{children}</MemoryRouter>
      </ThemeProvider>
    </ContextProvier>
  )
