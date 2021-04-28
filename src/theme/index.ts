/**
 * I added this just for fun, and to show how you can handle global state, without props passing
 *
 * */
import { useMemo } from "react"
import { entity } from "simpler-state"

import { darkTheme } from "./dark"
import { lightTheme } from "./light"
import type { Theme, ThemeName } from "./theme.d"

export type { Theme, ThemeName } from "./theme.d"

// some library I wanted to try, allows easy state management without React.Context, without props passing
// could easily be replaced by a custom implementation
export const themeAtom = entity<ThemeName>("light")

// custom hook :)
export const useTheme = (): Theme => {
  const name = themeAtom.use()
  return useMemo(() => {
    return name === "dark" ? darkTheme : lightTheme
  }, [name])
}
