import React, { createContext } from "react"

export type Note = {
  id: number
  timestamp: number
  markdownBody: string
}

type GlobalContext = {
  notes: Note[]
  setNotes: React.Dispatch<React.SetStateAction<Note[]>>
}

const defaultGlobalContext: GlobalContext = {
  notes: [],
  setNotes: () => {},
}

const globalContext = createContext<GlobalContext>(defaultGlobalContext)

export const { Provider } = globalContext

export default globalContext
