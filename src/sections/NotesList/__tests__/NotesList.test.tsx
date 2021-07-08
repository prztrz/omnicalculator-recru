import React from "react"
import { fireEvent } from "@testing-library/react"
import render from "../../../utils/testUtils"
import NotesList from "../NotesList"

describe("NotestList", () => {
  it("does not display notes list header if no note is added", () => {
    const { queryByText, getByLabelText } = render(<NotesList />)

    expect(queryByText("Latest notes")).not.toBeInTheDocument()
  })

  it("does not allow to add empty note", () => {
    const { getByText, queryByText } = render(<NotesList />)
    const submitButton = getByText("Add Note")

    expect(queryByText("Text cannot be empty")).not.toBeInTheDocument()

    fireEvent.click(submitButton)

    expect(queryByText("Latest notes")).not.toBeInTheDocument()
    expect(getByText("Text cannot be empty")).toBeInTheDocument()
  })

  it("adds notes, note header and clears input value", () => {
    const {
      getByLabelText,
      getByDisplayValue,
      queryByDisplayValue,
      getByText,
    } = render(<NotesList />)

    const textArea = getByLabelText("Notes")
    const submitButton = getByText("Add Note")

    fireEvent.change(textArea, { target: { value: "Test Note 1" } })
    expect(getByDisplayValue("Test Note 1")).toBeInTheDocument()
    fireEvent.click(submitButton)
    expect(textArea).toHaveValue("")
    expect(queryByDisplayValue("Test Note 1")).not.toBeInTheDocument()
  })

  it("sorts added notest from newest", () => {
    const { getByLabelText, getByText, getAllByText } = render(<NotesList />)

    const textArea = getByLabelText("Notes")
    const submitButton = getByText("Add Note")

    fireEvent.change(textArea, { target: { value: "Test Note 1" } })
    fireEvent.click(submitButton)

    fireEvent.change(textArea, { target: { value: "Test Note 2" } })
    fireEvent.click(submitButton)

    const notes = getAllByText(/Test Note */)
    expect(notes[0]).toHaveTextContent("Test Note 2")
    expect(notes[1]).toHaveTextContent("Test Note 1")
  })

  it("deletes notes on delete button clikc", () => {
    const { getByLabelText, getByText, queryByText } = render(<NotesList />)

    const textArea = getByLabelText("Notes")
    const submitButton = getByText("Add Note")

    fireEvent.change(textArea, { target: { value: "Test Note 1" } })
    fireEvent.click(submitButton)
    expect(getByText("Test Note 1")).toBeInTheDocument()

    const deleteButton = getByText("Delete Note")
    fireEvent.click(deleteButton)
    expect(queryByText("Test Note 1")).not.toBeInTheDocument()
  })
})
