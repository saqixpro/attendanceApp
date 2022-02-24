import React from 'react'
import MainNav from './src/navigation'
import {Provider as PaperProvider, ThemeProvider} from 'react-native-paper'
const App = () => {
  return (
  <PaperProvider>
    <ThemeProvider>
      <MainNav />
    </ThemeProvider>
  </PaperProvider>
  )
}

export default App;