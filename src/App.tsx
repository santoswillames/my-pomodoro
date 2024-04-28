import { ThemeProvider } from 'styled-components'
import { defaultTheme } from './styles/theme/defualt'
import { GlobalStyle } from './styles/global'

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <h1>Hellor world!</h1>
      <GlobalStyle />
    </ThemeProvider>
  )
}
