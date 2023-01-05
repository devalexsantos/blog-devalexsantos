import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import { Router } from './components/Router'
import { PostsContextProvider } from './contexts/PostsContext'
import { UserInfoContextProvider } from './contexts/UserInfoContext'
import { GlobalStyle } from './styles/global'
import { defaultTheme } from './styles/themes/default'

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <UserInfoContextProvider>
        <PostsContextProvider>
          <BrowserRouter>
            <Router />
            <GlobalStyle />
          </BrowserRouter>
        </PostsContextProvider>
      </UserInfoContextProvider>
    </ThemeProvider>
  )
}

export default App
