import styled from "styled-components"
import { Link } from "react-router-dom"
import { darken } from "polished"
import ReactMarkdown from "react-markdown"

export const Container = styled.section`
  background-color: ${({ theme }) => theme.COLORS.PAPER.NORMAL};
  display: flex;
  padding: 16px;
  margin-top: 16px;
  min-height: 100px;
`
export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex-grow: 1;
  padding-right: 8px;
`

export const Paragraph = styled.p<{ align?: "right" | "left" }>`
  font-size: ${({ theme }) => theme.FONT_SIZE.MEDIUM};
  color: ${({ theme }) => theme.COLORS.INK.DARK};
  padding-top: 8px;
  text-align: ${({ align = "left" }) => align};
`
export const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 85px;
`
export const NoteLink = styled(Link)`
  color: ${({ theme }) => theme.COLORS.INK.DARK};
  font-size: ${({ theme }) => theme.FONT_SIZE.SMALL};
  text-decoration: underline;
  transition: all 0.2s ease-in-out;
  font-weight: 700;

  &:hover {
    color: ${({ theme }) => theme.COLORS.INK.BLACK};
  }

  &:active {
    color: ${({ theme }) => darken(0.1, theme.COLORS.INK.DARK)};
  }
`

export const NoteSpan = styled.span`
  color: ${({ theme }) => theme.COLORS.INK.DARK};
  font-size: ${({ theme }) => theme.FONT_SIZE.SMALL};
`

export const Markdown = styled(ReactMarkdown)`
  h1 {
    padding-bottom: 24px;
    font-size: ${({ theme }) => theme.FONT_SIZE.XXXLARGE};
  }

  h2 {
    padding-bottom: 24px;
    font-size: ${({ theme }) => theme.FONT_SIZE.XXLARGE};
  }

  h3 {
    padding-bottom: 18px;
    font-size: ${({ theme }) => theme.FONT_SIZE.XLARGE};
  }

  h4 {
    padding-bottom 12px;
    font-size: ${({ theme }) => theme.FONT_SIZE.LARGE};
  }

  h5 {
    padding-bottom: 12px;
    font-size: ${({ theme }) => theme.FONT_SIZE.MEDIUM};
  }


  h6 {
    padding-bottom: 12px;
    font-size: ${({ theme }) => theme.FONT_SIZE.MEDIUM};
  }

  h1,
  h2,
  h3,
  h4,
  h5 {
    font-weight: bold;
  }

  em {
    font-style: italic;
  }

  pre,
  code {
    background-color: ${({ theme }) => theme.COLORS.PAPER.CODE};
    color: ${({ theme }) => theme.COLORS.INK.CODE};
    font-family: Courier, sans-serif;
  }

  pre, ul, ol, p, table {
    margin-bottom: 12px
  }

  pre {
    padding: 8px;
  }

  ul {
    list-style-type: disc;
    padding-left: 28px;
  }

  ol {
    list-style-type: arabic;
    padding-left: 28px;

    li {
      padding-left: 8px;
    }
  }

  strong {
    font-weight: 700;
  }

  tr {
    background-color: ${({ theme }) => theme.COLORS.PAPER.WHITE};
    border-top: 1px solid ${({ theme }) => theme.COLORS.PAPER.DARK};
  }

  tbody tr:nth-of-type(odd) {
    background-color: ${({ theme }) => theme.COLORS.PAPER.ORNAMENT};
  }

  th {
    font-weight: 700;
  }

  th,
  td {
    padding: 6px 13px;
  }

  blockquote {
    border-left: 8px solid ${({ theme }) => theme.COLORS.PAPER.ORNAMENT_DARK};
    padding-left: 12px;
  }

  a {
    color: ${({ theme }) => theme.COLORS.INK.DARK};
    font-size: ${({ theme }) => theme.FONT_SIZE.SMALL};
    text-decoration: underline;
    transition: all 0.2s ease-in-out;
    font-weight: 700;

    &:hover {
      color: ${({ theme }) => theme.COLORS.INK.BLACK};
    }

    &:active {
      color: ${({ theme }) => darken(0.1, theme.COLORS.INK.DARK)};
    }
  }
`
