import styled from "styled-components"

export const FormSubmitContainer = styled.div`
  text-align: center;
`

export const NotesListHeader = styled.h2`
  text-align: center;
  font-weight: 700;
  color: ${({ theme }) => theme.COLORS.INK.DARK};
  font-size: ${({ theme }) => theme.FONT_SIZE.XLARGE};
  padding-top: 18px;
`
