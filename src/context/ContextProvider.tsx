import React, { useMemo, useState } from "react"

import { Provider, Note } from "./context"

type Props = {
  children: React.ReactNode
}

const ContextProvider = ({ children }: Props) => {
  const [notes, setNotes] = useState<Note[]>([])

  const contextValue = useMemo(() => ({ notes, setNotes }), [notes, setNotes])

  return <Provider value={contextValue}>{children}</Provider>
}

export default ContextProvider
