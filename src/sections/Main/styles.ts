import styled from "styled-components"

export const Container = styled.main`
  width: 100%;
  background-color: ${({ theme }) => theme.COLORS.PAPER.LIGHT};
`
export const InnerContainer = styled.main`
  width: 100%;
  max-width: 760px;
  padding: 16px 0;
  margin: 0 auto;
`
