import { FC } from "react"

import { ThemeName, themeAtom } from "../../theme"
import SvgMoon from "../Icons/Moon"
import SvgSun from "../Icons/Sun"
import { ThemeSwitcherWrapper } from "./ThemeSwitcher.style"

// light is index 0
// dark is index 1
const getThemeNameIndex: (themeName: ThemeName) => 0 | 1 = (themeName) =>
  themeName === "light" ? 0 : 1

export const ThemeSwitcher: FC = () => {
  const themeName = themeAtom.use()
  return (
    <ThemeSwitcherWrapper activeIndex={getThemeNameIndex(themeName)}>
      <SvgSun onClick={() => themeAtom.set("light")} />
      <SvgMoon onClick={() => themeAtom.set("dark")} />
    </ThemeSwitcherWrapper>
  )
}
