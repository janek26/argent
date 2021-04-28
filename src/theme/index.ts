import { useMemo } from "react"
import { entity } from "simpler-state"

import { darkTheme } from "./dark"
import { lightTheme } from "./light"
import type { Theme } from "./theme.d"

export type { Theme } from "./theme.d"

export type ThemeName = "light" | "dark"

export const themeAtom = entity<ThemeName>("light")

export const useTheme = (): Theme => {
  const name = themeAtom.use()
  return useMemo(() => {
    return name === "dark" ? darkTheme : lightTheme
  }, [name])
}
