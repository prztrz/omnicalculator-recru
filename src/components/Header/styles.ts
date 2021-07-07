import styled from "styled-components"

export const Container = styled.header`
  width: 100%;
  margin: 0 auto;
  padding: 16px;
  background-color: ${({ theme }) => theme.COLORS.PAPER.NORMAL};
`

export const InnerHeader = styled.div`
  max-width: 1260px;
  width: 100%;
  margin: 0 auto;
`

export const Heading = styled.h1`
  font-size: ${({ theme }) => theme.FONT_SIZE.LARGE};
  color: ${({ theme }) => theme.COLORS.INK.NORMAL};
  font-weight: 700;
`
