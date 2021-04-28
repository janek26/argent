import "styled-components"

import { Theme } from "./src/theme/index"

declare module "styled-components" {
  export interface DefaultTheme extends Theme {}
}
