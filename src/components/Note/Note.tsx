import React from "react"
import format from "date-fns/format"
import gfm from "remark-gfm"
import {
  Container,
  Content,
  Paragraph,
  ButtonContainer,
  NoteLink,
  Markdown,
  NoteSpan,
} from "./styles"
import Button from "../Button/Button"

type Props = {
  id?: number
  timestamp: number
  onDelete?: () => void
  children: string
}
const Note = ({ timestamp, onDelete, children, id }: Props) => (
  <Container>
    <Content>
      <Markdown plugins={[gfm]}>{children}</Markdown>

      <Paragraph align={Number.isNaN(Number(id)) ? "right" : "left"}>
        {typeof id === "number" ? (
          <NoteLink to={`/${id}`}>{format(timestamp, "dd/MM/yyyy")}</NoteLink>
        ) : (
          <NoteSpan>{format(timestamp, "dd/MM/yyyy")}</NoteSpan>
        )}
      </Paragraph>
    </Content>
    {onDelete && (
      <ButtonContainer>
        <Button onClick={() => onDelete()}>Delete Note</Button>
      </ButtonContainer>
    )}
  </Container>
)

export default Note
