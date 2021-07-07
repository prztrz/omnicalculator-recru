import styled from "styled-components"

export const ButtonsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 18px 0;
`

export const Paragraph = styled.p`
  color: ${({ theme }) => theme.COLORS.INK.DARK};
  font-size: ${({ theme }) => theme.FONT_SIZE.LARGE};
  font-weight: 700;
  text-align: center;
`
