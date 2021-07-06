import { createContext } from "react"

export type Note = {
  timestamp: number
  markdownBody: string
}

type GlobalContext = {
  notes: Note[]
  setNotes: (arg: Note[]) => void
}

const defaultGlobalContext: GlobalContext = {
  notes: [],
  setNotes: () => {},
}

const globalContext = createContext<GlobalContext>(defaultGlobalContext)

export const { Provider } = globalContext

export default globalContext
