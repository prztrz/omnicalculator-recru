import React, { useMemo, ChangeEventHandler, useContext } from "react"

import TextArea from "../../components/TextArea/TextArea"
import globalContext from "../../context/context"
import useForm, { FormFields } from "../../hooks/useForm"
import Button, { BUTTON_VARIANT } from "../../components/Button/Button"
import { FormSubmitContainer } from "./styles"

const NoteForm = () => {
  const { setNotes } = useContext(globalContext)
  const fields = useMemo<FormFields<string>>(
    () => ({
      text: {
        value: "",
        errors: [],
        validators: [
          {
            method: (text) => String(text).length > 0,
            errorMsg: "Text cannot be empty",
          },
        ],
      },
    }),
    []
  )
  const { setFieldValue, getFieldValue, getFieldErrors, handleSubmit } =
    useForm(fields, (currentFields) => {
      setNotes((prev) => [
        ...prev,
        {
          id: prev.length,
          timestamp: Date.now(),
          markdownBody: String(currentFields.text.value),
        },
      ])
    })

  const handleTextChange: ChangeEventHandler<HTMLTextAreaElement> = (e) => {
    setFieldValue("text", e.target.value)
  }

  return (
    <form onSubmit={handleSubmit}>
      <TextArea
        onChange={handleTextChange}
        value={String(getFieldValue("text"))}
        label="Notes"
        error={getFieldErrors("text").join(", ")}
        placeholder="Note text"
      />
      <FormSubmitContainer>
        <Button type="submit" variant={BUTTON_VARIANT.WHITE}>
          Add Note
        </Button>
      </FormSubmitContainer>
    </form>
  )
}

export default NoteForm
