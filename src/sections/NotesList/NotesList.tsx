import React, { useContext } from "react"
import Note from "../../components/Note/Note"
import globalContext from "../../context/context"
import NoteForm from "./NoteForm"
import { NotesListHeader } from "./styles"

const NotesList = () => {
  const { notes, setNotes } = useContext(globalContext)

  const handleDeleteNote = (noteId: number) => () =>
    setNotes((prev) => prev.filter(({ id }) => id !== noteId))
  return (
    <>
      <NoteForm />
      {!!notes.length && <NotesListHeader>Latest notes</NotesListHeader>}
      {notes.reduceRight(
        (result: React.ReactElement[], { id, markdownBody, timestamp }) => [
          ...result,
          <Note
            key={id}
            id={id}
            timestamp={timestamp}
            onDelete={handleDeleteNote(id)}
          >
            {markdownBody}
          </Note>,
        ],
        []
      )}
    </>
  )
}

export default NotesList
