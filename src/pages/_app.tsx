import Head from "next/head"
import { ThemeProvider } from "styled-components"

import { useTheme } from "../theme"
import { FontLink, GlobalStyle } from "../theme/Global.style"

export default function App({ Component, pageProps }) {
  const theme = useTheme()
  return (
    <>
      <Head>
        <FontLink />
      </Head>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}
