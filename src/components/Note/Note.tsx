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
} from "./styles"
import Button from "../Button/Button"

type Props = {
  id: number
  timestamp: number
  onDelete?: (id: number) => void
  children: string
}
const Note = ({ timestamp, onDelete, children, id }: Props) => (
  <Container>
    <Content>
      <Paragraph>
        <Markdown plugins={[gfm]}>{children}</Markdown>
      </Paragraph>
      <Paragraph>
        <NoteLink to={`/${id}`}>{format(timestamp, "dd/MM/yyyy")}</NoteLink>
      </Paragraph>
    </Content>
    {onDelete && (
      <ButtonContainer>
        <Button onClick={() => onDelete(id)}>Delete Note</Button>
      </ButtonContainer>
    )}
  </Container>
)

export default Note
