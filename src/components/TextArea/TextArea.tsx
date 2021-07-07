import React from "react"

import { Container, StyledTextArea, LabelText, ErrorText } from "./styles"

type Props = React.TextareaHTMLAttributes<HTMLTextAreaElement> & {
  label?: string
  error?: string
}
const TextArea = ({ label = "", error = "", ...props }: Props) => (
  <Container>
    {label && <LabelText>{label}</LabelText>}
    <StyledTextArea {...props} />
    <ErrorText>{error}</ErrorText>
  </Container>
)

export default TextArea
