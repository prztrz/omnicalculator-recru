import React, { useContext } from "react"
import { useLocation, useHistory } from "react-router-dom"

import { ButtonsContainer, Paragraph } from "./styles"
import Button, { BUTTON_VARIANT } from "../../components/Button/Button"
import globalContext from "../../context/context"
import Note from "../../components/Note/Note"

const SingleNote = () => {
  const { pathname } = useLocation()
  const history = useHistory()
  const idParam = Number(pathname.slice(1))

  const { notes, setNotes } = useContext(globalContext)
  const note = notes.find(({ id }) => id === idParam)

  const handleGoBack = () => history.goBack()

  const handleDeleteNote = () => {
    if (!note) {
      return
    }

    setNotes((prev) => prev.filter(({ id }) => id !== note.id))
    handleGoBack()
  }

  return (
    <>
      <ButtonsContainer>
        <Button onClick={handleGoBack} variant={BUTTON_VARIANT.SECONDARY}>
          Go back
        </Button>

        {note && <Button onClick={handleDeleteNote}>Delete note</Button>}
      </ButtonsContainer>

      {note ? (
        <Note timestamp={note.timestamp}>{note.markdownBody}</Note>
      ) : (
        <Paragraph>Note of id {idParam} doest not exist</Paragraph>
      )}
    </>
  )
}

export default SingleNote
