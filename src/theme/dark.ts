import { darken, invert, lighten, transparentize } from "polished"

import { Theme } from "./theme.d"

export const darkTheme: Theme = {
  colors: {
    white: "white",
    font: "white",
    fontInvert: invert("white"),
    lightFont: "#ccc",
    lightestFont: "#666",
    background: "#303339",
    background40: lighten(0.4, "#303339"),
    accent: darken(0.3, "#FFB643"),
    accent90: transparentize(0.1, "#FFB643"),
  },
  sizes: {
    borderRadius: "5px",
  },
}
