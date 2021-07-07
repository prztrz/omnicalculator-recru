import styled, { DefaultTheme } from "styled-components"
import { darken } from "polished"

export enum BUTTON_VARIANT {
  PRIMARY = "primary",
  SECONDARY = "secondary",
  WHITE = "white",
}

const getBgColor = (variant: BUTTON_VARIANT, theme: DefaultTheme) => {
  switch (variant) {
    case BUTTON_VARIANT.SECONDARY:
      return theme.COLORS.PAPER.DARK
    case BUTTON_VARIANT.WHITE:
      return theme.COLORS.PAPER.WHITE
    case BUTTON_VARIANT.PRIMARY:
    default:
      return theme.COLORS.PAPER.ACCENT
  }
}

const getColor = (variant: BUTTON_VARIANT, theme: DefaultTheme) => {
  switch (variant) {
    case BUTTON_VARIANT.SECONDARY:
    case BUTTON_VARIANT.WHITE:
      return theme.COLORS.INK.BLACK
    case BUTTON_VARIANT.PRIMARY:
    default:
      return theme.COLORS.INK.WHITE
  }
}

const getBorder = (variant: BUTTON_VARIANT, theme: DefaultTheme) => {
  switch (variant) {
    case BUTTON_VARIANT.SECONDARY:
      return `1px solid ${theme.COLORS.PAPER.BLACK}`
    case BUTTON_VARIANT.WHITE:
      return `1px solid ${theme.COLORS.PAPER.NORMAL}`
    case BUTTON_VARIANT.PRIMARY:
    default:
      return "none"
  }
}

export const Container = styled.button<{ variant?: BUTTON_VARIANT }>`
  padding: 6px 10px;
  text-align: center;
  font-size: ${({ theme }) => theme.FONT_SIZE.SMALL};
  background-color: ${({ theme, variant = BUTTON_VARIANT.PRIMARY }) =>
    getBgColor(variant, theme)};
  border-radius: 3px;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  border: ${({ theme, variant = BUTTON_VARIANT.PRIMARY }) =>
    getBorder(variant, theme)};
  color: ${({ variant = BUTTON_VARIANT.PRIMARY, theme }) =>
    getColor(variant, theme)};

  &:hover:not([disabled]) {
    background-color: ${({ theme, variant = BUTTON_VARIANT.PRIMARY }) =>
      darken(0.15, getBgColor(variant, theme))};
  }

  &:active:not([disabled]) {
    background-color: ${({ theme, variant = BUTTON_VARIANT.PRIMARY }) =>
      darken(0.075, getBgColor(variant, theme))};
  }

  &:focus {
    outline: none;
  }

  &:focus-visible:not([disabled]) {
    outline: -webkit-focus-ring-color auto 1px;
  }

  &[disabled] {
    opacity: 0.5;
    cursor: not-allowed;
  }
`
