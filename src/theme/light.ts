import { darken, invert, transparentize } from "polished"

import { Theme } from "./theme.d"

export const lightTheme: Theme = {
  colors: {
    white: "white",
    font: "black",
    fontInvert: invert("black"),
    lightFont: "#666666",
    lightestFont: "#ccc",
    background: "white",
    background40: darken(0.4, "white"),
    accent: "#FFB643",
    accent90: transparentize(0.1, "#FFB643"),
  },
  sizes: {
    borderRadius: "5px",
  },
}
