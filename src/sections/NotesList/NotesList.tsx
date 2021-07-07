import React, { useContext } from "react"
import Note from "../../components/Note/Note"
import globalContext from "../../context/context"
import NoteForm from "./NoteForm"

const NotesList = () => {
  const { notes, setNotes } = useContext(globalContext)

  const handleDeleteNote = (noteId: number) =>
    setNotes((prev) => prev.filter(({ id }) => id !== noteId))
  return (
    <>
      <NoteForm />
      {notes.map(({ id, markdownBody, timestamp }) => (
        <Note
          key={id}
          id={id}
          timestamp={timestamp}
          onDelete={handleDeleteNote}
        >
          {markdownBody}
        </Note>
      ))}
    </>
  )
}

export default NotesList
