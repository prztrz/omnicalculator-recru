import styled from "styled-components"

export const Container = styled.label`
  display: block;
`

export const StyledTextArea = styled.textarea`
  width: 100%;
  height: 120px;
  padding: 8px;
  resize: none;

  &:focus {
    outline: none;
  }

  &:focus-visible {
    outline: -webkit-focus-ring-color auto 1px;
  }
`

export const LabelText = styled.p`
  font-weight: 700;
  color: ${({ theme }) => theme.COLORS.INK.NORMAL};
  font-size: ${({ theme }) => theme.FONT_SIZE.MEDIUM};
  padding-bottom: 8px;
`

export const ErrorText = styled.p`
  color: ${({ theme }) => theme.COLORS.INK.ERROR};
  font-size: ${({ theme }) => theme.FONT_SIZE.SMALL};
  padding-bottom: 8px;
  height: 18px;
`
